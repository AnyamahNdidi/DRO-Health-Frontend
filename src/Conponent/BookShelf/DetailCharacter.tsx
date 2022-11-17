import axios from "axios"
import React, { useEffect, useState } from "react"
import {myCha} from "./interface"
import {NavLink} from "react-router-dom"

interface iCharacter {
    character?: string
}

interface iDetail {
    name?: string
}

const DetailCharacter:React.FC<iCharacter> = ({character}) => {

    const [char, setChar] = useState<iDetail>({})

    const fetchData = async() => {
        await axios.get(`${character}`).then(res => {
            console.log("getting single Data: ", res)
            setChar(res.data)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {
                char?.name
            }
        </div>
    )
}

export default DetailCharacter