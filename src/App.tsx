import React from 'react'
import { useMachine } from '@xstate/react'
import { Machine, send } from 'xstate'

const toggleMachine = Machine({
  id: 'toggleMachine',
  initial: 'inactive',
  states: {
    inactive: {
      on: {
        TOGGLE: 'active',
      },
    },
    active: {
      on: {
        TOGGLE: 'inactive',
      },
    },
  },
})

export const App = () => {
  const [current, send] = useMachine(toggleMachine)

  console.log(current.value)

  return (
    <div className="App">
      <button onClick={() => send('TOGGLE')}>Toggle</button>
      <p>We are {current.value}</p>
    </div>
  )
}
