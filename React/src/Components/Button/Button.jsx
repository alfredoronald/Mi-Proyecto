import React from 'react'
import './Button.css'

export function Button(props) {
  const { children } = props
  return <button type='submit'>{children}</button>
}
