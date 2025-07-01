import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import PieChart from "../../commons/PieChart";
import {chartColors} from "../../commons/common";
const XlsxPieView = (props) => {
    const [headers] = useState(props.excelData != null && props.excelData.length > 0 ? Object.keys(props.excelData[0]) : null);
    const [selectedHeader, setSelectedHeader] = useState(headers != null && headers.length > 0 ? headers[0] : null);
    const [filterData, setFilterData] = useState([]);


    const handleSelect = (event) => {
        setSelectedHeader(event);
    }

    const onClickFilterButton = () => {
        const label = []
        const pieData = new Map();
        const data = {};
        for (let i = 0; i < props.excelData.length; i++) {
            let currentString = props.excelData[i][selectedHeader];
            if (pieData.has(currentString)) {
                pieData.set(currentString, pieData.get(currentString) + 1);
            } else {
                label.push(currentString);
                pieData.set(currentString, 1);
            }
        }
        data.labels = label;
        const datavalues = [];
        label.map(l => datavalues.push(pieData.get(l)));
        data.datasets = [
            {
                label: selectedHeader,
                data: datavalues,
                backgroundColor: chartColors,
            }
        ]
        setFilterData(data);
    }

    return (
        <div>
            {headers != null && headers.length > 0 ?
                <>
                    <InputGroup className="mb-3">
                        <DropdownButton
                            variant="outline-secondary"
                            title={selectedHeader}
                            id="input-group-dropdown-1"
                            onSelect={handleSelect}
                        >
                            {headers.map((header) => (
                                <Dropdown.Item eventKey={header} >{header}</Dropdown.Item>
                            ))}
                        </DropdownButton>
                        <Button variant="primary" onClick={onClickFilterButton}>Group By</Button>
                    </InputGroup>
                    {filterData != null ? <PieChart data = {filterData} /> : ""}
                </>
                : <>No Data</>}
        </div>
    );
}

export default XlsxPieView;