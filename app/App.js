/**
 * Created by lenovo on 2017/9/20.
 */
import React from "react"

class Calculator extends React.Component{

    render(){
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        )
    }
}

export default Calculator