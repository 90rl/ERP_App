import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import CompanyLogo from './CompanyLogo.png';
import './Login.css';


function login(loginData){
    // console.log(loginData)
    const a = JSON.stringify(loginData)
    console.log(a)

        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(loginData)
        // };
        // fetch('http://localhost:8081/company/das', requestOptions)
        //     .then(response => response.json())
}




export default class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
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
                        <div className="Box_size ">
                            <div className="card mb-9">

                                <img className="CompanyLogo" src={CompanyLogo} alt=""/>

                                <div className="card-body">

                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" name="email" placeholder="Enter email"   onChange={this.handleInputChange}/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleInputChange} />
                                        </Form.Group>
                                    
                                        <div className="button_zaloguj">
                                        <a onClick={()=> login(this.state)}>
                                        <Button variant="success" size="lg" type="button">
                                            Zaloguj
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

        // console.log(JSON.stringify(this.state))
    }
}