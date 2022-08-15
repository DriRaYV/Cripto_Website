import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

function DataFetching7() {
    const [moeda6, setMoeda6] = useState([""])

    useEffect(() => {
        axios.get('https://musicapig.herokuapp.com/coins')
            .then(res => {
                const resp = res.data
                const o = resp.map(element => element)
                setMoeda6(o[6].price)
                console.log(res)
            })
    })

function ressss7(){
    return moeda6
}
    return (
        <div>

            {
            ressss7()
            }
        </div>
    )
}

export default DataFetching7