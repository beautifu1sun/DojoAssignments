$(document).ready(function(){
    const Square = ({value, x, y, move}) => {
        if (!value){
            return <button className="square" onClick={event => move(x, y) }>&nbsp;</button>
        }
        return <button className="square">{ value }</button>
    }
    const GameBoard = ({gameStatus, boardChanged}) => {
        const status = `Next player: ${gameStatus[1]}`;
        let x = -1; let y = -1;
        const board = gameStatus[0].map((row, index) =>{
            x = -1;
            y < 0 ? y = 0 : y++;
            return (
                <div className="board-row" key={index}>
                {
                    row.map((square, index) => {
                        x < 0 ? x = 0 : x++;
                        return <Square value={square} key={index} y={y} x={x} move={boardChanged} />
                    })
                }
                </div>
            ); 
        });
        return (
                <div className="board">
                    <div className="status">{status}</div>
                    { board }
                </div>
        )
    }
    class App extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                status: [[[ "", "", "" ], [ "", "", "" ], [ "", "", "" ]], "X", 0],
                history: [],
            }
        }
        
        saveHistory(x, y){
            let currentStatus = [].concat(this.state.status);
            let currentHistory = [].concat(this.state.history);
            currentStatus[0][y][x] = currentStatus[1];
            currentStatus[1] == "X" ? currentStatus[1] = "O" : currentStatus[1] = "X";
            currentStatus[2]++;
            if (currentStatus[2] <= currentHistory.length){
                currentHistory = currentHistory.slice(0,currentStatus[2]-1);
            }
            currentHistory.push([].concat(currentStatus));
            this.setState({ 
                status: [currentStatus[0], currentStatus[1], currentStatus[2]],
                history: currentHistory,
            });
        }
        newGame(){
            this.setState({
                status: [[[ "", "", "" ], [ "", "", "" ], [ "", "", "" ]], "X", 0],
            });
        }
        showHistory(index){
            this.setState({
                status: this.state.history[index],                  
            })
        }

        render(){
            const movesList = this.state.history.map((moves,index) =>{
                return <li key={index}><button onClick={event => this.showHistory(index)}>Go to move# {index+1}</button></li> 
            });
            return(
                <div className="App">
                    <GameBoard gameStatus={this.state.status} boardChanged={(x, y) => this.saveHistory(x, y)} />
                    <ol className="moves">
                        <li><button onClick={event => this.newGame()}>Go to game start</button></li>
                        { movesList }
                    </ol>
                </div>
            )
        }
    }

    ReactDOM.render(<App />, document.getElementById("React"));  
});

