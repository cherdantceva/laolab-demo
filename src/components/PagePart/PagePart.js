import styles from './styles.scss'

const PagePart = (props) => {
    const {children} = props;
    return (
        <div className='page-part'>
            {children}
        </div>
    );
};

export default PagePart;






