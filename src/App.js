import React, {useState} from 'react'
import uuid from 'react-uuid'
import './App.css';
import Products from "./components/Products";


function id(){
    return uuid()
}

const initProds = [
    {id: id(), name: 'prod1', catg: 'catg1', cost: 100},
    {id: id(), name: 'prod2', catg: 'catg2', cost: 200},
    {id: id(), name: 'prod3', catg: 'catg3', cost: 300},
];

function getInitObj(){
    return {
        id: id(),
        name: '',
        catg: '',
        cost: ''

    }
}

export default function App(){
    const [prods, setProds] = useState(initProds)
    const [edit, setEdit] = useState(null)
    const [obj, setObj] = useState(getInitObj())

    function getValue(prop){
        if (edit) {
            return prods.reduce((res, prod)=>
                prod.id === edit ? prod[prop] : res, '')
        } else {
            return obj[prop]
        }
    }

    function changeItem(prop, event){
        if (edit){
            setProds(prods.map(prod => prod.id === edit ? {...prod, [prop]: event.target.value} : prod))
        } else {
            setObj({...obj, [prop]: event.target.value})
        }
    }

    function addItem () {
        if (edit){
            setEdit(null)
        } else {
            setProds([...prods, obj])
            setObj(getInitObj())
        }
    }

    function removeItem(id){
        setProds(prods.filter(prod => prod.id !== id))
    }

    function changeEdit(id){
        setEdit(id)
    }

    return <Products prodsArr={prods}
                     removeItem={removeItem}
                     changeEdit = {changeEdit}
                     getValue={getValue}
                     changeItem={changeItem}
                     addItem={addItem}
             />

}
























//crud массива объектов редактирование и добавление раздельно
// function getInitObj(){
//     return {
//         id: id(),
//         name: '',
//         catg: '',
//         cost: ''
//
//     }
// }
// export default function App() {
//     const [prods, setProds] = useState(initProds)
//
//     //это второй подход к добавлению, у каждого инпута один общий стейт
//     const [obj, setObj] = useState(getInitObj())
//
//     const [edit, setEdit] = useState(null)
//
//     // это первый подход к добавлению, у каждого инпута свой стейт
//     // const [value1, setValue1] = useState('')
//     // const [value2, setValue2] = useState('')
//     // const [value3, setValue3] = useState('')
//
//     function removeItem(id){
//         setProds(prods.filter(prod => prod.id !== id))
//     }
//
//     function changeItem(prop, event){
//         setObj({...obj, [prop]: event.target.value})
//     }
//
//     function addItem(){
//         setProds([...prods, obj])
//         setObj(getInitObj())
//     }
//
//     //это второй подход к добавлению, у каждого инпута один общий стейт
//     function getValue(prop){
//         return prods.reduce((res, prod)=>{
//             if (prod.id === edit){
//                 return prod[prop]
//             } else {
//                 return res
//             }
//         }, '')
//     }
//
//     function editItem(prop, event){
//         setProds(prods.map(prod =>{
//             if (prod.id === edit){
//                 return {...prod, [prop]: event.target.value}
//             } else {
//                 return prod
//             }
//         }))
//     }
//
//     // это первый подход к добавлению, у каждого инпута свой стейт
//     // function addItem(){
//     //     let newObj = {
//     //         id: id(),
//     //         name: value1,
//     //         catg: value2,
//     //         cost: value3
//     //     }
//     //     setProds([...prods, newObj])
//     //     setValue1('')
//     //     setValue2('')
//     //     setValue3('')
//     // }
//
//     const result = prods.map(prod =>{
//         return <tr key={prod.id}>
//             <td>{prod.name}</td>
//             <td>{prod.catg}</td>
//             <td>{prod.cost}</td>
//             <td>
//                 <button onClick={()=> removeItem(prod.id)}>Del prod</button>
//                 <button onClick={()=> setEdit(prod.id)}>Edit prod</button>
//             </td>
//         </tr>
//     })
//
//
//
//     return <div>
//         <table>
//             <thead>
//             <tr>
//                 <th>name</th>
//                 <th>catg</th>
//                 <th>cost</th>
//             </tr>
//             </thead>
//             <tbody>
//             {result}
//             </tbody>
//         </table>
//
//         //это второй подход к добавлению, у каждого инпута один общий стейт
//         <p>Добавление</p>
//         <input value={obj.name}
//                placeholder={'name'}
//                onChange={event => changeItem('name', event)}
//         />
//         <input value={obj.catg}
//                placeholder={'catg'}
//                onChange={event => changeItem('catg', event)}
//         />
//         <input value={obj.cost}
//                placeholder={'cost'}
//                onChange={event => changeItem('cost', event)}
//         />
//         <button onClick={addItem}>Save</button>
//
//         <p>Редактирование</p>
//
//         <input value={getValue('name')}
//                placeholder={'name'}
//                onChange={event => editItem('name', event)}
//         />
//         <input value={getValue('catg')}
//                placeholder={'catg'}
//                onChange={event => editItem('catg', event)}
//         />
//         <input value={getValue('cost')}
//                placeholder={'cost'}
//                onChange={event => editItem('cost', event)}
//         />
//         <button onClick={() => setEdit(null)}>Save</button>
//
//         // это первый подход к добавлению, у каждого инпута свой стейт
//         {/*<input value={value1}*/}
//         {/*       onChange={event => setValue1(event.target.value)}*/}
//         {/*       placeholder= 'name'*/}
//         {/*/>*/}
//
//         {/*<input value={value2}*/}
//         {/*       onChange={event => setValue2(event.target.value)}*/}
//         {/*       placeholder= 'catg'*/}
//         {/*/>*/}
//
//         {/*<input value={value3}*/}
//         {/*       onChange={event => setValue3(event.target.value)}*/}
//         {/*       placeholder= 'cost'*/}
//         {/*/>*/}
//         {/*<button onClick={addItem}>Save</button>*/}
//
//     </div>
// }




































// const initNotes = [
//     {
//         id: 'GYi9G_uC4gBF1e2SixDvu',
//         prop1: 'value11',
//         prop2: 'value12',
//         prop3: 'value13',
//     },
//     {
//         id: 'IWSpfBPSV3SXgRF87uO74',
//         prop1: 'value21',
//         prop2: 'value22',
//         prop3: 'value23',
//     },
//     {
//         id: 'JAmjRlfQT8rLTm5tG2m1L',
//         prop1: 'value31',
//         prop2: 'value32',
//         prop3: 'value33',
//     },
// ];
//
// export default function App(){
//     const [notes, setNotes] = useState(initNotes)
//     // const [value, setValue] = useState('')
//
//     function delItem(){
//         const id= 'JAmjRlfQT8rLTm5tG2m1L'
//         setNotes(notes.filter(note => note.id !== id))
//     }
//
//     function addItem(){
//         const newElem = {
//             id: 'GMNCZnFT4rbBP6cirA0Ha',
//             prop1: 'value41',
//             prop2: 'value42',
//             prop3: 'value43',
//         };
//         setNotes([...notes, newElem])
//     }
//
//     function changeItem(){
//         const data = {
//             id: 'IWSpfBPSV3SXgRF87uO74',
//             prop1: 'value777 !',
//             prop2: 'value888 !',
//             prop3: 'value999 !',
//         };
//         setNotes(notes.map(note => note.id === data.id ? data : note))
//     }
//
//     function changeProp(){
//         const id = 'JAmjRlfQT8rLTm5tG2m1L';
//         const value = 'I am change'
//         const prop1 = 'prop2';
//         const prop2 = 'prop3';
//         setNotes(notes.map(note =>{
//             if (note.id === id){
//                 return {...note, [prop1]: value, [prop2]: value}
//             } else {
//                 return note
//             }
//         }))
//     }
//
//
//     // function getPropItem(){
//     //     const id = 'GYi9G_uC4gBF1e2SixDvu';
//     //     const prop = 'prop2';
//     //     const res = notes.reduce((res, note) =>{
//     //         if (note.id === id){
//     //             return note[prop]
//     //         } else {
//     //             return res
//     //         }
//     //     }, {})
//     //     setValue(res)
//     // }
//
//
//
//
//     const id = 'GYi9G_uC4gBF1e2SixDvu';
//     const res = notes.find(note => note.id === id)
//     const item = <p>
//             <span>{res.prop1}</span><br/>
//             <span>{res.prop2}</span><br/>
//             <span>{res.prop3}</span>
//         </p>
//
//
//     const result = notes.map(note => {
//         return <p key={note.id}>
//             <span>{note.prop1}</span><br/>
//             <span>{note.prop2}</span><br/>
//             <span>{note.prop3}</span>
//         </p>
//     })
//
//
//     return <div>
//         {result}
//         <button onClick={delItem}>Delete</button>
//         <button onClick={addItem}>Add</button>
//         <button onClick={changeItem}>Change</button>
//         <button onClick={changeProp}>Change prop</button>
//         {/*<button onClick={getItem}>Get item</button>*/}
//         {/*<button onClick={getPropItem}>Get prop item</button>*/}
//         {/*<p>{value}</p>*/}
//         {item}
//     </div>
//
// }
