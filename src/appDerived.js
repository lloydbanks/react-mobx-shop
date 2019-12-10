import React, { useState } from 'react'
import Input from './input'
import Lazy from './lazy'
import Derived from './derived'

export default function() {
  const [min, setMin] = useState(10)

  setTimeout(() => setMin(30), 1000)

  return (
    <div>
      <h2>Input counter</h2>
      <p>
        <i>
          <b>Issue</b>: input can't be changed using React's `onChange` event
        </i>
      </p>
      <Input min={10} max={20} />

      <h2>Input lazy counter</h2>
      <p>
        <i>
          <b>Solution:</b> use staging value and change it `onBlur`
        </i>
      </p>
      <Lazy min={10} max={20} />

      <hr />

      <h2>Input derived counter</h2>
      <Derived min={min} max={20} key={`${min}:50`} />
    </div>
  )
}
