import Link from 'next/link'
import React from 'react'

const Users = () => {
  return (
    <div>
      <ul>
 <li><Link href="/dashboard/users/1"></Link>User 1</li>
  <li><Link href="/dashboard/users/2"></Link>User 2</li>
   <li><Link href="/dashboard/users/3"></Link>User 3</li>
    <li><Link href="/dashboard/users/4"></Link>User 4</li>
     <li>User 5</li>
      <li>User 6</li>
      </ul>
    </div>
  )
}

export default Users
