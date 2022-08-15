import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

function DataFetchingName9() {
    const [names9, Setnames9] = useState([""])
    useEffect(() => {
        axios.get('https://musicapig.herokuapp.com/coins')
            .then(res => {
                const resp = res.data
                const o = resp.map(element => element)
                Setnames9(o[8].name)
            })
    })

function name9 (){
    return names9
}
    return (
        <div>

            {
            name9()
            }
        </div>
    )
}

export default DataFetchingName9