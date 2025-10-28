import React from 'react';
import useAppsData from '../../Hooks/useAppsData';


const AppsItems = () => {

    const {appsData} = useAppsData()

    return (
        
        <div>
            <h1>this is apps page: {appsData.length}</h1>
        </div>
    );
};

export default AppsItems;