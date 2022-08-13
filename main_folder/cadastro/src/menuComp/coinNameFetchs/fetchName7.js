import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

function DataFetchingName7() {
    const [names7, Setnames7] = useState([0])
    useEffect(() => {
        axios.get('https://musicapig.herokuapp.com/coins')
            .then(res => {
                const resp = res.data
                const o = resp.map(element => element)
                Setnames7(o[6].name)
            })
    })

function name7 (){
    return names7
}
    return (
        <div>

            {
            name7()
            }
        </div>
    )
}

export default DataFetchingName7