import React, { useState } from 'react';
import dayjs from "dayjs";
import { ItemPayload, ItemStatus } from "../interface/ItemPayload";

export default ({saveItem}) => {

    const [item, setItem] = useState("React hooks man");

    const saveForm = (event: any) => {
        event.preventDefault();
        const now = dayjs();
        const itemPayload: ItemPayload = {
            id: now.toISOString(),
            createdDate: now.format(),
            lastUpdatedDate: now.format(),
            status: ItemStatus.NotStarted,
            type: "ToDo",
            text: item
        }
        saveItem(itemPayload);
    }

    return (
        <>
            <form onSubmit={saveForm}>
                <input 
                    type="text"
                    value={item}
                    onChange={(event => {setItem(event.target.value)})}>
                </input>

                <button type="submit">Save</button>
            </form>
        </>
    )
}