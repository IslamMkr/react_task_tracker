import PropTypes from 'prop-types'

const Button = ({ text, color, onClick }) => {
    return (
        <button style={{ backgroundColor: color }} className="btn" onClick={onClick}>{text}</button>
    )
}

Button.defaultProps = {
    text: 'Button',
    color: 'black'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Button
