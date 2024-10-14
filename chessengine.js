
class Chess {
  
    constructor(){
      
      //piece values
      this.king = 1000;
      this.queen = 9;
      this.rook = 5;
      this.knight = 3;
      this.bishop = 3;
      this.pawn = 1;
      
      this.startingBoard = "rnbqkbnrpppppppp--------------------------------PPPPPPPPRNBQKBNR";
      this.board = "rnbqkbnrpppppppp--------------------------------PPPPPPPPRNBQKBNR";
      
      /*
      rnbqkbnr
      pppppppp
      --------
      --------
      --------
      --------
      PPPPPPPP
      RNBQKBNR
      */
      
    }
    
    evaluateBoard(board){
      
      if(!board){board=this.board;}
      
      let final = 0;
      
      let pieceValues = 0;
      
      //Cycle through each square and add the piece values
      [...board].forEach((i) => {
        
        pieceValues += this.pieceValue(i);
        
      })
      
      final += pieceValues;
      
      return final;
      
    }
    
    getLegalMoves(board, turn, enPassant, castle){
      
      if(!board){board=this.board;}
      
      //loop through each index of the board
      for(let index = 0; index < board.length; index++){
        // skip over any empty squares
        if(board[index] == "-"){ continue; }
        
        
        
      }
      
    }
    
    getRookMoves(index, board){
      
      if(!board){board=this.board;}
      
      let i;
      let legalMoves = [];
      const pieceIndexes = this.getIndexes(board);
      
      //for as long as i is not in the 1rst rank add 8 (down)
      for(i = index + 8; i < 55; i += 8){
        if(!pieceIndexes.includes(i)){ legalMoves.push(i) } else { break; }
      }
      if(!pieceIndexes.includes(i + 8)){ legalMoves.push(i) }
      
      //up
      for(i = index - 8; i > 7; i -= 8){
        if(!pieceIndexes.includes(i)){ legalMoves.push(i) } else { break; }
      }
      if(!pieceIndexes.includes(i - 8)){ legalMoves.push(i) }
      
      //the numbers are all of the h file indexes (right)
      if(![7, 15, 23, 31, 39, 47, 55, 63].includes(index)){
        for(i = index + 1; ![7, 15, 23, 31, 39, 47, 55, 63].includes(i); i++){
          if(!pieceIndexes.includes(i)){ legalMoves.push(i) } else { break; }
        }
        if(!pieceIndexes.includes(i + 1)){ legalMoves.push(i) }
      }
      
      //left
      if(![0, 8, 16, 24, 32, 40, 48, 56].includes(index)){
        for(i = index - 1; ![0, 8, 16, 24, 32, 40, 48, 56].includes(i); i--){
          if(!pieceIndexes.includes(i)){ legalMoves.push(i) } else { break; }
        }
        if(!pieceIndexes.includes(i - 8)){ legalMoves.push(i) }
      }
      
      for(i = 0; i <= legalMoves.length; i++){
        
        if(legalMoves[i] > 63){
          
          legalMoves.splice(i, 1);
          
          i--;
          
        }
        
      }
      
      return legalMoves;
      
    }
    
    getBlackIndexes(board){
      
      if(!board){board=this.board;}
      
      let indexes = [];
      
      for (let i = 0; i < board.length; i++){
        
        if("prbnkq".includes(board[i])){
          
          indexes.push(i)
          
        }
        
      }
      
      return indexes;
    }
    
    getWhiteIndexes(board){
      
      if(!board){board=this.board;}
      
      let indexes = [];
      
      for (let i = 0; i < board.length; i++){
        
        if("PRBNKQ".includes(board[i])){
          
          indexes.push(i)
          
        }
        
      }
      
      return indexes;
    }
    
    getIndexes(board){
      
      if(!board){board=this.board;}
      
      return [...this.getWhiteIndexes(board), ...this.getBlackIndexes(board)];
      
    }
    
    pieceValue(letter){
      
      switch(letter){
          
        case "r": return -this.rook;
        case "n": return -this.knight;
        case "b": return -this.bishop;
        case "q": return -this.queen;
        case "k": return -this.king;
        case "p": return -this.pawn;
        case "R": return this.rook;
        case "N": return this.knight;
        case "B": return this.bishop;
        case "Q": return this.queen;
        case "K": return this.king;
        case "P": return this.pawn;
        case "-": return 0;
        default: throw Error("badPieceValue: " + letter);
        
      }
      
    }
    
    textDisplay(board){
      
      if(!board){board=this.board;}
      
      let text = "";
      
      for(let i = 0; i < 64; i++){
        
        if((i / 8) == (i / 8).toFixed(0) && i !== 0){
          
          text += "|" + (9 - (i / 8)) + "\n";
          
        }
        
        switch(board[i]){
  
          case "r": text += "♜"; break;
          case "n": text += "♞"; break;
          case "b": text += "♝"; break;
          case "q": text += "♛"; break;
          case "k": text += "♚"; break;
          case "p": text += "♟"; break;
          case "R": text += "♖"; break;
          case "N": text += "♘"; break;
          case "B": text += "♗"; break;
          case "Q": text += "♕"; break;
          case "K": text += "♔"; break;
          case "P": text += "♙"; break;
          case "-": text += "  "; break;
          default: throw Error("badPieceValue-textDisplay: " + board[i]);
  
        }
        
      }
      
      text += "|1"
      
      return text;
      
    }
    
    binaryDisplay(indexes, redIndex){
      
      let text = "";
      
      for(let i = 0; i < 64; i++){
        
        if((i / 8) == (i / 8).toFixed(0) && i !== 0){
          
          text += "\n";
          
        }
        if(i == redIndex){
          
          text += "🟥";
          
        } else if(indexes.includes(i)){
          
          text += "⬛";
          
        } else {
          
          text += "⬜";
          
        }
        
      }
      
      return text;
      
    }
    
  }
  
  const chess = new Chess();
  
  
  