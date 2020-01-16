import React from "react";
import './css/Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
    }

    add = () => {
        this.props.add(this.state.value);
        this.setState({value: ""});
    };

    handleTyping = (event) => {
        /*this.setState((state) => ({ TODO senc chi ashxatum
        value: event.target.value
        }));*/
        this.setState({value: (event.target.value.length > 35 ?
                                     event.target.value.slice(0, 35) :
                                     event.target.value)});
    };

    addFromKB = (event) => {
        if (event.key === 'Enter') {
            this.add();
        }
    };

    render() {
        const value = this.state.value;
        return (
            <div className="header" onKeyDown={this.addFromKB} >
                <h2>My To Do List</h2>
                <input type="text" id="myInput" placeholder="Title..." value={value}
                       onChange={this.handleTyping}/>
                <span onClick={this.add} className="addBtn">
                    Add
                </span>
            </div>
        );
    }
}

export default Header;