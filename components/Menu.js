import PropTypes from 'prop-types'
import Link from 'next/link'
import {withTranslation} from '../i18n'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link href="/"><a><span onClick={props.onToggleMenu}>Home</span></a></Link></li>
                <li><Link href="/violetta"><a><span onClick={props.onToggleMenu}>Violetta</span></a></Link></li>
                <li><Link href="/chalet"><a><span onClick={props.onToggleMenu}>Chalet</span></a></Link></li>
                <li><Link href="/limoni"><a><span onClick={props.onToggleMenu}>Limoni</span></a></Link></li>
                <li><Link href="/about"><a><span onClick={props.onToggleMenu}>{props.t('about_name')}</span></a></Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="/book" className="button special fit">{props.t('book_now')}</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default withTranslation('common')(Menu)
