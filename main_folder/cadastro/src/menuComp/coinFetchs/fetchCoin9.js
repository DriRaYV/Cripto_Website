import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

function DataFetching9() {
    const [moeda8, setMoeda8] = useState([""])

    useEffect(() => {
        axios.get('https://musicapig.herokuapp.com/coins')
            .then(res => {
                const resp = res.data
                const o = resp.map(element => element)
                setMoeda8(o[8].price)
                console.log(res)
            })
    })

function ressss9(){
    return moeda8
}
    return (
        <div>

            {
            ressss9()
            }
        </div>
    )
}

export default DataFetching9