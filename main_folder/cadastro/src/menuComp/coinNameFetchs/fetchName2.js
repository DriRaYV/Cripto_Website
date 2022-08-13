import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

function DataFetchingName() {
    const [names2, Setnames2] = useState([0])
    useEffect(() => {
        axios.get('https://musicapig.herokuapp.com/coins')
            .then(res => {
                const resp = res.data
                const o = resp.map(element => element)
                Setnames2(o[1].name)
            })
    })

function name2 (){
    return names2
}
    return (
        <div>

            {
            name2()
            }
        </div>
    )
}

export default DataFetchingName 