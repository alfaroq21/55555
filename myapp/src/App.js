import React, { Component } from "react";
import './App.css';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            src: "https://i0.wp.com/www.fnon7.com/wp-content/uploads/2019/02/%D9%85%D9%81%D8%AA%D8%A7%D8%AD-1.jpg",
            counter: 0

        }
    }







    increse = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    decrese = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    muftah = () => {
        this.setState({
            counter: 0
        })

    }

    decrese = () => {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            });
        }
    }


    render() {
        return (
            <div className="vv">
                <h1>مستر كـي , أو الرجل المفتاح شخصية هـزليه خارقة </h1>

                <p> {this.state.counter} </p>

                <img className="kk" src={this.state.src} alt="img in src" />

                <div className="mn">
                    <button onClick={this.increse}  >+</button>
                    <button onClick={this.decrese}>-</button>
                    <button onClick={this.muftah}>reset</button>
                </div>


            </div>
        )
    }






}
