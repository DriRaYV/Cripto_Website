import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

function DataFetching6() {
    const [moeda5, setMoeda5] = useState([])

    useEffect(() => {
        axios.get('https://musicapig.herokuapp.com/coins')
            .then(res => {
                const resp = res.data
                const o = resp.map(element => element)
                setMoeda5(o[5].price)
                console.log(res)
            })
        
    })

function ressss6(){
    return moeda5
}
    return (
        <div>

            {
            ressss6()
            }
        </div>
    )
}

export default DataFetching6