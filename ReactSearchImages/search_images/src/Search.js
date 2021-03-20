import React,{useState} from "react";
import Sresult from "./Sresult";

const Search = (props) =>{
    const [image, setImage]= useState("");
    const inputEvent = (event) =>{
        const data = event.target.value;
        setImage(data);
    }
    return (
        <>
        <div className="searchbar">
         <input type='text' class="search"placeholder="Search Image:" value={image} onChange={inputEvent}/>
        { image === " " ? null : <Sresult name={image}/>} 

        </div>
        
        </>
    );
};
export default Search;