import React from 'react'
import '../styles/cards.css';
export default function FeatureCard({title,text,image}){
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={image} alt="Card" />
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {text}
                </p>
                <button className="btn btn-primary">
                    Click Here
                </button>
            </div>
        </div>
    );
}