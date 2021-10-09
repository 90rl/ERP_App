import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './AddCompany.css';

function addCompany(company){
    // console.log(company)
    // const a = JSON.stringify(company)
    // console.log(a)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(company)
        };
        fetch('http://localhost:8081/company/addCompany', requestOptions)
            .then(response => response.json())
}




export default class AddCompany extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          street: '',
          streetNumber: '',
          localNumber: '',
          postcode: '',
          city: ''
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
                        <div className="container_addCompany">
                            <div className="card mb-3">
                                <div className="card-header bg-success text-white">NOWA FIRMA</div>
                                <div className="card-body">

                                <Form >
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="name" name="name" placeholder="Nazwa Firmy" onChange={this.handleInputChange}  />
                                        </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="street" name="street" placeholder="Ulica" onChange={this.handleInputChange}  />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="streetNumber" name="streetNumber" placeholder="Numer budynku"  onChange={this.handleInputChange}  />
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="localNumber" name="localNumber" placeholder="Numer lokalu"  onChange={this.handleInputChange}  />
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="postcode" name="postcode" placeholder="Kod pocztowy XX-XXX"  onChange={this.handleInputChange}  />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="city" name="city" placeholder="Miasto"  onChange={this.handleInputChange}  />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="nip" name="nip" placeholder="NIP"  onChange={this.handleInputChange}  />
                                    </Form.Group>

                                        <div className="Btn_dodaj">
                                        <a onClick={()=> addCompany(this.state)}>
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