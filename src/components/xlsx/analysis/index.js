import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ExcelView from "./ExcelView";
import Filters from "./Filters";
import Navbar from 'react-bootstrap/Navbar';
import * as XLSX from 'xlsx';
const Xlsx = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileUploaded, setFileUploaded] = useState(false);
    const [excelData, setExcelData] = useState([]);
    const [tab, setTab] = useState('table');
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet);
            console.log(jsonData)
            setExcelData(jsonData);
        };
        reader.readAsArrayBuffer(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedFile) {
            if (selectedFile.type === "application/vnd.ms-excel") {
                setFileUploaded(true);
                console.log(excelData);
            } else {
                alert(`File "${selectedFile.name}" selected for upload is not in XLSX formate.`);
            }
            console.log('Selected file:', selectedFile.type);
        } else {
            alert('Please select a file to upload.');
        }
    };

    return (
        <div className="App">
            <div className="main" style={{backgroundColor: "white"}}>
                    <>
                        <Navbar className="bg-body-tertiary justify-content-between" style={{backgroundColor: "inherit"}}>
                            <Form inline>
                                <Form.Group controlId="formFile" className="mb-3">
                                    {/*<Form.Label>Upload your document:</Form.Label>*/}
                                    <Form.Control type="file" onChange={handleFileChange} />
                                </Form.Group>
                            </Form>
                            <Form inline onSubmit={handleSubmit}>
                                        <Button type="submit">Submit</Button>
                            </Form>
                        </Navbar>
                        </>
                {fileUploaded ?
                    <div style={{width:"100%"}}>
                        <p> Viewing the file data of : {selectedFile.name}</p>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={tab}
                            onSelect={(k) => setTab(k)}
                            className="mb-3"
                            fill
                        >
                            <Tab eventKey="table" title="Table View">
                                <ExcelView excelData={excelData} />
                            </Tab>
                            <Tab eventKey="filter" title="Filter Search">
                                <Filters excelData={excelData} />
                            </Tab>
                        </Tabs>
                    </div> : ""}
            </div>
        </div>
    );
}

export default Xlsx;