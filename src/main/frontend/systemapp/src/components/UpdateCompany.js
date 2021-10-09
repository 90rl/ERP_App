import React from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './UpdateCompany.css';
import { Link } from 'react-router-dom';


function updateCompany(company){
    console.log("updateCompany " + company);
    const id = company.id
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(company)
    };
    fetch('http://localhost:8081/company/update-comp/'+ id, requestOptions)
        .then(response => response.json())
}

export default class UpdateCompany extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
        };
        console.log("constructor  " + this.state)
        this.handleInputChange = this.handleInputChange.bind(this);
      }

    componentDidMount(){
        axios.get('http://localhost:8081/company/findById/' +this.props.match.params.id)
        .then(res=> {
            const company = res.data;
            this.setState(company)
            console.log("constructor  " + company)
            
        })
        console.log("ComponentDidMount " + this.state)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState( { 
                ...this.state,
                [name]: value,
            }
            
          );
    }

    render(){

        return(
            <>
                <div className="container smt-5">
                    <div className='row' >
                        <div className="comp_update align-center">
                            <div className="card mb-3">
                                <div className="card-header bg-success text-white">DANE FIRMY</div>
                                <div className="card-body">

                                <Form  > 
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Nazwa firmy</Form.Label>
                                        <Form.Control type="name" name="name" defaultValue={this.state.name} onChange= {this.handleInputChange} />
                                        </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Ulica</Form.Label>
                                        <Form.Control type="street" name="street" defaultValue={this.state.street} onChange={this.handleInputChange}   />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Numer budynku</Form.Label>
                                        <Form.Control type="streetNumber" name="streetNumber" defaultValue={this.state.streetNumber}  onChange={this.handleInputChange}   />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Nazwa lokalu</Form.Label>
                                        <Form.Control type="localNumber" name="localNumber" defaultValue={this.state.localNumber}  onChange={this.handleInputChange}   />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Kod pocztowy XX-XXX</Form.Label>
                                        <Form.Control type="postcode" name="postcode" defaultValue={this.state.postcode}  onChange={this.handleInputChange}   />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Poczta</Form.Label>
                                        <Form.Control type="city" name="city" defaultValue={this.state.city}  onChange={this.handleInputChange}   />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>NIP</Form.Label>
                                        <Form.Control type="nip" name="nip" defaultValue={this.state.nip}  onChange={this.handleInputChange}   />
                                    </Form.Group>

                                        <div className="Btn_dodaj">
                                        <a onClick={()=> console.log(this.company)} > 
                                        <a onClick={()=> updateCompany(this.state)} >
                                            {/* <Link to = {`/employee`} > */}
                                                <Button name="Btn_dodaj"  variant="primary" type="button" > 
                                                    AKTUALIZUJ
                                                </Button>
                                            {/* </Link> */}
                                        </a>
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