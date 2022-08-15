import React from "react";
import { get } from "react-hook-form";

class DisplayTable extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
        this.callAPI = this.callAPI.bind(this)
        this.callAPI()
    }

    callAPI(){
        fetch('https://musicapig.herokuapp.com/wallet',
        {
            headers: {
                'Content-Type': 'application/json'
              },
            method:"post",
            body:JSON.stringify({
                token:sessionStorage.getItem("token")
            })
        }
        ).then(
            (response)=> response.json()
        ).then((data)=>{
            this.setState({
                list:data.data
            })
        })
    }

    render(){
        let tb_data = this.state.list.map((item)=>{
            return(
                <div>
                    <p>{item.fk_coin}: {item.quantity}</p>
                </div>
            )
        })
        return(
            <div>
                {tb_data}
            </div>
        )
    }
}

export { DisplayTable };