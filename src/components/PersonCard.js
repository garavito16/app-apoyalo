import React, { Component } from "react";
import './PersonCard.css';

class PersonCard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            "age" : props.person.age
        }
    }

    aumentar = () => {
        this.setState( { "age" : this.state.age + 1 } )
    }

    render() {
        const {firstName, lastName, age, hairColor} = this.props.person;

        return (<div className="cuadrito">
            <h2>{firstName}, {lastName}</h2>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {hairColor}</p>
            <button className="botoncito" onClick={ this.aumentar }>Birthday Button for {firstName} {lastName}</button>
        </div>);
        
    }
}

export default PersonCard;