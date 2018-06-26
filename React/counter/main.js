$(document).ready(function(){
    class App extends React.Component {
        constructor(){
            super();
            this.state = {
                counterList: [<Counter key={0} />]
            }
        }
        render(){
            return (
                <div>
                    <button
                        onClick={ () => this.setState({ counterList: this.state.counterList.concat(<Counter key={this.state.counterList.length} />) }) } >
                        Add Counter
                    </button>
                    {this.state.counterList}
                </div>
            )
        }
    }
    class Counter extends React.Component {
        constructor(){
            super();
            this.state = {
                count: 0
            }
        }
        render(){
            return(
                <div className="counter">
                    <h1>{this.state.count}</h1>
                    <button
                        onClick={ () => this.setState({ count: this.state.count + 1 }) } >
                        Increment
                    </button>
                    <button
                        onClick={ () => this.setState({ count: this.state.count - 1 }) } >
                        Decrement
                    </button>
                </div>
            )
        }
    }
    ReactDOM.render(<App />, document.body);
});

