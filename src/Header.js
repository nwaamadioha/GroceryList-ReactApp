import React from 'react'

const Header = ({title: headerTitle}) => {

  return (
    <header>
      <h1>{headerTitle}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}

export default Header