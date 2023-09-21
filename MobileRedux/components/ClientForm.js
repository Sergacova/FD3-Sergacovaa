import React from 'react';
import PropTypes from 'prop-types';
import { clientsEvents } from './events';

import '../styles/ClientForm.css';

class ClientForm extends React.PureComponent {

    static propTypes = {
        client: PropTypes.shape({
            id: PropTypes.number.isRequired,
            fam: PropTypes.string.isRequired,
            im: PropTypes.string.isRequired,
            otch: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
        }),
    };

    newFamRef = React.createRef();
    newImRef = React.createRef();
    newOtchRef = React.createRef();
    newBalanceRef = React.createRef();

    saveForm = () => {
        const editedClient = {};
        editedClient.id = this.props.client.id;
        (this.newFamRef.current)? editedClient.fam = this.newFamRef.current.value: editedClient.fam = this.props.client.fam;
        (this.newImRef.current)? editedClient.im = this.newImRef.current.value: editedClient.im = this.props.client.im;
        (this.newOtchRef.current)? editedClient.otch = this.newOtchRef.current.value: editedClient.otch = this.props.client.otch;
        (this.newBalanceRef.current)? editedClient.balance = +this.newBalanceRef.current.value: editedClient.balance = this.props.client.balance;
        
        clientsEvents.emit('ESaveNewClient', editedClient);
    };

    cancelForm = () => {
        clientsEvents.emit('ECancelForm');
    };

    render() {
        console.log('ClientForm render');
        return (
            <div>
                <div className='ClientForm'>
                        <div className='ClientFormRow'>
                            <label htmlFor='fam'>Фамилия:</label>
                            <input defaultValue={this.props.client.fam}
                            type='text' 
                            name='fam' 
                            id='fam' 
                            ref={this.newFamRef} />
                        </div>
                        <div className='ClientFormRow'>
                            <label htmlFor='im'>Имя:</label>
                            <input defaultValue={this.props.client.im} 
                            type='text' 
                            name='im' 
                            id='im'
                            ref={this.newImRef} />
                        </div>
                        <div className='ClientFormRow'>
                            <label htmlFor='otch'>Отчество:</label>
                            <input defaultValue={this.props.client.otch}
                            type='text' 
                            name='otch' 
                            id='otch' 
                            ref={this.newOtchRef} />
                        </div>
                        <div className='ClientFormRow'>
                            <label htmlFor='balance'>Баланс:</label>
                            <input defaultValue={this.props.client.balance}
                            type='number' 
                            name='balance' 
                            id='balance' 
                            ref={this.newBalanceRef} />
                        </div>
                </div>
                <button className='ClientFormBtn' onClick={this.saveForm}>Save</button>
                <button className='ClientFormBtn' onClick={this.cancelForm}>Cancel</button>
            </div>
        )
    }
}

export default ClientForm;