import Productiondata from '../prod/Productiondata';
import {useState} from 'react'
import {dataProd} from '../Data'


const HomePage = () => {
    const [data, setData] = useState(dataProd);
    return (
        <div className="App">
                <Productiondata data={data}/>
        </div>
    );
}

export default HomePage;