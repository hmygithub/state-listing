/**
 * Created by lenovo on 2017/10/17.
 */
import React from "react"

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}
class TemperatureInput extends React.Component{
    //���캯��
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
        const temperature = this.state.temperature
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

function BoilingVerdict(props){//���ڵ� �о�
    if(props.celsius >= 100){
        return <p>ˮ���տ�</p>
    }else{
        return <p>ˮ�����տ�</p>
    }
}

//���Ⱪ¶
export default TemperatureInput