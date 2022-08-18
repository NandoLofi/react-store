import React from 'react'
import "./SideDrawer.css"

export default function SideDrawer({show}) {
  const sideDrawerClass = ["sidedrawer"]
  if(show){
    sideDrawerClass.push("show")
  }

  return (
    <div className={sideDrawerClass.join(" ")}>SideDrawer</div>
  )
}
