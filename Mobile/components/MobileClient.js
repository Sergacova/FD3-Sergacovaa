import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

import {clientsEvents} from './events';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch:  PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
      
    }),
  
   
  };

  state = {
    info: this.props.info,
  }

  deleteInfo = (EO) =>{
    clientsEvents.emit('EDeleteInfo',this.state.info);    
  }

  editInfo = (EO) =>{
    clientsEvents.emit('EEditInfo',this.state.info)
  }

  componentWillReceiveProps = (newProps) => {
    this.setState({info:newProps.info});
  };

  render() {

    console.log("MobileClient id="+this.state.info.id+" render");
    let status=this.props.info.balance>=0?'active':'blocked'
    
    return (
 
   
        <tr>        
        <td className='MobileClientFam' >{this.props.info.fam}</td>
        <td className='MobileClientIm'>{this.props.info.im}</td>
        <td className='MobileClientOtch'>{this.props.info.otch}</td>
        <td className='MobileClientBalance'>{this.props.info.balance}</td>
        <td className='MobileClientStatus' style={{backgroundColor: this.props.info.balance>=0?'green':'red'}}>{status}</td>          
        <td className='MobileClientEdit'><input type='button'  value='Редактировать' onClick={this.editInfo}></input></td>
        <td className='MobileClientDelete'><input type='button'  value='Удалить' onClick={this.deleteInfo}></input></td>
        </tr>          

    );

  }

}

export default MobileClient;

