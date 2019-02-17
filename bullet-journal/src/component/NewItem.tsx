import React, { useState } from 'react';

export default () => {

    const [item, setItem] = useState("React hooks man");

    const saveForm = (event: any) => {
        event.preventDefault();
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