import React from 'react';

const DescriptionListComponent = ({className, children}) => {
    return (
        <dl className={className}>{children}</dl>
    );
}

export default DescriptionListComponent;
