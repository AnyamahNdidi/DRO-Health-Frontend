import axios from "axios"
import React, { useState } from "react"
import DetailCharacter from "./DetailCharacter"
import {myCha} from "./interface"

interface iCharacter {
    characters?: string[]
}

const Character24:React.FC<iCharacter> = ({characters}) => {
     return (
        <div>
            {
                characters?.map((props,i) => (
                    <DetailCharacter key={i} character={props} />
                ))
            }
        </div>
    )
}

export default Character24