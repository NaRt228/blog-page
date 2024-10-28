import React from 'react'
import './Skeleton.css'
export default function Skeleton() {
  return (
    <div>
        <div className="load"></div>
        <h2 style={{textAlign:'center', marginTop:'50px'}}>Loading...</h2>
    </div>
  )
}
