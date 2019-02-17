import React, { Component, useState, useEffect } from "react";
import NewItem from "./component/NewItem";
import "./App.css";
import { ItemPayload } from "./interface/ItemPayload";

const App = () => {
    const prefix = "bj_";
    const appTitle = "<Bullet Journal/>";
    const [items, setItems] = useState<Array<ItemPayload>>([]);
    const saveItem = (item: ItemPayload) => {
      localStorage.setItem(`${prefix}${item.id}`, JSON.stringify(item));
      setItems([...items, item]);
    }

    useEffect(() => {
        // const journals = Array(localStorage.length)
        //     .map((v, i) => localStorage.key(i))
        //     .filter(k => k !== null && k.includes(prefix))
        //     .map((k) => k !== null ? JSON.parse(localStorage.getItem(k)) : null)
        //     .filter(v => v !== null);
        // setItems(journals);
    });


    return (
        <div className="App">
            <h1>{appTitle}</h1>
            {items.map(item => (
                <div key={item.id}>{item.text}</div>
            ))}
            <NewItem saveItem={saveItem}/>
        </div>
    );
};

export default App;
