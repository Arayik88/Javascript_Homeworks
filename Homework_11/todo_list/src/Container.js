import React from "react";
import Header from "./Header";
import './css/Container.css';
import TodoItems from "./TodoItems";

class Container extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ""}
    }

    add = (value) => {
        this.setState({value: value});
    };

    render() {
        return (
            <div className="Container">
                <Header add = {this.add} />
                <TodoItems newItemValue = {this.state.value} />
            </div>
        );
    }
}

export default Container;