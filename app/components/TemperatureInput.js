/**
 * Created by lenovo on 2017/10/17.
 */
import React from "react"

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}
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
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </fieldset>
        )
    }
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>水会烧开</p>;
    }
    return <p>水不会烧开</p>;
}

// 将华氏温度转为摄氏温度
function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9
}

// 将摄氏温度转为华氏温度
function tofahrenheit(celsius){
    return celsius *  9 / 5 + 32
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    //转换后的结果
    const output = convert(input);
    //Math.round() 对值四舍五入
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

//向外暴露
export default TemperatureInput