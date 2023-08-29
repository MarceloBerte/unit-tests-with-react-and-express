import React from 'react';

const UnorderedListComponent = ({className, children}) => {
    return (
        <ul className={className}>{children}</ul>
    );
}

export default UnorderedListComponent;
