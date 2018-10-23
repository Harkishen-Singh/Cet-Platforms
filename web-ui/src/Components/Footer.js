import React, { Component } from 'react'
import './css/style_gen.css';
import {BrowserRouter as Link} from 'react-router-dom'

export default class FooeterTag extends Component {

    render() {
        const style = {
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            backgroundColor: '#64B5F6',
            color: 'white',
            textAlign: 'center',
            lineHeight:'30px'
        }
        return (
            <footer style={style}>CET-Platforms @All rights reserved</footer>

        );
    }
}

