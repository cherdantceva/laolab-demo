import styles from './styles.scss'

const VacancyItem = (props) => {
    const {name, description} = props;
    return (
        <li className="vacancy-item">
            <span className="vacancy-item__name">{name}</span>
            <span className="vacancy-item__descr">{description}</span>
        </li>
    );
};

export default VacancyItem;






