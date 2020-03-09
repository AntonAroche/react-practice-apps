import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {

    state = {
      hasWon: false,
      board: this.createBoard()
    }

  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];

    for (let i = 0; i < this.props.nrows; i++) {
      let row = []
      for (let j = 0; j < this.props.ncols; j++) {
        row[j] = Math.random() < this.props.chanceLightStartsOn
      }
      board[i] = row
    }

    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    console.log(y)
    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        console.log("flip")
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y, x)
    flipCell(y+1, x)
    flipCell(y-1, x)
    flipCell(y, x+1)
    flipCell(y, x-1)

    let hasWon = true
    for (let i = 0; i < this.props.nrows; i++) {
      for (let j = 0; j < this.props.ncols; j++) {
        if (board[i][j] === true) {
          hasWon = false
        }
      } 
    }

    this.setState({board, hasWon});
  }


  /** Render game board or winning message. */

  render() {
    let boardTable = []

    for (let i = 0; i < this.props.nrows; i++) {
      let row = [];
      for (let j = 0; j < this.props.ncols; j++) {
        let coord = `${i}-${j}`
        row.push(<Cell key={coord}
          isLit={this.state.board[i][j]} 
          flipCellsAroundMe={() => this.flipCellsAround(coord)}/>)
      }
      boardTable.push(<tr key={i}>{row}</tr>)
    }

    return (
      <div className="Board">
        {this.state.hasWon 
          ? <p>You Win!</p>
          : (<table className="Board-table">
                <tbody>
                  {boardTable}
                </tbody>
            </table>)
        }
      </div>
    )
  }
}


export default Board;
