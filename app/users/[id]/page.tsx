import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
    params : {id:number}
}
const UserDettailpage = ({params : {id}} : Props) => {
    if(id>10) notFound();
  return (
    <div>
       UserDettailpage {id}
    </div>
  )
}

export default UserDettailpage
