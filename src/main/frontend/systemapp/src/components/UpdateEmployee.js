import React from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './UpdateEmployee.css';
import { Link } from 'react-router-dom';



// function updateEmployee(employee){
//         const id = employee.id
//         const requestOptions = {
//             method: 'PUT',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(employee)
//         };
//         fetch('http://localhost:8081/employee/update-emp/'+ id, requestOptions)
//             .then(response => response.json())
// }

function updateEmployee(employee){
    const id = employee.id
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee)
    };
    fetch('http://localhost:8081/employee/update-emp/'+ id, requestOptions)
        .then(response => response.json())
}

export default class UpdateEmployee extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
        };
    
        console.log("constructor  " + this.state)
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
                        <div className="employeeBox align-center">
                            <div className="card mb-3">
                                <div className="card-header bg-success text-white">Dane pracownika</div>
                                <div className="card-body">

                                <Form  > 
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Imię</Form.Label>
                                        <Form.Control type="name" name="name" defaultValue={this.state.name} onChange= {this.handleInputChange} />
                                        </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Nazwisko</Form.Label>
                                        <Form.Control type="surname" name="surname" defaultValue={this.state.surname} onChange={this.handleInputChange}   />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Adres email</Form.Label>
                                        <Form.Control type="email" name="email" defaultValue={this.state.email}  onChange={this.handleInputChange}   />
                                    </Form.Group>

                                        <div className="Btn_dodaj">
                                        {/* <a onClick={()=> console.log(this.state.employee)} >  */}
                                        <a onClick={()=> updateEmployee(this.state)} >
                                            {/* <Link to = {`/employee`} > */}
                                                <Button name="Btn_dodaj"  variant="primary" type="button" > 
                                                    AKTUALIZUJ
                                                </Button>
                                            {/* </Link> */}
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