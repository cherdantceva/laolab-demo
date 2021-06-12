import styles from './styles.scss'

const Page = (props) => {
    const {leftContent, rightContent} = props;
    return (
        <div className='page'>
            <div className="page__part">
                {leftContent}
            </div>
            <div className="page__part">
                {rightContent}
            </div>
        </div>
    );
};

export default Page;






