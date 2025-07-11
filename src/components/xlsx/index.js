import Productiondata from '../prod/Productiondata';
import {useState} from 'react'
import {dataProd} from './XlsxData'
import {ErrorBoundary} from "../pages/ErrorBoundary"

const HomePage = () => {
    const [data] = useState(dataProd);
    return (
        <ErrorBoundary>
        <div className="App">
            <Productiondata data={data}/>
        </div>
        </ErrorBoundary>
    );
}

export default HomePage;