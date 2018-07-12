import React from 'react'

import Header from 'components/Header'

const HeaderSidebar = () => (
    <Header>
        <div>
            <p className="title">Inbox</p>
            <span className="bell"> 3 </span>
        </div>
        <div>
            <select>
                <option>Filter by</option>
            </select>
        </div>
    </Header>
)

export default HeaderSidebar
