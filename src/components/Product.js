import React from 'react'
import Buttons from "./Buttons";

export default function Product({id, name, catg, cost, removeItem, changeEdit}){
    return <tr>
        <td>{name}</td>
        <td>{catg}</td>
        <td>{cost}</td>
        <Buttons id={id} changeEdit={changeEdit} removeItem={removeItem}/>
    </tr>
}
