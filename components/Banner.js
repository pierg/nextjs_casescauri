import { withTranslation } from '../i18n'

const Banner = ({t}) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>{t('welcome_title')}</h1>
            </header>
            <div className="content">
                <p>{t('welcome_subtitle')}</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">{t('get_started')}</a></li>
                </ul>
            </div>
        </div>
    </section>
)


Banner.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(Banner)