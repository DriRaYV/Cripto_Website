import React from "react";
import './wallet.css'

class DisplayTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        this.callAPI = this.callAPI.bind(this)

    }
    callAPI() {
        fetch("https://musicapig.herokuapp.com/wallet",
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "post",
                body: JSON.stringify({
                    token: sessionStorage.getItem("token")
                })
            }
        ).then(
            (response) => response.json()
        ).then((data) => {
            this.setState({
                list: data
            })
        })
    }

    render() {
        if (!this.state?.list?.buying) this.callAPI()
        if (this.state?.list?.buying) {
            let S = this.state.list
            function makediv() {
                let bcoin = S.buying[k]
                let i = 0;
                return (
                    <section>
                        <p key={i++}>{bcoin.fk_coin}: {bcoin.quantity}</p>

                    </section>
                )
            }
            var table = [];
            function T() {
                console.log(table)
                return table
            }
            for (var k = 0; k < this.state.list.buying.length; k++) {
                table.push(makediv());
            }
            return (
                <>
                    <div>
                        {T()}
                    </div>
                    <br />
                </>
            )

        }
    }
}



export { DisplayTable }
