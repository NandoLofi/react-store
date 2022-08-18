import React from 'react'
import "./Backdrop.css"

export default function Backdrop({show}) {
  return show && (
    <div className='backdrop'>Backdrop</div>
  )
}
