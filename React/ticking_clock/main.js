function time(){

    document.getElementById("js_clock").innerHTML = `
    <div class="time">The time is: <p>${new Date().toLocaleTimeString()}</p></div>
    `

    ReactDOM.render(
        React.createElement(
            'div', 
            {className: "time"}, 
            "The time is: ",
            React.createElement('p', null, new Date().toLocaleTimeString())
        ),
        document.getElementById("react_clock"));
        
}
setInterval(time, 1000);