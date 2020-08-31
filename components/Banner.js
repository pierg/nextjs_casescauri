import { withTranslation } from '../i18n'

const Banner = (props) => {
    switch (props.name) {
        case "home":
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

        case "violetta":
            return (
                <section id="banner" className="major">
                    <div className="inner">
                        <header className="major">
                            <h1>{props.t('violetta_title')}</h1>
                        </header>
                        <div className="content">
                            <p>{props.t('violetta_tagline')}</p>
                            <ul className="actions">
                                <li><a href="#contact" className="button next scrolly">{props.t('book_now')}</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            )

        case "limoni":
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

Banner.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(Banner)