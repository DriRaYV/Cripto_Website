import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

function DataFetching5() {
    const [moeda4, setMoeda4] = useState([])

    useEffect(() => {
        axios.get('https://musicapig.herokuapp.com/coins')
            .then(res => {
                const resp = res.data
                const o = resp.map(element => element)
                setMoeda4(o[4].price)
                console.log(res)
            })
    })

function ressss5(){
    return moeda4
}
    return (
        <div>

            {
            ressss5()
            }
        </div>
    )
}

export default DataFetching5