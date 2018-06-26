$(document).ready(function(){
    const Vote_item = ({count, name, vote}) => {
        return (
            <div className="vote">
                <span>
                    { count }
                </span>
                { name }
                <button onClick={event => vote(name)}>Vote!</button>
            </div>
        );
    }
    
    class App extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                items: props.items
            }
        };

        voteUp(name){
            let currentCounts = this.state.items;
            currentCounts[name]++;
            this.setState({ 
                items: currentCounts
            });
        }

        render(){
            const items = this.state.items;
            const vote_items = Object.keys(items).sort(function(a,b){return items[b]-items[a]}).map((item) => {
                return <Vote_item key={item} name = {item} count = {items[item]} vote = { name => this.voteUp(name) } />
            })

            return (
                <div className="poll">
                    { vote_items }
                </div>
            )
        };
    }
    
    ReactDOM.render(<App items= { { 'React' : 0 , 'Redux' : 0, 'Node' : 0, 'Express' : 0 } } />, document.getElementById("react"));
});

