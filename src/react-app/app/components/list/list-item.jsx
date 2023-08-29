import React from 'react';

const ListItemComponent = ({children, onClick}) => {
    return (
        <li onClick={onClick}>{children}</li>
    );
}

export default ListItemComponent;
