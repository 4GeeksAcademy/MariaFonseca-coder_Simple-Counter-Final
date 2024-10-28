import React from "react";

const Card = (props) => {
    const { digitOne, digitTwo, digitThree, digitFour, digitFive, digitSix } = props;
    return (
        <div className="row text-center">
            <div className="col-sm-2">
                <div className="card">
                    <div className="card-body"><i className="far fa-clock"></i></div>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card">
                    <div className="card-body">{props.digitSix}</div>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card">
                    <div className="card-body">{props.digitFive}</div>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card">
                    <div className="card-body">{props.digitFour}</div>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card">
                    <div className="card-body">{props.digitThree}</div>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card">
                    <div className="card-body">{props.digitTwo}</div>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card">
                    <div className="card-body">{props.digitOne}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;