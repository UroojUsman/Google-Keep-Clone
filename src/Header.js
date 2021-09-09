import React ,{useState} from 'react'

function Header() {
    const [Search, setSearch] = useState('');
    return (
        <div>
            <div className="header">
          <img src="./logo.png" />
          <h3>Keep</h3>
          <input className="search" type="text" placeholder="Search" value={Search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        </div>
    )
}

export default Header
