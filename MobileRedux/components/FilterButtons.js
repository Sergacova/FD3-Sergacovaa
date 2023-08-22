import React from 'react';
import { clientsEvents } from './events';

import '../styles/FilterButtons.css';

class FilterButtons extends React.PureComponent {
    render() {
        console.log('FilterButtons render');

        return (
            <div>
                <button className='FilterButtons' onClick={() => clientsEvents.emit('EFilterAll')}>Все</button>
                <button className='FilterButtons' onClick={() => clientsEvents.emit('EFilterActive')}>Активные</button>
                <button className='FilterButtons' onClick={() => clientsEvents.emit('EFilterBlocked')}>Заблокированные</button>
            </div>
        )
    }
}

export default FilterButtons;