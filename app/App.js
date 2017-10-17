/**
 * Created by lenovo on 2017/9/20.
 */
import React from "react"
import TemperatureInput from './components/TemperatureInput.js'

//相当于 Container Component
class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            temperature: '',
            scale: 'c'
        }
        this.handleCelsiusChange=this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange=this.handleFahrenheitChange.bind(this)
    }

    handleCelsiusChange(temperature){
        this.setState({
            temperature,
            scale: 'c'
        })
    }

    handleFahrenheitChange(temperature){
        this.setState({
            temperature,
            scale: 'f'
        })
    }
    render(){
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius): temperature
        const fahrenheit = scale === 'c'? tryConvert(temperature,toFahrenheit): temperature
        return (
            <div>
                <TemperatureInput scale="c"
                                  temperature = {celsius}
                                  onTemperatureChange = {this.handleCelsiusChange}
                    />
                <TemperatureInput scale="f"
                                  temperature = {fahrenheit}
                                  onTemperatureChange = {this.handleFahrenheitChange}
                    />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
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
function toFahrenheit(celsius){
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

export default Calculator