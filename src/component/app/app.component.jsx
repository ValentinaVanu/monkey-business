import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import { Instructions } from '../instructions'
import { Map } from '../map'
import { Monkey } from '../monkey'
import { MonkeyMenu } from '../monkey-menu'
import { MonkeyTeam } from '../monkey-team/monkey-team.component'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Map>
          <Instructions />
          <MonkeyTeam />
        </Map>
        <MonkeyMenu />
      </Provider>
    </>
  )
}
export { App }
