import React from 'react'

const ListItem = ({title, className, linkClassName, link}) => {
    return (
        <li className= {className}>
            <a href={link} className={linkClassName}>{title}</a>
        </li>
    )
}

export default ListItem