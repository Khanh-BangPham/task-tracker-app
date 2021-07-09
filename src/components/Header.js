import PropTypes from 'prop-types';
import '../scss/import.scss';
import Button from './Button';
import { useLocation } from 'react-router';
const Header = ({text, title, onAdd}) => {
    const location = useLocation()

    return (
        <div className="header">
            <h1 className="titleMain">{title}</h1>
            {location.pathname === '/' && <Button color = 'blue' text = {text} onAdd={onAdd}/>}
            
        </div>
    )
}
//------------------------------------------------------------
Header.defaultProps = {
    title: 'Quản lý công việc',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
//------------------------------------------------------------
export default Header
