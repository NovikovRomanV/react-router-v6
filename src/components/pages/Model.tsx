import React from "react";
import {adidasArr, AdidasItemType} from './AdidasItem'
import {useParams} from "react-router-dom";
import {pumaArr, PumaItemType} from "./PumaItem";

type ModelObjType = {
    [key: string]: AdidasItemType[] | PumaItemType[]
}

const modelObj: ModelObjType = {
    adidas: adidasArr,
    puma: pumaArr,
}

export const Model = () => {
    let {model, id} = useParams()
    // let modelShuth = model && modelObj[model].find((el) => el.id === Number(id))
    const modelShuth = modelObj[`${model}`].find(el => el.id === Number(id))

    console.log(model)
    console.log(modelShuth)
    return (<div>
            <div>Model</div>
            {!modelShuth && <p>Такой модели нету</p>}
            <img
                src={modelShuth && modelShuth.picture}
                style={{blockSize: '255px', marginLeft: '10px'}}
            />
        </div>
    )
}