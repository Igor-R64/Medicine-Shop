import React, { useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRubleSign } from "react-icons/fa";
import Select from "react-select";
import { Row, Col, Form, FormGroup, Label } from 'reactstrap';
import PropTypes from 'prop-types';

import './CardItemBasket.css';




function CardItemBasket(props) {

    const item = props.item;

    const data = ["1", "2", "3", "4", "5"];

    const [option, setOption] = useState([1]);

    // const setOption = (id, value) => {
    //     _setOption([...option, { id: id, count: value }]);

   
    
    return (
        <Row key={item.id}>
            <Col id='border' className="d-flex justify-content-evenly">
                <div>
                    <img id='image' src={item.img} alt="альтернативный текст" />
                </div>
                <div className="d-flex align-items-center type-heading">
                    {item.type}
                </div>
                <div className="d-flex align-items-center title-heading">
                    {item.title}
                </div>
                <div className="d-flex align-items-center price-heading">
                    <FaRubleSign /> {item.price}
                </div>
                <div className="d-flex align-items-center">
                    <Form onSubmit>
                        <FormGroup>
                            <Label for="exampleSelect">Количество</Label>
                            <section>
                                <Select
                                    onChange={option => setOption(option)}
                                    value={[option]}
                                    getOptionLabel={label => label}
                                    getOptionValue={value => value}
                                    closeMenuOSelect={false}
                                    options={data}
                                />
                                {console.log(option)}
                            </section>
                        </FormGroup>
                    </Form>
                </div>
                <div className=" d-flex align-items-center">
                    <button
                        onClick={() => {props.handleDeleteElement(item.id)}}
                        className="del" type="button">
                        <RiDeleteBin6Line />
                    </button>
                </div>
            </Col>
        </Row>
    );


}

CardItemBasket.propTypes = {
    item: PropTypes.string,
    productToOrder: PropTypes.array,
    handleDeleteElement: PropTypes.func
}

export default CardItemBasket;
