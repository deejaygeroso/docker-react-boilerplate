import React, { ReactElement } from 'react'
import { Link } from '@reach/router'

const Navigation = (): ReactElement => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation