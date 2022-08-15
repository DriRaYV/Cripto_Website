import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

function DataFetchingName3() {
    const [names3, Setnames3] = useState([""])
    useEffect(() => {
        axios.get('https://musicapig.herokuapp.com/coins')
            .then(res => {
                const resp = res.data
                const o = resp.map(element => element)
                Setnames3(o[2].name)
            })
    })

function name3 (){
    return names3
}
    return (
        <div>

            {
            name3()
            }
        </div>
    )
}

export default DataFetchingName3