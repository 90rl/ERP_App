import React, { Fragment } from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import './LoginPage.css';
import CompanyLogo from './CompanyLogo.png'



const LoginPage = () => {
    return (
        <>

      
{/* <div className="container smt-5">
                    <div className='row' >
                        <div className="container_addEmployee  ">
                            <div className="card mb-3">
                                <div className="card-header bg-success text-white">Dane pracownika - AddEmployee</div>
                                <div className="card-body">

                                <Form >
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="name" name="name" placeholder="Imię" onChange={this.handleInputChange}  />
                                        </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="surname" name="surname" placeholder="Nazwisko" onChange={this.handleInputChange}  />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" name="email" placeholder="Email"  onChange={this.handleInputChange}  />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail"> 
                                        <Form.Control type="password" name="password" placeholder="Podaj hasło"   onChange={this.handleInputChange} />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>

                                        <div className="Btn_dodaj">
                                        <Button name="Btn_dodaj"  variant="primary" type="submit">
                                            DODAJ
                                        </Button>
                                        
                                        </div>
                                </Form>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div> */}


                    <div className="container">
                    <div className="row">
                                <Fragment>
                                    <Container>
                                        <Row>
                                            <Col className="loginForm">
                                                <div className="LoginBox p-5">
                                                    <img className="CompanyLogo" src={CompanyLogo} alt=""/>
                                                    <Form className="mt-3">
                                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                    <Form.Label>Email address</Form.Label>
                                                                    <Form.Control type="email" placeholder="Enter email" />
                                                                </Form.Group>

                                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                    <Form.Label>Password</Form.Label>
                                                                    <Form.Control type="password" placeholder="Password" />
                                                                </Form.Group>

                                                                <Button className="btn-block" variant="success" size="lg">
                                                                    Submit
                                                                </Button>

                                                         </Form>
                                                    </div>
                                                </Col> 
                                        </Row>
                                    </Container>

                                </Fragment>

                                </div>
                                </div>

            
        </>
    );
};

export default LoginPage;