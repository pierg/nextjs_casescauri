import {Link, withTranslation} from '../i18n'

import Layout from '../components/Layout'
import Banner from '../components/Banner'


const Home = ({t}) => (
    <Layout>
        <Banner name="home"/>
        <div id="main">
            <section id="one" className="tiles">
                <article style={{backgroundImage: `url('/static/images/pic01.jpg')`}}>
                    <header className="major">
                        <h3>{t('violetta_name')}</h3>
                        <p>{t('violetta_tagline')}</p>
                    </header>
                    <Link href="/violetta"><a className="link primary"></a></Link>
                </article>
                <article style={{backgroundImage: `url('/static/images/pic02.jpg')`}}>
                    <header className="major">
                        <h3>{t('chalet_name')}</h3>
                        <p>{t('chalet_tagline')}</p>
                    </header>
                    <Link href="/chalet"><a className="link primary"></a></Link>
                </article>
                <article style={{backgroundImage: `url('/static/images/pic03.jpg')`}}>
                    <header className="major">
                        <h3>{t('limoni_name')}</h3>
                        <p>{t('limoni_tagline')}</p>
                    </header>
                    <Link href="/limoni"><a className="link primary"></a></Link>
                </article>
                <article style={{backgroundImage: `url('/static/images/pic04.jpg')`}}>
                    <header className="major">
                        <h3>{t('location_name')}</h3>
                        <p>{t('location_tagline')}</p>
                    </header>
                    <Link href="/location"><a className="link primary"></a></Link>
                </article>
                <article style={{backgroundImage: `url('/static/images/pic05.jpg')`}}>
                    <header className="major">
                        <h3>{t('about_name')}</h3>
                        <p>{t('about_tagline')}</p>
                    </header>
                    <Link href="/about"><a className="link primary"></a></Link>
                </article>
            </section>
            <section id="two">
                <div className="inner">
                    <header className="major">
                        <h2>Massa libero</h2>
                    </header>
                    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna
                        magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna.
                        Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                        consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus
                        amet pharetra et feugiat tempus.</p>
                    <ul className="actions">
                        <li><Link href="/landing"><a className="button next">Get Started</a></Link></li>
                    </ul>
                </div>
            </section>
        </div>
    </Layout>
)


Home.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(Home)