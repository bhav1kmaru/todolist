import React from "react";

function TodoItem(props){
    const {id,title,status}=props
    return(
      <div style={{border:"1px solid",width:"50%",margin:"5px auto 5px auto",padding:"10px 5px",borderRadius:"7px"}} key={id}><p>{title}{"---"}{status ?"Completed":"Pending"}</p></div>
    )
  }
  export default TodoItem;