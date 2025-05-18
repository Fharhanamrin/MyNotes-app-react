import PropTypes from "prop-types";
function CharCounter({remaining, counter}) {
    return (
        <div>
            <span className="character-counter">sisa karakter : {remaining}, dari maksimal karakter {counter}</span>
        </div>
    )
}
CharCounter.propTypes = {
    remaining: PropTypes.number.isRequired,
    counter: PropTypes.number.isRequired
}

export default CharCounter;