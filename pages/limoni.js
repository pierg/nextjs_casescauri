import Head from "next/head"
import Link from 'next/link'
import Layout from '../components/Layout'

import {withTranslation} from '../i18n'

import Banner from '../components/Banner'
import Carousel from "../components/Carousel"
import Features from "../components/Features";


const Limoni = (props) => (
    <Layout>
        <Head>
            <title>{props.t("violetta_page_title")}</title>
            <meta name="description" content={props.t("violetta_page_description")}/>
        </Head>

        <div>
            <Banner name="limoni"/>

            <div id="main">

                <section id="one">
                    <div className="inner">
                        <p>{props.t("limoni_description")}</p>
                    </div>
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>{props.t("carousel_title")}</h2>
                        </header>
                        <div className="align-center"><Carousel name="limoni"/></div>
                    </div>
                </section>
                <section id="three" className="spotlights">
                    <div className="inner">
                        <header className="major">
                            <h2>{props.t("features_title")}</h2>
                        </header>
                        <div className="align-center"><Features name="limoni" /></div>
                    </div>

                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic09.jpg" alt=""/></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Rhoncus magna</h3>
                                </header>
                                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc
                                    rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna
                                    lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat
                                    tincidunt. Vivamus et sagittis tempus.</p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic10.jpg" alt=""/></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Sed nunc ligula</h3>
                                </header>
                                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc
                                    rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna
                                    lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat
                                    tincidunt. Vivamus et sagittis tempus.</p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)


Limoni.getInitialProps = async () => ({
    namespacesRequired: ['limoni', 'common'],
})

export default withTranslation('limoni')(Limoni)