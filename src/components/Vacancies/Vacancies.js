import styles from './styles.scss'
import PagePart from "../PagePart/PagePart";
import Video from "../Video/Video";
import Page from "../Page/Page";
import VacanciesList from "../VacanciesList/VacanciesList";
import SVG from 'react-inlinesvg';
import arrowLeft from "../../res/img/arrow-left.svg"
import Link from "../Link/Link";

const Vacancies = () => {
    return (
        <Page>
            <>
                <PagePart>
                    <Link
                        direction='left'
                        text='Work with us'
                        icon=<SVG src={arrowLeft} />
                    />
                    <VacanciesList />
                </PagePart>
                <PagePart>
                    <Video />
                </PagePart>
            </>
        </Page>
    );
};

export default Vacancies;






