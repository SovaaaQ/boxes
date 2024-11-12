import React from "react";
import Select from "react-select"
import mailBoxModel from "../model/mailBoxModel";



const ChoiceModel = () => {
    return(
        
        <>
        <label>
            Выберите модель почтового ящика
            <div className="divselect">
            <Select options={mailBoxModel}/>
            </div>
        </label>
        </>
    )
}

export default ChoiceModel