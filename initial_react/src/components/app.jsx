import React from "react";
import {Button} from 'core-component/button';


export const App =({header})=>{
    return(
        <section>
            <h1>{header}</h1>
            <Button/>
        </section>
    )
}