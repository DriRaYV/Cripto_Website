import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

function DataFetchingName5() {
    const [names5, Setnames5] = useState([0])
    useEffect(() => {
        axios.get('https://musicapig.herokuapp.com/coins')
            .then(res => {
                const resp = res.data
                const o = resp.map(element => element)
                Setnames5(o[4].name)
            })
    })

function name5(){
    return names5
}
    return (
        <div>

            {
            name5()
            }
        </div>
    )
}

export default DataFetchingName5