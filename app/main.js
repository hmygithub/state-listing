/**
 * Created by lenovo on 2017/9/20.
 */
import React from 'react'
import {render} from 'react-dom'
//引入组件
import Calculator from './App.js'

//注意下面引用的名称跟上面（import 后的名称）要一致（首字母大写）
//使用、挂在组件，两个参数
render(
    <Calculator />,
    document.getElementById('app-container')
)