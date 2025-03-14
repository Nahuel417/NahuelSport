import React from 'react';

export const example: React.FC<{ name: string; children: React.ReactElement }> = ({ name, children }) => {
    return (
        <>
            <div>
                <p> {name} </p>
                {children}
            </div>
        </>
    );
};

export default example;
