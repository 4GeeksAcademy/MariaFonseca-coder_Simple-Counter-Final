import React from "react";

const Card = (props) => {
    const { digitOne, digitTwo, digitThree, digitFour, digitFive, digitSix } = props;

    return (
        <div className="row text-center no-gutters pt-1 pb-1 rounded mt-3" style={{ background: ' #f4c2c2', fontSize: '40px', border: '2px solid #D8BFD8' }}>
            <div className="col-auto">
                <div className="card" style={{ width: '50px', height: '70px' }}>
                    <div className="card-body" style={{ padding: '5px' }}>
                        <i className="far fa-clock"></i>
                    </div>
                </div>
            </div>
            <div className="col-auto">
                <div className="card" style={{ width: '50px', height: '70px' }}>
                    <div className="card-body" style={{ padding: '5px' }}>
                        {digitSix}
                    </div>
                </div>
            </div>
            <div className="col-auto">
                <div className="card" style={{ width: '50px', height: '70px' }}>
                    <div className="card-body" style={{ padding: '5px' }}>
                        {digitFive}
                    </div>
                </div>
            </div>
            <div className="col-auto">
                <div className="card" style={{ width: '50px', height: '70px' }}>
                    <div className="card-body" style={{ padding: '5px' }}>
                        {digitFour}
                    </div>
                </div>
            </div>
            <div className="col-auto">
                <div className="card" style={{ width: '50px', height: '70px' }}>
                    <div className="card-body" style={{ padding: '5px' }}>
                        {digitThree}
                    </div>
                </div>
            </div>
            <div className="col-auto">
                <div className="card" style={{ width: '50px', height: '70px' }}>
                    <div className="card-body" style={{ padding: '5px' }}>
                        {digitTwo}
                    </div>
                </div>
            </div>
            <div className="col-auto">
                <div className="card" style={{ width: '50px', height: '70px' }}>
                    <div className="card-body" style={{ padding: '5px' }}>
                        {digitOne}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Card;