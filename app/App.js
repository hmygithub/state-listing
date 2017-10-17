/**
 * Created by lenovo on 2017/9/20.
 */
import React from "react"

function BoilingVerdict(props){//沸腾的 判决
    if(props.celsius >= 100){
        return <p>水会烧开</p>
    }else{
        return <p>水不会烧开</p>
    }
}