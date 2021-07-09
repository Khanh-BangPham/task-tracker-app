import PropTypes from 'prop-types'
const Button = ({text, color, onAdd}) => {

    return (
        <button 
        onClick={onAdd}
            className="btn" 
            style={{backgroundColor: color}} 
            > {text}
        </button>
    )
}

Button.propTypes = {

}

//-------------------------------------------------------------------
Button.defaultProps = {

}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}
//-------------------------------------------------------------------
export default Button
