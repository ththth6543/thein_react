import React from 'react';
import MyButton from "./MyButton";

function MyApp({props}) {
    return (
        <div>
            <p>Hello world {props}</p>
            <MyButton/>
        </div>
    );
}

export default MyApp;