import React from 'react';
import { useLocation } from 'react-router-dom';

const Inventory = () => {
    const location = useLocation()
    return (
        <div>
            <h2>Check Your Inventory Management</h2>
        </div>
    );
};

export default Inventory;