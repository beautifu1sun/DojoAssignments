$(document).ready(function(){
    var numOfRows = prompt("Enter the number of rows: ");
    var styles = {
        colorA: {backgroundColor: 'black'},
        colorB: {backgroundColor: 'red'}
    }
    // cell
    // class Cell extends Component{
    //     render(){
    //         const { color } = this.props;
    //         return(
    //             <div className="cell" style={color}></div>
    //         )
    //     }
    // };
    // row
    // class Row extends Component {
    //     render(){
    //         const { cells } = this.props 
    //         return(
    //             <div className="row">
    //                 {
    //                     cells.map((cellColor, index) => {
    //                     return(
    //                         <Cell key={index} color={cellColor}/>
    //                         )
    //                     })
    //                 }
    //             </div>
    //         )
    //     }
    // };
    // app
    // class App extends Component{
    //     render(){
    //         const { rows } = this.props;
    //         var key = 100;
    //         return(
    //           <div>
    //             {
    //                 rows.map((rowCells,index) => {
    //                     return(
    //                         <Row key={index} cells={rowCells} />
    //                     );
    //                 })
    //             }
    //           </div>  
    //         );
    //     }
    // }
    function CheckerBoard (props) {
        const { rows } = props;
        return React.createElement(
            'div',
            null,
            rows.map(function (rowCells, index) {
                return React.createElement(Row, { key: index, cells: rowCells });
            })
        )  
    }
    function Row (props) {
        const { cells } = props;
        return React.createElement(
            'div',
            { className: "row" },
            cells.map(function (cellColor, index) {
                return React.createElement(Cell, { key: index, color: cellColor });
            })
        )  
    }
    function Cell (props) {
        const { color } = props;
        return React.createElement(
            'div',
            { className: "cell", style: { backgroundColor: color.backgroundColor } }
        );
    }
    
    // 1st type of row
    var cellsList1 = [];
    // 2nd type of row
    var cellsList2 = [];
    for (var i = 0; i < numOfRows; i++){
        if (i%2==0){
            cellsList1.push(styles["colorA"]);
            cellsList2.push(styles["colorB"]);
        }
        else{
            cellsList1.push(styles["colorB"]);
            cellsList2.push(styles["colorA"]);
        }
    }
    var rows = [];
    for (var i = 0; i < numOfRows; i++){
        if (i%2==0){
            rows.push(cellsList1);
        }
        else{
            rows.push(cellsList2);
        }
    }
    console.log(rows);
    //-------------
    ReactDOM.render(
        React.createElement(CheckerBoard, { rows: rows }),
        document.body
    );
});