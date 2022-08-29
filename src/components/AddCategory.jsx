import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event)=>{    
    setInputValue(event.target.value);
  }

  const onSubmit = (event)=>{
    event.preventDefault();
    if(inputValue.trim().length <=1) return;    
    //onAddCategory(categories => [inputValue, ...categories])    
    onNewCategory(inputValue.trim())
    setInputValue('');
    
  }
  return (
    <form onSubmit={(event) => onSubmit(event)}>
        <input 
            type="text"
            name=""
            id=""
            value={inputValue}
            placeholder="Buscar gifs"
            onChange={onInputChange}
        
        />
    </form>
  )
}
