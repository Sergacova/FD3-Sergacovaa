import React from 'react';
import PropTypes from 'prop-types';
import { clientsEvents } from './events';

class MobileClient extends React.PureComponent {

  static propTypes = {
    client:PropTypes.shape({
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  state = {
    ...this.props.client,
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.client.id !== prevProps.client.id ||
      this.props.client.balance !== prevProps.client.balance ||
      this.props.client.fam !== prevProps.client.fam ||
      this.props.client.im !== prevProps.client.im ||
      this.props.client.otch !== prevProps.client.otch) 
    {
      this.setState({...this.props.client});
    }
  };

  editClient = (e) => {
    e.stopPropagation();
    clientsEvents.emit('EEdit', this.state);
  };

  deleteClient = (e) => {
    e.stopPropagation();
    clientsEvents.emit('EDelete', this.state.id);
  };

  

  render() {
    console.log('MobileClient id='+this.state.id+' render');

    const isActive = this.state.balance > 0;

    return (
      <tr>
          <td>{this.state.fam}</td>
          <td>{this.state.im}</td>
          <td>{this.state.otch}</td>
          <td>{this.state.balance}</td>
          <td style={{background: (isActive)?'#13c013':'#eb2a2a'}}>{(isActive)?'active':'blocked'}</td>

          <td>
              <button onClick={this.editClient}>Редактировать</button>
          </td>
          <td>
              <button onClick={this.deleteClient}>Удалить</button>
          </td>
      </tr>


    );

  }

}

export default MobileClient;
