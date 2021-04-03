import React, {useState} from 'react'
import {RenderUser} from './components/RenderUser'
import {Users} from './data'
import './App.css'


 export const App =()=> {
   const [age, setAge] = useState('24')

   const renderAge = () => {
     switch(age) {

      //  1, render 
      case '18':
        let arr1 = Users.filter((el)=> {
          return el.age <= '18' 
        })
        return arr1.map((el, id) => {
          return <RenderUser Users={el} key={id}/>
        })

        //  2, render 

        case '24':
        let arr2 = Users.filter((el)=> {
          return el.age > '18' && el.age < '24' ; 
        })
        return arr2.map((el, id) => {
          return <RenderUser Users={el} key={id}/>
        })
        
        // 3, render 
        case '25':
        let arr3 = Users.filter((el)=> {
          return el.age > '25' 
        })
        return arr3.map((el, id) => {
          return <RenderUser Users={el} key={id}/>
        })

        // 4, render 

        case '29':
        let arr4 = Users.filter((el)=> {
          return el.age <= '29' 
        })
        return arr4.map((el, id) => {
          return <RenderUser Users={el} key={id}/>
        });

        default:
          return ''
     }
   }







  return (
    <div className="App">
      <div className="btn-group">
        <button 
        className="btn"
          onClick={()=> setAge('18')}
          style={
            age > '18' ? {backgroundColor: 'green'}
            : {backgroundColor: 'none'}
          } 
        >
          teenagers
        </button>

        <button
        className="btn"
          onClick={()=> setAge('24')}
          style={
            age > '18' && age > '24' ? {backgroundColor: 'yellow'}
            : {backgroundColor: 'none'}
          }
        >
          mid.age 
        </button>
        <button
        className="btn"
        onClick={()=> setAge('25')}
        style={
          age >= '25' ? {backgroundColor: 'purple'}
          : {backgroundColor: 'none'}
        }
        >
          more 25
        </button>

        <button
        className="btn"
        onClick={()=> setAge('29')}
        style={
          age < '29' ? {backgroundColor: 'aquin'}
          : {backgroundColor: 'none'}
        }
        >
          all users
        </button>
      </div>

      <div className="block">
      {
      
        renderAge()
      }
      </div>
    </div>
  );
}


