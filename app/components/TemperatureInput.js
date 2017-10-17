/**
 * Created by lenovo on 2017/10/17.
 */
import React from "react"

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

// 相当于 view组件
class TemperatureInput extends React.Component{
    //构造函数
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(e){
        //this.setState({temperature: e.target.value})
        this.props.onTemperatureChange(e.target.value)
    }
    render(){
        const temperature = this.props.temperature
        const scale = this.props.scale
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        )
    }
}


//向外暴露
export default TemperatureInput