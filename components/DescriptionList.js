import {withTranslation} from '../i18n'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import { faBicycle, faWifi, faParking, faTv} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

library.add(faBicycle);
library.add(faWifi);
library.add(faParking);
library.add(faTv);



const DescriptionList = (props) => {
    switch (props.name) {
        case "home":
            return (
                <div></div>
            )

        case "violetta":
            return (
                <div></div>
            )

        case "limoni":
            return (
                <div className="inner">
                    <header className="major">
                        <h3>Rhoncus magna</h3>
                    </header>
                    <ul className="alt">
                        <li>Dolor etiam magna etiam.</li>
                        <li>Sagittis lorem eleifend.</li>
                        <li>Felis feugiat viverra.</li>
                    </ul>
                </div>
            )

        case "chalet":
            return (
                <section id="banner" className="major">
                    <div className="inner">
                        <header className="major">
                            <h1>{props.t('limoni_title')}</h1>
                        </header>
                        <div className="content">
                            <p>{props.t('limoni_tagline')}</p>
                            <ul className="actions">
                                <li><a href="#contact" className="button next scrolly">{props.t('book_now')}</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            )

        case "about":
            return (
                <section id="banner" className="major">
                    <div className="inner">
                        <header className="major">
                            <h1>{props.t('about_title')}</h1>
                        </header>
                        <div className="content">
                            <p>{props.t('about_tagline')}</p>
                            <ul className="actions">
                                <li><a href="#contact" className="button next scrolly">{props.t('book_now')}</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            )

        default:
            return (
                <section id="banner" className="major">
                    <div className="inner">
                        <header className="major">
                            <h1>{props.t('welcome_title')}</h1>
                        </header>
                        <div className="content">
                            <p>{props.t('welcome_subtitle')}</p>
                            <ul className="actions">
                                <li><a href="#one" className="button next scrolly">{props.t('get_started')}</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            )
    }
}

DescriptionList.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(DescriptionList)