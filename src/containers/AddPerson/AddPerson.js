import React, { PureComponent } from "react";

import './AddPerson.css';
import Button from '../../components/Button/Button';
import img from '../../assets/passion.png';

class AddPerson extends PureComponent {
    state = {
        name: "",
        isPerson: false,
        isValidName: false,
        persons: [],
    };

    handlerChangeName = event => {
        this.setState({
            name: event.target.value.trim(),
            isPerson: false,
            isValidName: event.target.value.length >= 2
        });
    };

    handlerAddPerson = event => {
        event.preventDefault();

        this.setState(prevState => {
            return {
                name: "",
                isPerson: !prevState.isPerson,
                isValidName: !prevState.isValidName,
                persons: prevState.persons.concat(prevState.name)
            };
        });
    };

    render() {
        return (
            <div className="AddPerson">
                <div style={{width: '80%', height: '200px', margin: '0 auto'}}>
                    <img src={img}  className="Img"/>
                </div>
                <form>
                    <fieldset>
                        <h2>Please enter your name.</h2>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            onChange={this.handlerChangeName}
                            value={this.state.name}
                        />
                        <Button
                            clicked={this.handlerAddPerson}
                            styling={[
                                "btn",
                                this.state.isValidName ? " btn-success" : ""
                            ].join(" ")}
                            disabled={this.state.isValidName ? "" : "disabled"}
                        >
                            Submit
                        </Button>
                    </fieldset>
                </form>

                {this.state.persons.map(person => (
                    <div key={Math.random()}>
                        {person}, I glad to see you on this great day
                    </div>
                ))}
                <span>{this.state.isValidName}</span>
            </div>
        );
    }
}

export default AddPerson;
