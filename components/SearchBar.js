import React from 'react'


export default function SearchBar() {
  return (
        <div className="container" >
           <form className='d-flex'>
            <input className='form-control me 2' type="search"  placeholder='Search' />
           <button className='btn btn-outline-info' type='send' > Search</button>
           </form>
        </div>
  )
}
