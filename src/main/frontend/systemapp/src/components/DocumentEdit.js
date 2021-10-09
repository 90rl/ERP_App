import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './DocumentEdit.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';



function deleteTransaction(id){
    if(window.confirm('Are you sure?')){
        fetch('http://localhost:8081/transaction/' + id, {
            method:'DELETE',
            header:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'  
            }
        })
    }
    window.location.reload();
}



export default class DocumentEdit extends React.Component{

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
                        <div className="documentTable align-center">
                            <div className="card mb-3">
                                <div className="card-header bg-success text-white text-center">EDYCJA DOKUMENTU NUMER  {this.state.document.documentNumber}</div>
                                <div className="card-body">

                                <Form  > 
                                <Row>
                                    
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Typ dokumentu</Form.Label>
                                        <Form.Control type="documentType" name="documentType" defaultValue={this.state.document.documentType} onChange= {this.handleInputChange}  />
                                    </Form.Group>
                                    </Col>   
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Numer dokumentu</Form.Label>
                                        <Form.Control type="text" name="documentNumber" defaultValue={this.state.document.documentNumber}/>
                                    </Form.Group>
                                    </Col>
                                    <Col>
                                    <Form.Group className="mb-3" controlId="text">
                                    <Form.Label>Wystawił</Form.Label>
                                        <Form.Control type="documentType" name="documentType" defaultValue={this.state.document.employeeName +" " + this.state.document.employeeSurname} />
                                    </Form.Group>
                                    </Col> 
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Wystawiono</Form.Label>
                                            <Form.Control type="documentDate" name="documentDate" defaultValue={this.state.document.documentDate}   />
                                    </Form.Group>
                                    </Col>

                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Dotyczy</Form.Label>
                                        <Form.Control type="documentReference" name="documentReference" defaultValue={this.state.document.documentReference}  />
                                    </Form.Group>
                                    </Col>
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Kontrahent</Form.Label>
                                        <Form.Control type="realizationTerm" name="realizationTerm" defaultValue={this.state.document.clientName}  />
                                    </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Termin realizacji</Form.Label>
                                        <Form.Control type="realizationTerm" name="realizationTerm" defaultValue={this.state.document.realizationTerm}  />
                                    </Form.Group>
                                    </Col>
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Warunki dostawy</Form.Label>
                                        <Form.Control type="deliveryConditions" name="deliveryConditions" defaultValue={this.state.document.deliveryConditions}  />
                                    </Form.Group>
                                    </Col>

                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Cena całkowita</Form.Label>
                                        <Form.Control type="totalPrice" name="totalPrice" defaultValue={this.state.document.totalPrice}  />
                                    </Form.Group>
                                    </Col>
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Waluta</Form.Label>
                                        <Form.Control type="currency" name="currency" defaultValue={this.state.document.currency}  />
                                    </Form.Group>
                                    </Col>

                                    <Col></Col>
                                    <Col></Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="formBasiScEmail" >
                                    <Form.Label>Warunki płatności</Form.Label>
                                        <Form.Control type="text" name="paymentConditions" style={{height: '100px' }} defaultValue={this.state.document.paymentConditions} />
                                    </Form.Group>

                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Uwagi</Form.Label>
                                        <Form.Control type="documentAttention" name="documentAttention" defaultValue={this.state.document.documentAttention}  />
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
                                                <th scope="col">
                                                        <div className="btn_new_employee">
                                                            <Link to = {`addTr/${this.state.document.id}`}> <Button variant="primary">DODAJ POZYCJĘ</Button></Link>
                                                        </div>
                                                        </th>
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
                                                                <td>
                                                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                                                    {/* <Link to = {`company/${company.id}/about`}><button type="button" class="btn btn-success">Podgląd</button></Link> */}
                                                                    <Link to = {`updateCompany/${transaction.id}`}><button type="button" class="btn btn-warning">Edytuj</button></Link>
                                                                    <a onClick={()=> deleteTransaction(transaction.id)}><button type="button" class="btn btn-danger">Usuń</button></a>
                                                                </div>
                                                            </td>
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