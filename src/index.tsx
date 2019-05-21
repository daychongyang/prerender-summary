import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.css'
import App from './app'

ReactDOM.render(<App />, document.getElementById('root'))

/**
 * HMR Just For Development
 */
process.env.NODE_ENV !== 'production' && module.hot && module.hot.accept()
