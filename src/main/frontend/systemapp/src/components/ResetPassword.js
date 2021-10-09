import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddEmployee.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

function resetPassword(id){
    // console.log("Wartość id : "+id)
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:8081/employee/update-pass/' + id +"?password=1111", requestOptions)
 
}


export default class ResetPassword extends React.Component{

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

      componentDidMount(){
        axios.get('http://localhost:8081/employee/findById/' +this.props.match.params.id)
        .then(res=> {
            const employee = res.data;
            this.setState(employee)
        })
        console.log("ComponentDidMount " + this.state)
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
                                <div className="card-header bg-success text-white">Zmiana hasła dla użytkownika {this.state.email} </div>
                                <div className="card-body">

                                <Form >

                                    <Form.Group className="mb-3" controlId="formBasicEmail"> 
                                        <Form.Control type="password" name="password" placeholder="Podaj hasło"   onChange={this.handleInputChange} />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail"> 
                                        <Form.Control type="password" name="password" placeholder="Wprowadź ponownie to samo hasło"   onChange={this.handleInputChange} />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>

                                        <div className="Btn_dodaj">
                                        <a onClick={()=> resetPassword(this.state)}> 
                                        <Button name="Btn_dodaj"  variant="primary" type="submit">
                                            ZMIEŃ
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