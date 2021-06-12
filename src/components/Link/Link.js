import styles from './styles.scss'

const Link = (props) => {
    const {direction, text, icon} = props;
    return (
        <div className="link">
            {direction === 'right' &&
                <>
                    <div className="link__text">
                        {text}
                    </div>
                    <div className="link__icon link__icon_right">
                        {icon}
                    </div>
                </>
            }
            {direction === 'left' &&
            <>
                <div className="link__icon link__icon_left">
                    {icon}
                </div>
                <div className="link__text">
                    {text}
                </div>

            </>
            }
        </div>
    );
};

export default Link;






