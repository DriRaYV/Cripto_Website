import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

  function DataFetching() {
    const [posts, setPosts] = useState([""])
    useEffect(() => {
        axios.get('https://musicapig.herokuapp.com/coins')
            .then(res => {
                const resp = res.data
                const o = resp.map(element => element)
                setPosts(o[0].price)
            })
    })

function ressss (){
    return posts
}
    return (
        <div>

            {
            ressss()
            }
        </div>
    )
}

export default DataFetching 