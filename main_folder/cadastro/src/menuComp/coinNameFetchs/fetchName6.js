import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

function DataFetchingName6() {
    const [names6, Setnames6] = useState([""])
    useEffect(() => {
        axios.get('https://musicapig.herokuapp.com/coins')
            .then(res => {
                const resp = res.data
                const o = resp.map(element => element)
                Setnames6(o[5].name)
            })
    })

function name1 (){
    return names6
}
    return (
        <div>

            {
            name1()
            }
        </div>
    )
}

export default DataFetchingName6