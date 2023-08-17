import React from 'react';
import PropTypes from 'prop-types';
import './Information.css';


class Information extends React.Component {

    static propTypes = {
        product: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            price: PropTypes.number,
            count: PropTypes.number,
            url: PropTypes.string,
        })
    };

    render() {
        return (
            <div className='information'>
                <p>Info</p>
                <img src={this.props.product.url} alt="" />
                <div>
                    {`Name: ${this.props.product.name}`}
                </div>
                <div>
                    {`Price: ${this.props.product.price} eur`}
                </div>
                <div>
                    {`Count: ${this.props.product.count} item`}
                </div>
            </div>
        )
    }
}

export default Information;
