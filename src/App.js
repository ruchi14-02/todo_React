import React, { useState } from 'react'
import './style.css'
import ToDoLists from './todo'

function App() {
  //take value from input field
  const [inputList, setInputList] = useState("Buy me")
  const [items, setItems] = useState([])

  //jo bhi value input field me likhengy vo value niche llist me set ho jaegi
  const itemEvent = (event) => {
    setInputList(event.target.value)
  }

  // array me jitne b old items hai vo new k sath hi rhengy aur array bananengy
  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    // Kisi bhi value ko input field me value add karne ke baad wapas se input field empty hota hai isse
    setInputList("")
  }

// yaha par jo id hI VO VAHA SE AA RAHI HAI TODOLIST K props.id se
  const deleteItem = (id) => {
    console.log('delete')
    setItems((oldItems) => {
      //arrelement - jis value ko delete krna hai uski current value kya hai , index = us array ka index number kya hai
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      })

    })
  }

  return (

    <center>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDO List</h1>
          <center>
            <input type="text" placeholder='add a items' value={inputList} onChange={itemEvent} />
            <button onClick={listOfItem}>+</button>
          </center>


          <ol className='style_list'>
            {/* <li>{inputList}</li> */}
            {/* jaise jaise value add krengy list me array k form me save hote jaaega vo value */}
            {
              items.map((itemValue, index) => {
                return <ToDoLists
                  key={index}
                  id={index}
                  onSelect={deleteItem}
                  test={itemValue} />
              })
            }

          </ol>
        </div>
      </div>
    </center>

  )
}

export default App