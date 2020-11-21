import React from 'react'
import Product from "./Product";
import AddItem from "./AddItem";

import './Products.css'

export default function Products({ prodsArr, removeItem, changeEdit, getValue, changeItem, addItem}){
    const result = prodsArr.map(prod =>{

        return <Product key={prod.id}
                        id={prod.id}
                        name={prod.name}
                        catg={prod.catg}
                        cost={prod.cost}
                        removeItem={removeItem}
                        changeEdit = {changeEdit} />
        })

    return <div className='container content'>
        <h2 className='mt-3 mb-3'>CRUD on React</h2>
        <table className='table'>
            <thead className="bg-primary text-light thead" >
            <tr>
                <th>Name</th>
                <th>Catg</th>
                <th>Cost</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody className='tbody'>
                {result}
            </tbody>
        </table>
        <AddItem getValue={getValue}
                 changeItem={changeItem}
                 addItem={addItem}
        />

    </div>
}
