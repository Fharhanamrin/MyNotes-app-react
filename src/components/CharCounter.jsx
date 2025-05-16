function CharCounter({remaining, counter}) {
    return (
        <div>
            <span className="character-counter">sisa karakter : {remaining}, dari maksimal karakter {counter}</span>
        </div>
    )
}

export default CharCounter;