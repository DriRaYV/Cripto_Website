import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

function DataFetching2() {
    const [moeda1, setMoeda1 ] = useState([])

    useEffect(() => {
        axios.get('https://musicapig.herokuapp.com/coins')
            .then(res => {
                const resp = res.data
                const o = resp.map(element => element)
                setMoeda1(o[1].price)
                console.log(res)
            })
    })

function ressss2 (){
    return moeda1
}
    return (
        <div>

            {
            ressss2()
            }
        </div>
    )
}

export default DataFetching2