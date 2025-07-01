import React from 'react'
import './operatorCard.css'
// import HighlightOffIcon from '@material-ui/icons/HighlightOff';





const OperatorCard = ({dataop}) => {
    //const dispatch = useDispatch();
    //const handleDelete = dispatch(deleteOperator());
    return (

        <div className="op-container">
            <p className="op"> <br/>Name: {dataop.name}</p>
            <p className="op"> <br/>Objective: {dataop.objective}</p>
            <p className="op"> <br/>In Progress: {dataop.inprogress}</p>
            <p className="op-icon"> <br/><span >HIII</span></p>
        </div>

    )
}

export default OperatorCard
