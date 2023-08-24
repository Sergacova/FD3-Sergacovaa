import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

class Card extends  React.Component {

    static propTypes = {
        code: PropTypes.number,     
        price: PropTypes.string,
        nam: PropTypes.string,
        remainder: PropTypes.string, 
        isSelected: PropTypes.bool,
        workMode: PropTypes.number,
        cbCancelProduct: PropTypes.func,
        cbAddNewProductCard: PropTypes.func,
        cbSaveProduct: PropTypes.func, 
        cbEditField: PropTypes.func,
    };  

    state = {
      nam: this.props.nam,
      price: this.props.price,
      url: this.props.url,
      remainder: this.props.remainder,
      code: this.props.code,
      namEror: '',
      urlEror: '',
      priceEror: '',
      remainderEror: '',
      formValid: true,  
    };

    componentDidMount() {
      this.validate();
    };

    cancelMe = () => {
      this.props.cbCancelProduct ();
    };

    namChanged = (eo) => {
      this.setState ({nam: eo.target.value},  this.validate);
      this.props.cbEditField (eo.target.value);
    };

    urlChanged  = (eo) => {
      this.setState ({url: eo.target.value}, this.validate);
      this.props.cbEditField (eo.target.value);
    };

    priceChanged  = (eo) => {
      this.setState ({price: eo.target.value}, this.validate);
      this.props.cbEditField (eo.target.value);      
    };

    remainderChanged = (eo) => {
      this.setState ({remainder: eo.target.value}, this.validate);
      this.props.cbEditField (eo.target.value);
    };

    validate = () => {
      let namEror = "";
      if (!this.state.nam)
        namEror = " Поле *название* не может быть пустым";
      else namEror = "";
      this.setState ({namEror});

      let urlEror = "";
      if (!this.state.url)
        urlEror = " Поле *изображение* не может быть пустым";
      else urlEror = "";
      this.setState ({urlEror});

      let priceEror = "";
      if (!this.state.price)
      priceEror = " Поле *цена* не может быть пустым";
      else priceEror = "";
      this.setState ({priceEror});

      let remainderEror = "";
      if (!this.state.remainder)
      remainderEror = " Поле *остаток* не может быть пустым";
      else remainderEror = "";
      this.setState ({remainderEror});

      this.setState({formValid: !namEror && !urlEror && !priceEror && !remainderEror}) 
    };

    addMe = () => {      
      let Product = {nam: this.state.nam, code: Math.random(), url: this.state.url,
        price: this.state.price, remainder: this.state.remainder};      
      this.props.cbAddNewProductCard (Product);
    };

    saveMe = () => {
      let productSave = {nam: this.state.nam, code: this.state.code, url: this.state.url,
        price: this.state.price, remainder: this.state.remainder};  
      this.props.cbSaveProduct (productSave);
    };

    render() { 

      if ( this.props.workMode == 4 ){

      return (
        <div>{
          (this.props.isSelected) &&
          <div className='CARD' key={this.state.code}>
            <div className='HEADER'> {this.state.nam} </div>
            <div className='NAM'> {"название: " + this.state.nam} </div>
            <div className='PRICE'> {"цена: " + this.props.price} </div>
            <div className='REMAINDER'> {"остаток: " + this.state.remainder} </div>     
          </div>          
        } </div>
      )

      } else if ( this.props.workMode == 2 ){
        return (
          <div className='CARD' key={this.props.code}>
            <span className='HEADER'>Edit existing Product</span>
            <br/>                             
            <span>Название  </span>
            <input type='text' className='NAM' value={this.state.nam} onChange={this.namChanged}/>
            {<span className='validRed'>{this.state.namEror}</span>}
            <br/>
            <span>Цена  </span>
            <input type='text' className='PRICE' value={this.state.price} onChange={this.priceChanged}/>
            {<span className='validRed'>{this.state.priceEror}</span>}
            <br/>
            <span>Изображение  </span>
            <input type='text' className='uRL' value={this.state.url} onChange={this.urlChanged}/>
            {<span className='validRed'>{this.state.urlEror}</span>}
            <br/>
            <span>Остаток  </span>
            <input type='text' className='REMAINDER' value={this.state.remainder} onChange={this.remainderChanged}/>
            {<span className='validRed'>{this.state.remainderEror}</span>}
            <br/>
            <input type='button' disabled={!this.state.formValid} value='Save' onClick={this.saveMe} />
            <input type='button' value='Cancel' onClick={this.cancelMe} />
          </div>
        )

      } else {
        return (
          <div className='CARD'>
            <span className='HEADER'>Add new product</span>
            <br/>
            <span>Название  </span>
            <input type='text' className='NAM' value={this.state.nam} onChange={this.namChanged} /> 
            {<span className='validRed'>{this.state.namEror}</span>}
            <br/>
            <span>Цена  </span>
            <input type='text' className='PRICE' value={this.state.price} onChange={this.priceChanged}/>
            {<span className='validRed'>{this.state.priceEror}</span>}
            <br/>
            <span>Изображенрие  </span>
            <input type='text' className='uRL' value={this.state.url} onChange={this.urlChanged}/> 
            {<span className='validRed'>{this.state.urlEror}</span>}
            <br/>
            <span>Остаток  </span>
            <input type='text' className='rEMAINDER' value={this.state.remainder} onChange={this.remainderChanged}/> 
            {<span className='validRed'>{this.state.remainderEror}</span>}
            <br/>
            <input type='button' disabled={!this.state.formValid} value='Add' onClick={this.addMe} />
            <input type='button' value='Cancel' onClick={this.cancelMe} />        
          </div>
        )
      }
    }
}
export default Card;