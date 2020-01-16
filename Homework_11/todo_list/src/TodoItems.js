import React from "react";
import TodoItem from "./TodoItem";
import './css/TodoItems.css';

class TodoItems extends React.Component{
    constructor(props) {
        super(props);
        this.items = [];
    }

    render() {
        if(this.props.newItemValue) {

            this.items.push(this.props.newItemValue);
        }
        const listItems = this.items.map((element,index) => <TodoItem key ={index} value={element}/>)

        if(listItems) {
            return (<div id="list">
                        <ul>{listItems}</ul>
                    </div>);
        }
        return null;
    }
}

export default TodoItems;