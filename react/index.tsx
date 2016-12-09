import * as React from 'react'
import {render} from 'react-dom'

import {AppComponent} from './AppComponent'

const node = document.createElement('div')
document.body.appendChild(node)

render(<AppComponent />, node)


