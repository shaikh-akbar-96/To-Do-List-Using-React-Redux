import React from 'react'
import "../styles/index.css"


const pageTitle = ({children, ...rest}) => {
  return (
      <p className="title" {...rest}>{children}</p>
      )
}

export default pageTitle
