import React from 'react'
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import {useState} from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
// import { writeFile, readFile } from 'react-native-fs';

const MessageForm = (props) => {
    const dispatch = useDispatch();

    const [validated, setValidated] = useState(false);
    const [message, setMessage] = useState('');
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        console.log(event.target);
        if (form.checkValidity() === false) {
            console.log("here")
            event.preventDefault();
            event.stopPropagation();
        } else {

            // const fs = require('fs');
            const data = require('./messages.json');
            console.log(data);
            const json = {
                firstName : event.target.firstName.value,
                lastName: event.target.lastName.value,
                email : event.target.email.value,
                message : event.target.message.value,
            }
            data.push(json);
            console.log(data)
            // writeFile("./messages", JSON.parse(data), 'ascii').then((r)=>{/* :) */}).catch((e)=>{/* :( */});
            // fs.writeFile("./message.json", JSON.stringify(data), (ex) => {
            //     if (ex) throw ex.message;
            //     console.log("State copying successful.");
            // });
        }

        setValidated(true);
    };

    const handleTextAreaChange = (event) => {
        setMessage(event.target.value);
    };

    const [modalIsOpen,setIsOpen] = React.useState(props.isOPen);

    function closeModal(){
        setIsOpen(false);
        props.close()
    }

    return (
            <div
                className="modal show"
                style={{display: 'block', position: 'initial'}}
            >
                <Modal
                    show={modalIsOpen}
                    onHide={closeModal}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row>
                                <Form.Group as={Col} md="6" controlId="firstName">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First name"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="lastName">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Last name"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <InputGroup hasValidation>
                                        {/*<InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>*/}
                                        <Form.Control
                                            type="email"
                                            placeholder="email"
                                            aria-describedby="email-desc"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide email.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Group controlId="validationCustom03">
                                    <textarea id="message"
                                              value={message}
                                              onChange={handleTextAreaChange}
                                              placeholder= "Please provide your message here"
                                              rows={5}
                                              required={true}
                                              cols={50} />

                                    <Form.Control.Feedback type="invalid">
                                        Please provide your message.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit" >Submit</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
    );
}

export default MessageForm
