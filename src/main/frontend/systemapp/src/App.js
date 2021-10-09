import './App.css';
import Navbar  from './components/Navbar';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import Employee from './components/Employee';
import Company from './components/Company';
import Document from './components/Document';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import AddCompany from './components/AddCompany';
import UpdateCompany from './components/UpdateCompany';
import DocumentView from './components/DocumentView';
import LoginPage from './components/LoginPage';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import DocumentEdit from './components/DocumentEdit';
import AddTransaction from './components/AddTransaction';
import AddDocument from './components/AddDocument';



function App() {
  return (
    <>
      <Router>
        <Navbar> </Navbar>
        <Switch>
            <Route path='/employee' exact component={Employee}/>
            <Route path='/company' exact component={Company}/>
            <Route path='/document' exact component={Document}/>
            <Route path='/addEmployee' exact component={AddEmployee}/>
            <Route path='/updateEmployee/:id' exact component={UpdateEmployee}/>
            <Route path='/addCompany' exact component={AddCompany}/>
            <Route path='/updateCompany/:id' exact component={UpdateCompany}/>
            <Route path='/documentView/:id' exact component={DocumentView}/>
            <Route path='/LoginPage' exact component={LoginPage}/>
            <Route path='/Login' exact component={Login}/>
            <Route path='/resetPass/:id' exact component={ResetPassword}/>
            <Route path='/docEdit/:id' exact component={DocumentEdit}/>
            <Route path='/docEdit/addTr/:id' exact component={AddTransaction}/>
            <Route path='/addDoc' exact component={AddDocument}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
