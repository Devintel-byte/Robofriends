import React from "react";

const Card = (props) => {
    return (
        <div className="tc bg-navy dib br3 pa3 ma2 grow bw2 shadow-2">
            <img alt="robots" src= {`https://robohash.org/${props.id}?size=200x200`} />
            <div>
                <h2> {props.name} </h2>
                <p> {props.email} </p>
            </div>
        </div>
    );
}

export default Card;  