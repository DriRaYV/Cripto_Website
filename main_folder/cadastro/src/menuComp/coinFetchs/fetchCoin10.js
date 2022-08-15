import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

function DataFetching10() {
    const [moeda9, setMoeda9] = useState([""])

    useEffect(() => {
        axios.get('https://musicapig.herokuapp.com/coins')
            .then(res => {
                const resp = res.data
                const o = resp.map(element => element)
                setMoeda9(o[9].price)
                console.log(res)
            })
        })

function ressss10(){
    return moeda9
}
    return (
        <div>

            {
            ressss10()
            }
        </div>
    )
}

export default DataFetching10