import React from 'react';
import PropTypes, { element } from 'prop-types';

import MobileClient from './MobileClient';
import EditInfo from './EditInfo';

import {clientsEvents} from './events';

import './MobileCompany.css';
 



class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    editClient: PropTypes.array,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im:  PropTypes.string.isRequired,
        otch:  PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
    workMode: 0,
    editClient: 0,
    key: this.props.clients.length+1,
   }

  

  componentDidMount = () => {
    clientsEvents.addListener('EDeleteInfo',this.deleteInfo);
    clientsEvents.addListener('EEditInfo',this.editInfo);
    clientsEvents.addListener('ESaveInfo',this.saveInfo);
    clientsEvents.addListener('ECancelInfo',this.cancelInfo);
  };

  componentWillUnmount = () => {
    clientsEvents.removeListener('EDeleteInfo',this.deleteInfo);
    clientsEvents.removeListener('EEditInfo',this.editInfo);
    clientsEvents.removeListener('ESaveInfo',this.saveInfo); 
    clientsEvents.removeListener('ECancelInfo',this.cancelInfo);  
  };

  deleteInfo =(client)=>{
    let NewState=this.state.clients.filter(i => i!=client)
    this.setState({clients: NewState, workMode: 0})
  };

  editInfo = (client)=>{    
    this.setState({workMode:1, editClient:client, key:this.state.key+1,})
  }

  saveInfo = (newCl) =>{
    
    let newArr=this.state.clients.slice()
    if (this.state.workMode==1){
      let index=this.state.clients.findIndex(clients=>clients.id===newCl.id)
      newArr[index]=newCl
      
   }
   
      if (this.state.workMode==2){
       newArr.push(newCl)
      } 
   
    this.setState({clients:newArr, workMode: 0, key:this.state.key+1})
  }

  cancelInfo = () =>{
    this.setState({workMode: 0, key: this.state.clients.length, })
  }

  addClient = () =>{
    let newClient={id:0, fam:"", im:"", otch:"", balance: 0, id:this.state.key}
    this.setState ({workMode:2, key:this.state.key+1, editClient: newClient, })
  }


  allClients = () => {
    this.setState({clients:this.props.clients})
  }
  
  activeClients =()=>{
    let newArr=this.props.clients.filter(i=>i.balance>0)   
   this.setState({clients:newArr})

  }


  blockClients =()=>{
    let newArr=this.props.clients.filter(i=>i.balance<0)   
   this.setState({clients:newArr})
  }


  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };
  
  
  render() {
  
    console.log("MobileCompany render");

    var clientsCode=this.state.clients.map( i =>
      <MobileClient key={i.id} info={i} />
    );

    
    
    
    return (
      <div className='MobileCompany'>
        <input type="button" value="МТС" onClick={this.setName1} />
        <input type="button" value="Velcom" onClick={this.setName2} />
        <div className='MobileCompanyName'>Компания&#58; {this.state.name}</div>
        <input type="button" value="Все"  onClick={this.allClients}/>
        <input type="button" value="Активные" onClick={this.activeClients} />
        <input type="button" value="Заблокированные"  onClick={this.blockClients}/>

        <table className='TableClients'>
          <tbody>
            <tr className="Title">
              <td>Фамилия</td>
              <td>Имя</td>
              <td>Отчество</td>
              <td>Баланс</td>
              <td>Статус</td>
              <td>Редактировать</td>
              <td>Удалить</td>                           
            </tr>
            {clientsCode}             
          </tbody>           
        </table>
        
        <input type="button" value="Добавить клиента" onClick={this.addClient}/>
        { (this.state.workMode!=0)&& (<EditInfo key={this.state.key} client={this.state.editClient}/>)}
       </div>
    )
    ;

  }

  
}

export default MobileCompany;
