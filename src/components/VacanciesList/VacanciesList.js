import styles from './styles.scss'
import VacancyItem from "../VacancyItem/VacancyItem";

const VacanciesList = () => {
    const vacansies = [
        {
            id: "1",
            name: "Product manager (Tech lead)",
            descr: "FULL-TIME / OFFICE"
        },
        {
            id: "2",
            name: "Middle back-end developer (Node.JS)",
            descr: "FULL-TIME / OFFICE"
        },
        {
            id: "3",
            name: "Middle back-end developer (C/C++",
            descr: "FULL-TIME / OFFICE"
        },
        {
            id: "4",
            name: "Middle Firmware developer (C/C++)",
            descr: "FULL-TIME / OFFICE"
        },
        {
            id: "5",
            name: "Product manager (Tech lead)",
            descr: "FULL-TIME / OFFICE"
        },
        {
            id: "6",
            name: "Product manager (Tech lead)",
            descr: "FULL-TIME / OFFICE"
        },
        {
            id: "7",
            name: "Product manager (Tech lead)",
            descr: "FULL-TIME / OFFICE"
        },
    ]
    return (
        <ul className="vacancies-list">
            {vacansies.map((vacancy) => (
                <VacancyItem
                    key={vacancy.id}
                    name={vacancy.name}
                    description={vacancy.descr}
                />

            ))}
        </ul>
    );
};

export default VacanciesList;






