import React from "react";
import './css/TodoItem.css';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checked: false, value: this.props.value};
    }

    handleCheck = () => {
        this.setState({checked: !this.state.checked, value: this.props.value})
    };

    render() {
        return (
                <li className="todoItem" style={(this.state.checked ?
                    {background: "#303030"} : {})}>
                    <input type="checkbox" className="checkBox" onChange={this.handleCheck}/>
                    <span id="spanText" style={(this.state.checked ?
                        {textDecoration: "line-through"} : {textDecoration: "none"})}>
                        {this.state.value}</span>
                </li>
        );
    }
}

export default TodoItem;