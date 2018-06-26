$(document).ready(function(){
    const Vote_item = (props) => {
        const { count } = props;
        const { name } = props;
        return (
            <div className="vote">
                <span>
                    { count }
                </span>
                { name }
                <button onClick={event => alert(name + " pressed")}>Vote!</button>
            </div>
        );
    }
    
    const App = (props) => {
        const { items } = props;
        let keys = 0;
        const keysSorted = Object.keys(items).sort(function(a,b){return items[b]-items[a]}) 
        return (
            <div className="poll">
                { 
                    keysSorted.map((item) => {
                        return <Vote_item key={keys++} name = {item} count = {items[item]} />
                    })   
                }
            </div>
        )
    }
    
    ReactDOM.render(<App items= { { 'React' : 15 , 'Redux' : 12, 'Node' : 9, 'Express' : 4 } } />, document.getElementById("react"));
});

