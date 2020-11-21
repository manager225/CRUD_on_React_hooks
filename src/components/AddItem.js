import React from 'react'

import './AddItem.css'

export default function AddItem({getValue, changeItem, addItem}) {
    return <>
        <input value={getValue('name')}
               onChange={event => changeItem('name', event)}
               className="form-control search-input mb-1"
        />
        <input value={getValue('catg')}
               onChange={event => changeItem('catg', event)}
               className="form-control search-input mb-1"
        />
        <input value={getValue('cost')}
               onChange={event => changeItem('cost', event)}
               className="form-control search-input mb-1"
        />
        <button onClick={addItem} className='btn btn-outline-success'><i className="fa fa-floppy-o mr-1" aria-hidden="true"/>Save</button>
    </>
}
