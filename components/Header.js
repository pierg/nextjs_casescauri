import PropTypes from 'prop-types'
import Link from 'next/link'
import {i18n, withTranslation} from '../i18n'

const Header = (props) => (
    <header id="header" className="alt">
        <Link href="/">
            <a className="logo"><strong>{props.t('title')}</strong> <span>{props.t('tag_line')}</span></a>
        </Link>
        <nav>
            <a href="#" className="button" onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'it' : 'en')}>{props.t('change-locale')}</a>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default withTranslation('common')(Header)