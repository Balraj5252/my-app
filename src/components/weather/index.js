import {ErrorBoundary} from "../pages/ErrorBoundary"
import InDevProgess from "../pages/InDevProgress";

const HomePage = () => {
    return (
        <ErrorBoundary>
            <div className="App">
                <InDevProgess />
            </div>
        </ErrorBoundary>
    );
}

export default HomePage;