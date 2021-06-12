import styles from './styles.scss'

const Page = (props) => {
    const {children} = props;
    return (
        <div className='page'>
            {children}
        </div>
    );
};

export default Page;






