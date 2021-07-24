import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, formVisibility }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button 
                text={formVisibility ? "Close" : "Add"}
                color={formVisibility ? "red" : "green"}
                onClick={onAdd}/>
        </header>
    )
}

// propTypes helps making your code more robust
// You can assign the data type that you expect for the component props
// You can make it required to be that data type
// It shows warning in the console, so its good for debugging as well
Header.propTypes = {
    title: PropTypes.string.isRequired,
    childrenNumber: PropTypes.number
}

// defaultProps helps making props attributs for your components
Header.defaultProps = {
    title: 'Task Tracker',
    childrenNumber: 5
}

export default Header
