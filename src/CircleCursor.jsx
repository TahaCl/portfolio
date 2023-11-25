import React from 'react'
import { Cursor } from 'react-custom-cursors';
import "react-custom-cursors/dist/index.css";

const AnimCursor = () => {
    return (
        <>
            <Cursor
                color="rgb(255, 192, 203, 0.644)"
                size="lg"
                speed="slow"
                shape="round"
                animation='none'
                hoveringAnimation='magnify'
            />
        </>
    )
}

export default AnimCursor;