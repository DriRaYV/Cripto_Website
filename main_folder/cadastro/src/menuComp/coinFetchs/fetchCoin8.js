import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

function DataFetching8() {
    const [moeda7, setMoeda7] = useState([])

    useEffect(() => {
        axios.get('https://musicapig.herokuapp.com/coins')
            .then(res => {
                const resp = res.data
                const o = resp.map(element => element)
                setMoeda7(o[7].price)
                console.log(res)
            })
    })

function ressss8(){
    return moeda7
}
    return (
        <div>

            {
            ressss8()
            }
        </div>
    )
}

export default DataFetching8