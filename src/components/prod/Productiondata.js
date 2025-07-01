import React from 'react'

import "./productiondata.css"
import ProductionCards from './ProductionCard'
// import OperatorCard from './OperatorCard'
// import {useSelector} from 'react-redux'
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';

const Productiondata = ({data}) => {
    // const productiondata = useSelector(state => state.operators);
    return (
        <div style={{paddingLeft: "20%"}}>
            <Box sx={{ minWidth: 275, display: "flex", padding: "20px" }}>
            {data.map(item=>(
                    <ProductionCards info={item}/>
            ))}
            </Box>
            {/*<div className="operators">*/}
            {/*    {productiondata.map((operator,index)=>(*/}
            {/*        <OperatorCard dataop={operator} index={index}/>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    )
}

export default Productiondata;
