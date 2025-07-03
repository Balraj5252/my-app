import Productiondata from '../prod/Productiondata';
import {useState} from 'react'
import {dataProd} from './DocumentData'


const Doc = () => {
    const [data, setData] = useState(dataProd);
    return (
        <div className="App">
            <Productiondata data={data}/>
        </div>
    );
}

export default Doc;