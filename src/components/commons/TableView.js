import Table from 'react-bootstrap/Table';

const TableView = (props) => {
    const headers = props.data != null && props.data.length > 0 ? Object.keys(props.data[0]) : null;
    return (
        <>
            {props.data != null && props.data.length > 0 ?
                <div style={{maxHeight: "80vh", overflow:"scroll"}}>
                    <Table striped bordered hover >
                        <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {props.data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {headers.map((header, cellIndex) => (
                                    <td key={cellIndex}>{row[header]}</td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div> :
                <p>
                    NO DATA TO DISPLAY
                </p> }
        </>
    );
}

export default TableView;