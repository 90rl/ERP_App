import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddEmployee.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function addEmployee(employee){
    // console.log(employee)
    // const a = JSON.stringify(employee)
    // console.log(a)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employee)
        };
        fetch('http://localhost:8081/employee/addEmployee', requestOptions)
            .then(response => response.json())
            // .then(data => this.setState({ postId: data.id }));
    
    
}




export default class AddEmployee extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          surname: '',
          email: '',
          password: ''
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
                        <div className="container_addEmployee  ">
                            <div className="card mb-3">
                                <div className="card-header bg-success text-white">Dane pracownika</div>
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
                                        <a onClick={()=> addEmployee(this.state)}> 
                                        <Button name="Btn_dodaj"  variant="primary" type="submit">
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