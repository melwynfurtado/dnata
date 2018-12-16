import 'react-hot-loader/patch'
import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'
import App from './components/App'
import httpClient from 'httpClient'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component httpClient={httpClient} />
    </AppContainer>,
    document.getElementById('hotelsApp')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => render(App))
}