import React from "react";

const Card = (props) => {
    return (
        <div className="row text-center">
            <div className="col-sm-2">
                <div className="card">
                    <div className="card-body"><i className="far fa-clock"></i></div>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card">
                    <div className="card-body">Digito 2</div>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card">
                    <div className="card-body">Digito 3</div>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card">
                    <div className="card-body">Digito 4</div>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card">
                    <div className="card-body">Digito 5</div>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card">
                    <div className="card-body">Digito 6</div>
                </div>
            </div>
            <div className="col-sm-2">
                <div className="card">
                    <div className="card-body">Digito 7</div>
                </div>
            </div>
        </div>
    );
};

export default Card;