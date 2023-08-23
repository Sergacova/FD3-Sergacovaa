import React from 'react';
import PropTypes from 'prop-types';

import {clientsEvents} from './events';

import './EditInfo.css';

class EditInfo extends React.PureComponent {

    static propTypes = {
        client:PropTypes.shape({
          id: PropTypes.number,
          fam: PropTypes.string,
          im: PropTypes.string,
          otch:  PropTypes.string,
          balance: PropTypes.number,
          
        }),
      };

    state ={
        client: this.props.client
    }

    saveInfo = ()=>{
        if ( (this.newClientFam&&this.newClientIm)&&(this.newClientOtch&&this.newClientBal)) { 

            let newClient = {...this.props.client,fam:this.newClientFam.value, im: this.newClientIm.value, otch:this.newClientOtch.value, balance: parseInt(this.newClientBal.value)};
        clientsEvents.emit('ESaveInfo', newClient)
    }
}
    cancelInfo = () => {
        clientsEvents.emit('ECancelInfo')
    }

    setNewClientFam = (ref) =>{
            this.newClientFam=ref;
    };
    setNewClientIm = (ref) =>{
        this.newClientIm=ref;
    };
    setNewClientOtch = (ref) =>{
        this.newClientOtch=ref;
    };

    setNewClientBal = (ref) =>{
       this.newClientBal=ref;
    };

    render (){
        
        console.log("EditInfo render");
        return (
       <div className="EditInfo"><input defaultValue={this.state.client.fam} ref={this.setNewClientFam}></input>
            <input defaultValue={this.state.client.im} ref={this.setNewClientIm}></input>
            <input defaultValue={this.props.client.otch} ref={this.setNewClientOtch}></input>    
            <input defaultValue={this.state.client.balance} ref={this.setNewClientBal}></input>
            <input type="button" value="Сохранить" onClick={this.saveInfo}></input>
            <input type="button" value="Сбросить" onClick={this.cancelInfo}></input>
        </div>
 
        )
    }

}
export default EditInfo;