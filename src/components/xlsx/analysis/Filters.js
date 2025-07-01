import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import TableView from "./TableView";
const Filters = (props) => {
    const [headers] = useState(props.excelData != null && props.excelData.length > 0 ? Object.keys(props.excelData[0]) : null);
    const [selectedHeader, setSelectedHeader] = useState(headers != null && headers.length > 0 ? headers[0] : null);
    const [inputValue, setInputValue] = useState("");
    const [filterData, setFilterData] = useState([]);

    const handleSelect = (event) => {
        console.log(event)
        setSelectedHeader(event);
    }
    const onChange = (event) => {
        setInputValue(event.target.value);
    }

    const onClickFilterButton = () => {
        console.log(selectedHeader,inputValue.toString());
        const value = props.excelData[0][selectedHeader];
        const dataType = typeof value;
        if (dataType === "number") {
            const num = Number(inputValue)
            setFilterData(props.excelData.filter((row) => row[selectedHeader] === num));
        } else {
            setFilterData(props.excelData.filter((row) => row[selectedHeader] === inputValue));
        }
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
                        <Form.Control aria-label="Text input with dropdown button" onChange={onChange} />
                        <Button variant="primary" onClick={onClickFilterButton}>Primary</Button>
                    </InputGroup>

                    {filterData.length > 0 ? <TableView data = {filterData} /> : ""}
                </>
                : <>No Data</>}
        </div>
    );
}

export default Filters;