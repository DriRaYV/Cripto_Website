import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

function DataFetchingName4() {
    const [names4, Setnames4] = useState([""])
    useEffect(() => {
        axios.get('https://musicapig.herokuapp.com/coins')
            .then(res => {
                const resp = res.data
                const o = resp.map(element => element)
                Setnames4(o[3].name)
            })
    })

function name4(){
    return names4
}
    return (
        <div>

            {
            name4()
            }
        </div>
    )
}

export default DataFetchingName4