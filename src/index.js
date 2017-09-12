import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './component/routes'

import './style/app.css'

render(
    <Router routes={routes} history={browserHistory} />,
    document.querySelector('#wrapper')
);