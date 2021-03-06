import React from 'react';

const Avatar = ({url}) => {
    if(url && url.length > 0) return <img className = "avatar-image" src = {url} alt = "avatar" />;
    return <div className = "avatar-image imageless"></div>;
}

export default Avatar;