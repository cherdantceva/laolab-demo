import styles from './styles.scss'
import Page from "../Page/Page";
import PagePart from "../PagePart/PagePart";
import Logo from "../Logo/Logo";
import Link from "../Link/Link";
import SVG from 'react-inlinesvg';
import arrowRight from "../../res/img/arrow-right.svg"
import Video from "../Video/Video";
import Info from "../Info/Info";

const MainDesktop = () => {

    return (
            <div className="main-desktop">
                <Page>
                    <>
                        <PagePart>
                            <>
                                <Logo />

                                <div className="main-desktop__content">
                                    <p className="main-desktop__text">
                                        Artistic practice for experimental design. We are crypto etc based in somewhere—working
                                        internation to design iconic brands and digit experiences with focus on what’s essential.
                                        Why essential?
                                    </p>
                                    <Link
                                        direction='right'
                                        text='Work with us'
                                        icon=<SVG src={arrowRight} />
                                    />
                                </div>
                                <div className="main-desktop__info">
                                    <Info color='gray'>
                                        <span>We also registered at <a href="/"className="info__link info__link_gray">Duns</a></span>
                                    </Info>
                                </div>
                            </>
                        </PagePart>
                        <PagePart>
                            <Video />
                        </PagePart>
                    </>
                </Page>
            </div>
    );
};

export default MainDesktop;






