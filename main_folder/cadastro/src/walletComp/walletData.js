import React from "react";

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
        fetch(//!URL_API*/,
        {
            method:"post",
            body:{
                token:sessionStorage.getItem('token')
            }
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
                    <img src={item.iconUrl}/>
                    <p>{item.coinName}: {item.amount}</p>
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