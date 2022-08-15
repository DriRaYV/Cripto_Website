import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

function DataFetching3() {
    const [moeda2, setMoeda2 ] = useState([""])

    useEffect(() => {
        axios.get('https://musicapig.herokuapp.com/coins')
            .then(res => {
                const resp = res.data
                const o = resp.map(element => element)
                setMoeda2(o[2].price)
                console.log(res)
            })
    })

function ressss2 (){
    return moeda2
}
    return (
        <div>

            {
            ressss2()
            }
        </div>
    )
}

export default DataFetching3