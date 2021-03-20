import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext()

export const NewsContextProvider =(props) => {
    const [data, setData]= useState()
    const apiKey ="d844ae197bdc423882642aa7fc1cd0f3";

    useEffect(() => {
        axios
          .get(
            `https://newsapi.org/v2/everything?q=Apple&from=2021-02-26&sortBy=popularity&apiKey=${apiKey}`
          )
          .then((response) => setData(response.data))
          .catch((error) => console.log(error));
      }, []);
    
      return (
        <NewsContext.Provider value={{ data }}>
          {props.children}
        </NewsContext.Provider>
      );
    };