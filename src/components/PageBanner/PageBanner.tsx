import React from 'react'

//styles
import './PageBanner.scss'

interface PageBannerProps{
    children: React.ReactElement;
}

export const PageBanner = (props: PageBannerProps) => {
    return (
        <div className="PageBanner">
            {props.children}
        </div>
    )
}
