import React from 'react'

export default function Header(props){
  return (
    <header class="header">
      <div class="header-inner">{ props.title }</div>
    </header>
  )
}