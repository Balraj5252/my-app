import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'; // Import necessary Chart.js elements
// import { MDBContainer } from 'mdbreact'; // Or use components from reactstrap
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
Chart.register(ArcElement, Tooltip, Legend);
const PieChart = (props) => {
    console.log(props);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top', // Adjust legend position as needed
            },
            title: {
                display: true,
                text: 'My Awesome Pie Chart', // Chart title
            },
        },
    };
    return (
        <div style={{ width: '400px', height: '400px' }}>
            {props.data != null ?
                <div>
            <h3 className="mt-4">Pie Chart </h3>
            <Pie data={props.data} options={options} width={400} height={300} />
                </div>:" "}
        </div>
    );
};

export default PieChart;