import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

function DataFetchingName8() {
    const [names8, Setnames8] = useState([""])
    useEffect(() => {
        axios.get('https://musicapig.herokuapp.com/coins')
            .then(res => {
                const resp = res.data
                const o = resp.map(element => element)
                Setnames8(o[7].name)
            })
    })

function name8(){
    return names8
}
    return (
        <div>

            {
            name8()
            }
        </div>
    )
}

export default DataFetchingName8