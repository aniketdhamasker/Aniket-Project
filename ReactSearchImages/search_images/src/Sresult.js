import React from "react";

const Sresult = (props) => {
    const image = `https://source.unsplash.com/400x200/?${props.name}`;
    return (
        <>
        <div>
        
        <img className="searchbar" src={image} alt="search"></img>
        </div>

        </>
    );
};

export default Sresult;