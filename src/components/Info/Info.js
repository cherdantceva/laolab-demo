import React from 'react'
import styles from './styles.scss'

const Info = (props) => {
    const {children, color} = props
    return (
        <div className={`info ${color === 'blue' ? "info_blue" : ''} ${color === 'gray' ? "info_gray" : ''}`}>
            <div className={`text ${color === 'blue' ? "text_blue" : ''} ${color === 'gray' ? "text_gray" : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Info;






