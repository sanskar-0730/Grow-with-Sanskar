import React from 'react'

const Footer = () => {

  const year = new Date().getFullYear();

  return (
      <div className='footer'>&copy;{year} <b>Grow with Sanskar</b>. All Rights Reserved.</div>
  )
}

export default Footer