import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

function DataFetchingName10() {
    const [names10, Setnames10] = useState([""])
    useEffect(() => {
        axios.get('https://musicapig.herokuapp.com/coins')
            .then(res => {
                const resp = res.data
                const o = resp.map(element => element)
                Setnames10(o[9].name)
            })
    })

function name10(){
    return names10
}
    return (
        <div>

            {
            name10()
            }
        </div>
    )
}

export default DataFetchingName10