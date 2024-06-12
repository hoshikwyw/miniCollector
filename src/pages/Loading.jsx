import React from 'react';

const Loading = () => {
    const loading = '/public/Gifs/loading.gif';
    return (
        <div className=' w-[100px] h-[100px]'>
            <img src={loading} alt="Loading Gif" />
        </div>
    )
}

export default Loading;
