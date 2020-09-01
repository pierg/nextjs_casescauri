import Head from "next/head"
import stylesheet from 'styles_origianl/main.scss'

import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading'
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: '' });
        }, 100);
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }

    render() {
        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <Head>
                    <title>Next.js Starter</title>
                    <meta name="description" content="Next.js Starter - Forty" />
                    <link href="/static/css/skel.css" rel="stylesheet" />
                    {/*<link href="/static/css/main.css" rel="stylesheet" />*/}
                    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
                    {/*<link href="/static/css/fontawesome-all.min.css" rel="stylesheet" />*/}
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
                    <noscript>
                        <link href="/static/css/noscript.css" rel="stylesheet" />
                    </noscript>
                </Head>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />


                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} />
                    {this.props.children}
                    <Contact />
                    <Footer />
                </div>

                <Menu onToggleMenu={this.handleToggleMenu} />

            </div>
        )
    }
}

export default Layout
