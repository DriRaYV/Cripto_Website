import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

function DataFetchingName() {
    const [names, Setnames] = useState([""])
    useEffect(() => {
        axios.get('https://musicapig.herokuapp.com/coins')
            .then(res => {
                const resp = res.data
                const o = resp.map(element => element)
                Setnames(o[0].name)
            })
    })

function name1 (){
    return names
}
    return (
        <div>

            {
            name1()
            }
        </div>
    )
}

export default DataFetchingName