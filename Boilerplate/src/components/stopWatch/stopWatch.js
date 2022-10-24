const stopWatch = (props) => {

    const addLeadingZeros = (num, totallength) => {
        return String(num).padStart(totallength, '0');
    }

    return(
        <div>
            <h1>{addLeadingZeros(props.hours, 2)} : {addLeadingZeros(props.minutes, 2)} : {addLeadingZeros(props.seconds, 2)} </h1>
            <button onClick={props.start}>Start</button>
            <button onClick={props.pause}>Paus</button>
            <button onClick={props.reset}>Reset</button>
        </div>
    )
}

export default stopWatch;