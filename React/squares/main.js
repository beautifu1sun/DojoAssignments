$(document).ready(function(){
    const SquareComponent = (props) => {
        const { text } = props;
        const { color } = props;
        const { textColor } = props;
        return React.createElement(
            'div',
            { className: "square", style: { backgroundColor: color, color: textColor } },
            text
        );
    }

    ReactDOM.render(
        React.createElement('div', null,
            React.createElement(SquareComponent, { text: 'white on blue', textColor: 'white', color: 'blue' }),
            React.createElement(SquareComponent, { text: 'blue on red', textColor: 'blue', color: 'red' }),
            React.createElement(SquareComponent, { text: 'green on pink', textColor: 'green', color: 'pink' })
        ), 
        document.getElementById("react"));
});
