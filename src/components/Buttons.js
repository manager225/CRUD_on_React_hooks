import React from 'react'

export default function Buttons({ id, changeEdit,removeItem}) {
    return <>
        <td><button onClick={()=> changeEdit(id)}
                    className='btn btn-outline-info'
        ><i className="fa fa-pencil-square-o mr-1" aria-hidden="true"/>Edit</button></td>
        <td><button onClick={()=> removeItem(id)}
                    className='btn btn-outline-danger'
        ><i className="fa fa-trash-o mr-1" aria-hidden="true"/>Del prod</button></td>
    </>

}
