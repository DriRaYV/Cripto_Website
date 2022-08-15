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
        fetch("https://musicapig.herokuapp.com/wallet",
        {
            method:"post",
            body:JSON.stringify({
                token:"eyJhbGciOiJIUzI1NiJ9.cGFwYWk.oCuDwte_iHqfKJlvKhIJCaa1kHw0kwab7rm2r2-3TRM"
            })
        }
        ).then(
            (response)=> response.json()
        ).then((data)=>{
            this.state = {
                list:data.data
            }
        })
    }

    render(){
        let tb_data = this.state.list.map((item)=>{
            return(
                <div>
                    <img src={item.iconUrl} alt='imagem'/>
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

export {DisplayTable}