import React from 'react'

//jab b koi new value add hogi list me ye component call ho jaega
function ToDoLists (props) {

  return (
    <>
      <div className='todo_style'>
        {/* <i class="fa fa-times" aria-hidden="true"> */}
        {/* yaha onselect k andar jo props.id pass kia hai vo ye batata hai ki jis row k data ko delte krni hai uski id kya hai */}
        <li>{props.test} <button onClick={()=>{props.onSelect(props.id)}}>  x </button> </li>
        {/* </i> */}

      </div>
    </>
  )
}

export default ToDoLists
