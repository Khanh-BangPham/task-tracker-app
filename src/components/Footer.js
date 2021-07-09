import { Link } from 'react-router-dom'

const Footer = props => {
    return (
        <footer>
            <p>Creact @ 22/6/2021</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

Footer.propTypes = {

}

export default Footer

