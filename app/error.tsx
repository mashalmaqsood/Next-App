'use client';
import React from 'react'

type Props= {
    error : Error,
    reset : () => void
}

const ErrorPage = ({error , reset} :Props) => {
  return (
    <>
    <div>
     An unexpected error has occured. 
    </div>
    <button className="btn" onClick={()=> reset()}>Retry</button>
    </>
  )
}

export default ErrorPage;
