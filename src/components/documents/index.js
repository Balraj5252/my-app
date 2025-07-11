import Productiondata from '../prod/Productiondata';
import {useState} from 'react'
import {dataProd} from './DocumentData'
import InDevProgess from "../pages/InDevProgress";


const Doc = () => {
    const [data, setData] = useState(dataProd);
    return (
        <div className="App">
            <InDevProgess />
            {/*<Productiondata data={data}/>*/}
        </div>
    );
}

export default Doc;