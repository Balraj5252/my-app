import React from 'react'
import './productionCard.css'
import {useNavigate} from "react-router-dom";


const ProductionCards = ({info}) => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="card" onClick={() => navigate(info.link)}>
                <div className="icon">{info.icon}</div>
                <div className="number">{info.number}</div>
                <div className="separation">----------------------------</div>
                <div>
                    <h3 className="title">{info.name}</h3>
                </div>
            </div>
        </div>
    )
}

export default ProductionCards
