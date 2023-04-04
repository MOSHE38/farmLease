import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='center'>
            <ul>
                <li>
                    <span className='active'>Listing Manager</span>
                </li>
                <li>
                    <span>Messages</span>
                </li>
                <li>
                    <span>Notifications</span>
                </li>
                <li>
                    <span>Settings</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar;