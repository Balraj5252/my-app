import React, {useEffect, useState} from "react";
import {ErrorBoundary} from "../pages/ErrorBoundary"
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import data from "../commons/todo.json"
const ToDoList = () => {
    const [items, setItems] = useState(data);
    const [tab, setTab] = useState(1);
    return (
        // <ErrorBoundary>
            <div className="Content">
                <Tab.Container id="list-group-tabs-example"
                               activeKey={tab}>
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                {items!=null ? items.map((item) =>
                                    <ListGroup.Item action value={item.id}
                                                    onClick={(k) => setTab(k.target.value)}>
                                        {item.title}
                                    </ListGroup.Item>) : <></>}
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                {items!=null ? items.map((item) =>
                                        <Tab.Pane eventKey={item.id}>
                                            <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                                {item.title}
                                            </h2>
                                            <h4 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                                In Page : {item.atPage}
                                            </h4>
                                               <p className={item.textColor}> Priority : {item.priority} </p>
                                            <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                                {item.description}
                                            </p>
                                        </Tab.Pane>
                                    ) : <></>}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        // </ErrorBoundary>
    );
}

export default ToDoList;