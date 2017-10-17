/**
 * Created by lenovo on 2017/10/17.
 */
import React from "react"

class TemperatureInput extends React.Component{
    //构造函数
    constructor(props){
        super(props)
        this.state = {
            temperature:''
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({temperature: e.target.value})
    }
    render(){
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>输入一个摄氏温度</legend>
                <input value={temperature} onChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </fieldset>
        )
    }
}

function BoilingVerdict(props){//沸腾的 判决
    if(props.celsius >= 100){
        return <p>水会烧开</p>
    }else{
        return <p>水不会烧开</p>
    }
}

//向外暴露
export default TemperatureInput