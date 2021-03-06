import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './DocumentEdit.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';




function addDocument(document){
    // console.log(company)
    // const a = JSON.stringify(company)
    // console.log(a)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(document)
        };
        fetch('http://localhost:8081/company/addCompany', requestOptions)
            .then(response => response.json())
}


export default class AddDocument extends React.Component{

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
                        <div className="col-9 align-center">
                            <div className="card mb-3">
                                <div className="card-header bg-success text-white text-center"> NOWY DOKUMENT</div>
                                <div className="card-body">

                                <Form  > 
                                <Row>
                                    
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Typ dokumentu</Form.Label>
                                    <Form.Control type="documentType" name="documentType" placeholder="Typ dokumentu" onChange={this.handleInputChange}  />

                                        {/* <Form.Control type="documentType" name="documentType" defaultValue={this.state.document.documentType} onChange= {this.handleInputChange}  /> */}
                                    </Form.Group>
                                    </Col>   
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Numer dokumentu</Form.Label>
                                        <Form.Control type="text" name="documentNumber"  onChange={this.handleInputChange}  />

                                        {/* <Form.Control type="text" name="documentNumber" defaultValue={this.state.document.documentNumber}/> */}
                                    </Form.Group>
                                    </Col>
                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Wystawi??</Form.Label>
                                        <Form.Control type="documentType" name="documentType" />
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
                                    <Form.Label>Cena ca??kowita</Form.Label>
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
                                    <Form.Label>Warunki p??atno??ci</Form.Label>
                                        <Form.Control type="text" name="paymentConditions" style={{height: '100px' }} defaultValue={this.state.document.paymentConditions} />
                                    </Form.Group>

                                    <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Uwagi</Form.Label>
                                        <Form.Control type="documentAttention" name="documentAttention" defaultValue={this.state.document.documentAttention}  />
                                    </Form.Group>
                                    </Col>

                                    <div className="Btn_dodaj">
                                        <a onClick={()=> addDocument(this.state)}> 
                                        <Button name="Btn_dodaj"  variant="primary" type="submit">
                                            DODAJ
                                        </Button>
                                        </a>
                                        </div>


                                </Form>

{/*                                 
                                    <div className="table-responsive">
                                    <table className="table table-hover  text-left">
                                        <thead >
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col" >Przedmiot oferty</th>
                                                <th scope="col">Ilo????</th>
                                                <th scope="col">Jednostka</th>
                                                <th scope="col">Cena za jednostk??</th>
                                                <th scope="col">Cana ca??o??ci</th>
                                                <th scope="col">Waluta</th>
                                                <th scope="col">
                                                        <div className="btn_new_employee">
                                                            <Link to = {`addTr/${this.state.document.id}`}> <Button variant="primary">DODAJ POZYCJ??</Button></Link>
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
                                                                    <Link to = {`updateCompany/${transaction.id}`}><button type="button" class="btn btn-warning">Edytuj</button></Link>
                                                                    <a onClick={()=> deleteTransaction(transaction.id)}><button type="button" class="btn btn-danger">Usu??</button></a>
                                                                </div>
                                                            </td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                )}
                                    </table>

                                </div> */}
                            </div>
                            </div>
                        </div>


                    </div>
                </div>



            </>
            
        )
    }

}