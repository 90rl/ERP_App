import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import './Company.css';
import Button from 'react-bootstrap/Button';
import './Company.css';


function deleteCompany(id){
    if(window.confirm('Are you sure?')){
        fetch('http://localhost:8081/company/' + id, {
            method:'DELETE',
            header:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'  
            }
        })
    }
    window.location.reload();
}

export default class Company extends React.Component{

    constructor(company){
        super(company)
        this.state={company : []}
        
    }

    

    componentDidMount(){
        axios.get('http://localhost:8081/company/findAll')
        .then (res=> {
            const company = res.data;
            this.setState({company})
        })
    }

    render(){
        return (
            <>            
            
                <div class="container">
                    <div class="row">
                        <div class="company ">
                            <div class="card">
                                <div class="card-body">
                                    <h4 className="text-center">LISTA FIRM</h4>
                                        <div class="table-responsive">
                                            <table className="table table-hover text-center">
                                                <thead >
                                                    <tr>
                                                        <th scope="col"><strong>Id</strong></th>
                                                        <th scope="col"><strong>Nazwa</strong></th>
                                                        <th scope="col"><strong>Ulica</strong></th>
                                                        <th scope="col"><strong>Nr budynku</strong></th>
                                                        <th scope="col"><strong>Nr lokalu</strong></th>
                                                        <th scope="col"><strong>Kod pocztowy</strong></th>
                                                        <th scope="col"><strong>Miasto</strong></th>
                                                        <th scope="col"><strong>NIP</strong></th>
                                                        
                                                        <th scope="col">
                                                        <div className="btn_new_employee">
                                                            <Link to ={`/addCompany`}> <Button variant="primary">DODAJ NOWĄ FIRMĘ</Button></Link>
                                                        </div>
                                                        </th>
                                                        {/* <th scope="col"><strong></strong></th> */}

                                                    </tr>
                                                </thead>
                                                {this.state.company.map(company =>(
                                                    <tbody>
                                                        <tr key={company.id}>
                                                            <th scope="row">{company.id}</th>                                               
                                                            <td>{company.name}</td>
                                                            <td>{company.street}</td>
                                                            <td>{company.streetNumber}</td>
                                                            <td>{company.localNumber}</td>
                                                            <td>{company.postcode}</td>
                                                            <td>{company.city}</td>
                                                            <td>{company.nip}</td>
                                                            <td>
                                                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                                                    {/* <Link to = {`company/${company.id}/about`}><button type="button" class="btn btn-success">Podgląd</button></Link> */}
                                                                    <Link to = {`updateCompany/${company.id}`}><button type="button" class="btn btn-warning">Edytuj</button></Link>
                                                                    <a onClick={()=> deleteCompany(company.id)}><button type="button" class="btn btn-danger">Usuń</button></a>
                                                                </div>
                                                            </td>
                                                       
                                                        </tr>

                                                    </tbody>

                                                ) )}

                                                        <tr className="last">
                                                        <th scope="col"></th>
                                                        <th scope="col"></th>
                                                        <th scope="col"></th>
                                                        <th scope="col"></th>
                                                        <th scope="col"></th>
                                                        <th scope="col"></th>
                                                        <th scope="col"></th>
                                                        {/* <th scope="col"><strong>Password</strong></th> */}
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