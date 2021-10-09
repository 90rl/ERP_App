import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Document.css';
import Button from 'react-bootstrap/Button';



function deleteDocument(id){
    if(window.confirm('Are you sure?')){
        fetch('http://localhost:8081/document' + id, {
            method:'DELETE',
            header:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
    window.location.reload();
}

export default class Document extends React.Component{
    constructor(document){
        super(document)
        this.state={
            document : []

        }
    }


    
    componentDidMount(){
        axios.get('http://localhost:8081/document/findAll')
        .then (res=> {
            const document = res.data;
            this.setState({document})
        })
    }

    render(){
        return (
            <>           
                <div class="container">
                    <div class="row">
                        <div class="container_Company">
                            <div class="card">
                                <div class="card-body">
                                    <h4 className="text-center">LISTA DOKUMENTÓW</h4>

                                        
                                        <div class="table-responsive">
                                            <table className="table table-hover text-center">
                                                <thead >
                                                    <tr>
                                                        <th scope="col"><strong>Nr</strong></th>
                                                        <th scope="col"><strong>Typ</strong></th>
                                                        <th scope="col"><strong>Numer dokumentu</strong></th>
                                                        <th scope="col"><strong>Data wystawienia</strong></th>
                                                        <th scope="col"><strong>Wystawił</strong></th>
                                                        <th scope="col"><strong>Klient</strong></th>
                                                        <th scope="col"><strong>Kwota</strong></th>
                                                        <th scope="col"><strong>Waluta</strong></th>
                                                        <th scope="col">
                                                        <div className="btn_new_employee">
                                                            <Link to ={`/addDoc`}> <Button variant="primary">DODAJ NOWY DOKUMENT</Button></Link>
                                                        </div>
                                                        </th>
                                                        <th scope="col"><strong></strong></th>
                                                    </tr>
                                                </thead>
                                                {this.state.document.map(document =>(
                                                    <tbody>
                                                        <tr key={document.id}>
                                                            <th scope="row">{document.id}</th>                                               
                                                            <td>{document.documentType}</td>
                                                            <td>{document.documentNumber}</td>
                                                            <td>{document.documentDate}</td>
                                                            <td>{document.employeeName} {document.employeeSurname}</td>
                                                            <td>{document.clientName}</td>
                                                            <td>{document.totalPrice}</td>
                                                            <td>{document.currency}</td>
                                                            <td>
                                                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                                                    <Link to = {`documentView/${document.id}`}><button type="button" class="btn btn-success">Podgląd</button></Link>
                                                                    <Link to = {`docEdit/${document.id}`}><button type="button" class="btn btn-warning">Edytuj</button></Link>
                                                                    <a onClick={()=> deleteDocument(document.id)}><button type="button" class="btn btn-danger">Usuń</button></a>
                                                                </div>
                                                                </td>
                                                       
                                                        </tr>
                                                    </tbody>
                                                ) )}
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