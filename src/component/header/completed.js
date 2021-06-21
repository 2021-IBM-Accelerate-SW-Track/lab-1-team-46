import PropTypes from 'prop-types'

const Completed = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Completed.defaultProps = {
    title: 'Completed Tasks',
}

Completed.propTypes = {
    title: PropTypes.string.isRequired,
}

//const headingStyle = {
//    color: 'red',
//    backgroundColor: 'black',
//}

export default Completed