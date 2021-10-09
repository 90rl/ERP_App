import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './DocumentView.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';

export default class DocumentView extends React.Component{

    state={
        transaction: [],
        document: {}
    }

    componentDidMount(){
        axios.get('http://localhost:8081/document/findById/' +this.props.match.params.id)
        .then(res=> {
            const document = res.data;
            this.setState({
                ...this.state,
                document
            })
        })
        console.log("ComponentDidMount -> DocumentFindById " + this.state.document)

        axios.get('http://localhost:8081/transaction/findByDocumentId/' +this.props.match.params.id )
        .then (res=> {
            const transaction = res.data;
            this.setState({
                ...this.state,
                transaction})
        })
        console.log("ComponentDidMount -> TransactionFindByDocumentId " + this.state.transaction)

    }



    render(){
        console.log(this.state.transaction.length)


        if (this.state.transaction.length == 0) {
            console.log("dasdassssssssssssssssssssss")
        } else{
            console.log("111111111111111111111111111111111")        }
        
        return (
            <>           
                <div className="container">
                    <div className="row" >
                        <div className="doc_view align-center">
                            <div className="card mb-3">
                                <div className="card-header bg-success text-white text-center">SZCZEGÓŁY DOKUMENTU {this.state.document.documentNumber}</div>
                                <div className="card-body">

                                <Form  > 
                                <Row>
                                    
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Typ dokumentu</Form.Label>
                                        <Form.Control type="documentType" name="documentType" value={this.state.document.documentType}  />
                                    </Form.Group>
                                    </Col>   
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Numer dokumentu</Form.Label>
                                        <Form.Control type="text" name="documentNumber" value={this.state.document.documentNumber}/>
                                    </Form.Group>
                                    </Col>
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Wystawił</Form.Label>
                                        <Form.Control type="documentType" name="documentType" value={this.state.document.employeeName +" " + this.state.document.employeeSurname} />
                                    </Form.Group>
                                    </Col> 
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Wystawiono</Form.Label>
                                            <Form.Control type="documentDate" name="documentDate" value={this.state.document.documentDate}   />
                                    </Form.Group>
                                    </Col>

                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Dotyczy</Form.Label>
                                        <Form.Control type="documentReference" name="documentReference" value={this.state.document.documentReference}  />
                                    </Form.Group>
                                    </Col>
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Kontrahent</Form.Label>
                                        <Form.Control type="realizationTerm" name="realizationTerm" value={this.state.document.clientName}  />
                                    </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Termin realizacji</Form.Label>
                                        <Form.Control type="realizationTerm" name="realizationTerm" value={this.state.document.realizationTerm}  />
                                    </Form.Group>
                                    </Col>
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Warunki dostawy</Form.Label>
                                        <Form.Control type="deliveryConditions" name="deliveryConditions" value={this.state.document.deliveryConditions}  />
                                    </Form.Group>
                                    </Col>

                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Cena całkowita</Form.Label>
                                        <Form.Control type="totalPrice" name="totalPrice" value={this.state.document.totalPrice}  />
                                    </Form.Group>
                                    </Col>
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Waluta</Form.Label>
                                        <Form.Control type="currency" name="currency" value={this.state.document.currency}  />
                                    </Form.Group>
                                    </Col>

                                    <Col></Col>
                                    <Col></Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="formBasiScEmail" >
                                    <Form.Label>Warunki płatności</Form.Label>
                                        <Form.Control type="text" name="paymentConditions" style={{height: '100px' }} value={this.state.document.paymentConditions} />
                                    </Form.Group>

                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Uwagi</Form.Label>
                                        <Form.Control type="documentAttention" name="documentAttention" value={this.state.document.documentAttention}  />
                                    </Form.Group>
                                    </Col>
                                </Form>

                                
                                    <div className="table-responsive">
                                    <table className="table table-hover  text-left">
                                        <thead >
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col" >Przedmiot oferty</th>
                                                <th scope="col">Ilość</th>
                                                <th scope="col">Jednostka</th>
                                                <th scope="col">Cena za jednostkę</th>
                                                <th scope="col">Cana całości</th>
                                                <th scope="col">Waluta</th>
                                            </tr>
                                        </thead>
                                        
                                        {this.state.transaction.map(transaction =>(
                                                        <tbody>
                                                            <tr key={transaction.id}>
                                                                <th scope="row">{transaction.id}</th>   
                                                                <td>{transaction.transactionSubject}</td>
                                                                <td>{transaction.quantity}</td>
                                                                <td>{transaction.unit}</td>
                                                                <td>{transaction.pricePerUnit}</td>
                                                                <td>{transaction.pricePerUnit * transaction.quantity}</td>
                                                                <td>{transaction.currency}</td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                )}
                                    </table>
                                </div>
                            </div>
                            </div>
                        </div>


                    </div>
                </div>
            </>
            
        )
    }

}