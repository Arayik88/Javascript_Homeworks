import React from "react";
import './css/TodoItem.css';

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <li className="todoItem">
                    <input type="checkbox" className="checkBox"/>
                    <span id="spanText">{this.props.value}</span>
                </li>
        );
    }
}

export default TodoItem;