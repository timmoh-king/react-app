/**
 * @Author: Your name
 * @Date:   2022-06-15 09:49:49
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-06-15 10:15:24
 */
import React from 'react'

function Welcome (props) {
  return (
    <div>
      <h1>Hello {props.name} {props.heroname} welcome to my site.</h1>
      {props.children}
    </div>
  )
}

export default Welcome
