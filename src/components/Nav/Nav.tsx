import React from 'react'
import ThemePicker from '../ThemePicker/ThemePicker'
import { Auth } from '../Auth/Auth'

export default function Nav() {
  return (
    <nav>
      <ThemePicker />
      <Auth />
    </nav>
  )
}
