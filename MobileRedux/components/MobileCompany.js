import React from 'react';
import PropTypes from 'prop-types';
import { clientsEvents } from './events';

import MobileClient from './MobileClient';
import FilterButtons from './FilterButtons';
import ClientForm from './ClientForm';

import '../styles/MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };


  
  state = {
    clients: this.props.clients,
    status: 'all',
    workMode: 'btnNewClient',
    editClient: null,
  };

  componentDidMount = () => {
    clientsEvents.addListener('EEdit', this.editClient);
    clientsEvents.addListener('ESaveNewClient', this.saveClient);
    clientsEvents.addListener('ECancelForm', this.cancelForm);
    clientsEvents.addListener('EDelete', this.deleteClient);

    clientsEvents.addListener('EFilterAll', this.filterAll);
    clientsEvents.addListener('EFilterActive', this.filterActive);
    clientsEvents.addListener('EFilterBlocked', this.filterBlocked);

  };

  componentWillUnmount = () => {
    clientsEvents.removeListener('EEdit', this.editClient);
    clientsEvents.removeListener('ESaveNewClient', this.saveClient);
    clientsEvents.removeListener('ECancelForm', this.cancelForm);
    clientsEvents.removeListener('EDelete', this.deleteClient);

    clientsEvents.removeListener('EFilterAll', this.filterAll);
    clientsEvents.removeListener('EFilterActive', this.filterActive);
    clientsEvents.removeListener('EFilterBlocked', this.filterBlocked);
  };

  editClient =(editClient) => {
    this.setState({editClient: editClient, workMode: 'form'});
  };

  saveClient = (newClient) => {
    this.setState({ workMode: 'btnNewClient' })
    const checkingIsOldClient = this.state.clients.some((client) => client.id === newClient.id);

    if (checkingIsOldClient) {
        const updatedClientsArr = this.state.clients.map((client) => (client.id === newClient.id) ? newClient : client);
        this.setState({ clients: [...updatedClientsArr] });
    } else {
      this.setState(prev => ({ clients: [...prev.clients, { ...newClient, id: this.setID() }] }))
    };

  };

  setID = () => {
    let clients = this.state.clients;
    let maxID = clients[0].id;
    clients.forEach((client) => {
      if (client.id > maxID) maxID = client.id;
    });
    
    return maxID + 5;
  };

  cancelForm = () => {
    this.setState({ workMode: 'btnNewClient' });
  };

  deleteClient = (id) => {
    let client = this.state.clients.filter(v => v.id == id);
    if (confirm(`Удалить клиента с id ${client[0].id}?`)) {
        this.setState(prevState => ({
            clients: prevState.clients.filter(v => v.id != id)
        }));
    }
  };

  filterAll = () => this.setState({ status: 'all' });
  filterActive = () => this.setState({ status: 'active' });
  filterBlocked = () => this.setState({ status: 'blocked' });
  
  addNewClient = () => {
    this.setState({ workMode: 'form' });
    this.setState({
      editClient: {id: 0, fam:'', im:'', otch:'', balance:0}
    })
  };

  render() {
    console.log('MobileCompany render');

    const filteredClients = this.state.clients.filter(client => {
      if (this.state.status=='all') return client;
      if (this.state.status=='active') return client.balance > 0;
      if (this.state.status=='blocked') return client.balance < 0;
    })

    const clientsCode=filteredClients.map( client => {
        return <MobileClient key={client.id} client={client} />;
      }
    );

    return (
      <div className='MobileCompany'>
        <FilterButtons />
        <table className="MobileCompanyClients">
          <thead>
            <tr>
              <td>Фамилия</td>
              <td>Имя</td>
              <td>Отчество</td>
              <td>Баланс</td>
              <td>Статус</td>
              <td>Редактировать</td>
              <td>Удалить</td>
            </tr>
          </thead>
          <tbody>
            {clientsCode}
          </tbody>
        </table>
        {(this.state.workMode === 'btnNewClient') && 
          <input className="BtnNewClient" type="button" value="Добавить клиента" onClick={this.addNewClient} />}
        {(this.state.workMode === 'form') && <ClientForm client={this.state.editClient}/>}
 
      </div>
    )
    ;

  }

}

export default MobileCompany;