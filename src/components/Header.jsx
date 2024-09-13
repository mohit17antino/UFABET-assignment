import React from 'react'

const Header = () => {
  return (
    <header className='header-main'>
        <div className='header-inner'>
            <h1>UFABET</h1>
            <ul>
                <li>FANTASY</li>
                <li>
                    <select>
                        <option selected>BETTING</option>
                    </select>
                </li>
            </ul>
        </div>
        <div>
            <h2>$1000</h2>
        </div>
    </header>
  )
}

export default Header