import React from 'react'



 const RenderUser =({Users}) => {
    return (
        <div>
            <div className="container">
                <img src={Users.img} style={{width: 250, backgroundColor: 'aqua'}} alt="here is image"/>
                <h2>{Users.name}</h2>
                <h2>{Users.age}</h2>
                <h2>{Users.country}</h2>  
            </div>
        </div>
    )
}

export {RenderUser}
