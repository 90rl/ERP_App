import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Employee.css';
import Button from 'react-bootstrap/Button';
import { OverlayTrigger } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';


function deleteEmployee(id){
    if(window.confirm('Are you sure?')){
        fetch('http://localhost:8081/employee/' + id, {
            method:'DELETE',
            header:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
    window.location.reload();
}


function resetPassword(id){
    // console.log("Wartość id : "+id)
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:8081/employee/update-pass/' + id +"?password=1111", requestOptions)
 
}

export default class Employee extends React.Component{

    

    constructor(employees){
        super(employees)
        this.state={employee : []}
    }

    componentDidMount(){
        axios.get('http://localhost:8081/employee/findAll')
        .then (res=> {
            const employee = res.data;
            this.setState({employee})
        })
    }

        render(){

            const renderTooltip = (props) => (
                <Tooltip id="button-tooltip" {...props}>
                  Domyślne hasło: 1111
                </Tooltip>
              );

        return (
                <>

            {/* Table with employee */}
                
                <div className="container">
                    <div className="row">
                        <div className="container_2">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="text-center">LISTA PRACOWNIKÓW</h4>

                                        <div className="table-responsive">
                                            <table className="table table-hover text-center">
                                                <thead >
                                                    <tr>
                                                        <th scope="col"><strong>Id</strong></th>
                                                        <th scope="col"><strong>Imię</strong></th>
                                                        <th scope="col"><strong>Nazwisko</strong></th>
                                                        <th scope="col"><strong>Email</strong></th>
                                                        <th scope="col">
                                                        <div className="btn_new_employee">
                                                            <Link to ={`/addEmployee`}> <Button variant="primary">DODAJ NOWEGO PRACOWNIKA</Button></Link>
                                                        </div>
                                                        </th>
                                                        {/* <th scope="col"><strong></strong></th> */}
                                                    </tr>
                                                </thead>
                                                {this.state.employee.map(employee =>(
                                                    <tbody>
                                                        <tr key={employee.id}>
                                                            <th scope="row">{employee.id}</th>   
                                                            {/* <th scope="row"><Link to ={`/employee/${employee.id}`}>{employee.id} </Link></th>                                              */}
                                                            <td>{employee.name}</td>
                                                            <td>{employee.surname}</td>
                                                            <td>{employee.email}</td>
                                                            {/* <td>{employee.employeePassword}</td> */}
                                                            <td>
                                                                <div className="btn-group" role="group" aria-label="Basic mixed styles example">

                                                            {/* <a onClick={()=> resetPassword(employee.id)}>
                                                                 <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 250, hide: 400 }}
                                                                    overlay={renderTooltip}
                                                                    >
                                                                    <button type="button" className="btn btn-success">Zresetuj hasło</button>

                                                                </OverlayTrigger>
                                                            </a>               */}
                                                                    <Link to = {`resetPass/${employee.id}`}><button type="button" className="btn btn-success">Zresetuj hasło</button></Link>
                                                                    <Link to = {`updateEmployee/${employee.id}`}><button type="button" className="btn btn-warning">Edytuj</button></Link>
                                                                    <a onClick={()=> deleteEmployee(employee.id)}><button type="button" className="btn btn-danger">Usuń</button></a>
                                                                </div>
                                                                </td>
                                                        </tr>
                                                    </tbody>
                                                )
                                                 )}
                                                        <tr className="last">
                                                        <th scope="col"></th>
                                                        <th scope="col"></th>
                                                        <th scope="col"></th>
                                                        <th scope="col"></th>
                                                        {/* <th scope="col"><strong>Password</strong></th> */}
                                                        <th scope="col">
                                                        </th>
                                                    </tr>

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