import React from 'react'
import './productionCard.css'
import {useNavigate} from "react-router-dom";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import CardMedia from '@mui/material/CardMedia';
// import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
import Card from 'react-bootstrap/Card';

const ProductionCards = ({info}) => {
    const navigate = useNavigate();
    return (
        <div className="container" style={{margin: "20px", overflow: "hidden"}}>
            <Card style={{width: '18rem', height: '12rem', marginBottom: "0px"}}
                  onClick={() => navigate(info.link)}>
                <Card.Img src={info.bgImage} style={{height: "60%", width: "100%"}} />
                <Card.Body>
                    <Card.Subtitle>{info.name}</Card.Subtitle>
                    {/*<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>*/}
                    <Card.Text>
                        {info.number}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
            {/*<Card variant="outlined" onClick={() => navigate(info.link)}>*/}
            {/*    <CardMedia*/}
            {/*        sx={{ height: 100 }}*/}
            {/*        image= {info.bgImage}*/}
            {/*        title="green iguana"*/}
            {/*    />*/}
            {/*    <CardContent>*/}
            {/*        <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 14 }}>*/}
            {/*            {info.name}*/}
            {/*        </Typography>*/}
            {/*        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{info.number}</Typography>*/}
            {/*        /!*<Typography variant="body2">*!/*/}
            {/*        /!*    {info.icon}*!/*/}
            {/*        /!*</Typography>*!/*/}
            {/*    </CardContent>*/}
            {/*    /!*<CardActions>*!/*/}
            {/*    /!*    <Button size="small">Learn More</Button>*!/*/}
            {/*    /!*</CardActions>*!/*/}
            {/*</Card>*/}
            {/*<div className="card" onClick={() => navigate(info.link)}>*/}
            {/*    <div className="icon">{info.icon}</div>*/}
            {/*    <div className="number">{info.number}</div>*/}
            {/*    <div className="separation">----------------------------</div>*/}
            {/*    <div>*/}
            {/*        <h3 className="title">{info.name}</h3>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default ProductionCards
