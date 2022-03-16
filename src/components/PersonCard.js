import React, { Component } from "react";
import './PersonCard.css';

class PersonCard extends Component{
    render() {
        const {firstName, lastName, age, hairColor} = this.props.person;

        return (<div className="cuadrito">
            <h2>{firstName}, {lastName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>);
        
    }
}

export default PersonCard;