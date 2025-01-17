import React, { ReactNode } from 'react'

type Props = {
    children : ReactNode;
}
const AdminLayout = ({children} : Props) => {
    console.log("children",children);
  return (
    <div className='flex'>
      <aside className='bg-slate-200 p-5 mr-5'>Admin Sidebar</aside>
      <div>{children}</div>
    </div>
  )
}

export default AdminLayout;
