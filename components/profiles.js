import React from 'react'

export default function profiles({ Leaderboard }) {
  return (
        <div id="profile">
            {Item(Leaderboard)}
        </div>
  )
}

function Item(data){
    return (

        <>
            {
                data.map((value, index) => (
                    <div className="flex" key={index}>
                     
                        <div className="item">
                            <a href="/" ><img src={value.img} alt="" /></a>
            
                            <div className="info">
                                <h4 className='name text-dark'>{value.name}</h4>    
                                <span>{value.location}</span>
                            </div>                
                        </div>
                        <div className="item-1">
                            <span id='price'><p>Rs  {value.score}</p></span>
                        </div>
                        <div className="post">
                               <span><button class="btn btn-primary" type="submit">View Post</button></span>
                        </div>
                    </div>
                    )
                )
            }
        </>

        
    )
}