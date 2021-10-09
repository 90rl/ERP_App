import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './AddTransaction.css';

function addTransaction(transaction){
    // console.log(company)
    // const a = JSON.stringify(company)
    // console.log(a)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(transaction)
        };
        fetch('http://localhost:8081/transaction/add', requestOptions)
            .then(response => response.json())
}




export default class AddTransaction extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          documentId: '',
          quantity: '',
          unit: '',
          pricePerUnit: '',
          currency: '',
          transactionSubject: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
      }

      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
      }

    render(){
        return(
            <>
                <div className="container smt-5">
                    <div className='row' >
                        <div className="container_addTransaction">
                            <div className="card mb-3">
                                <div className="card-header bg-success text-white">NOWA POZYCJA</div>
                                <div className="card-body">

                                <Form >
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Control type="transactionSubject" name="transactionSubject" style={{height: '100px' }}   placeholder="Przedmiot oferty" onChange={this.handleInputChange}  />
                                        </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="unit" name="unit" placeholder="Jednostka" onChange={this.handleInputChange}  />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="pricePerUnit" name="pricePerUnit" placeholder="Cena jednostkowa"  onChange={this.handleInputChange}  />
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="quantity" name="quantity" placeholder="Ilość"  onChange={this.handleInputChange}  />
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Cena całkowita</Form.Label>
                                        <Form.Control type="cena full" name="cena full" value={this.state.quantity * this.state.pricePerUnit}  />
                                    </Form.Group>


                                        <div className="Btn_dodaj">
                                        <a onClick={()=> addTransaction(this.state)}>
                                        <Button name="Btn_dodaj"  variant="primary" type="button">
                                            DODAJ
                                        </Button>
                                        </a>
                                        </div>
                                </Form>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>

        );
    }
}