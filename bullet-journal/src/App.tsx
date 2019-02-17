import React, { Component, useState, useEffect } from "react";
import NewItem from "./component/NewItem";
import "./App.css";
import { ItemPayload } from "./interface/ItemPayload";

const App = () => {
    const appTitle = "<Bullet Journal/>";
    const [items, setItems] = useState<Array<ItemPayload>>([]);

    useEffect(() => {
        const journals = Array(localStorage.length)
            .map((v, i) => localStorage.key(i))
            .filter(k => k !== null && k.includes("bj_"))
            .map((k) => k !== null ? JSON.parse(localStorage.getItem(k)) : null)
            .filter(v => v !== null);
        setItems(journals);
    });

    return (
        <div className="App">
            <h1>{appTitle}</h1>
            {items.map(item => (
                <div>{item}</div>
            ))}
            <NewItem />
        </div>
    );
};

export default App;
