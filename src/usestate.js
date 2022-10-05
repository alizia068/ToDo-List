import { useState } from "react";
import ReactDOM from 'react-dom/client';
import ShowTodo from "./ShowTodo";

function MyForm() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = task;
    if(!task){

    }else{
      setData([...data,newData])

    setTask('')

    }
    
  }
  console.log("valuse : ",data,task)
  const deleteitem = (a)=>{
    const finalData = data.filter((CurEle,index)=>{
      return CurEle !=a;
     } )
     setData(finalData)
   }
  return (
    <div className="maindiv">
<form onSubmit={handleSubmit} className="input-group">
      {/* <label>Enter your name: */}
        <input placeholder="Enter item name"
          type="text" 
          value={task}
          className='form-control'
          onChange={(e) =>{setTask(e.target.value)}}
        />
      {/* </label> */}
      <input type="submit" className="btn btn-primary" />
    </form>
     {
         data.map((value,index)=>
        <ShowTodo
        key={index}
        // id={index}
        value={value}
        onSelect={deleteitem}
        />)
    }
    </div>
    
  )
}
export default MyForm;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
