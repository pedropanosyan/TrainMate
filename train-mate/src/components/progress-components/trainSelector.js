const TrainSelector = ({trains, handleOptionChange2}) => {

    function handleChange(event) {
        handleOptionChange2(event.target.value)
    }


    return (
        <select className="ms-5 form-control" onChange={handleChange}>
            {trains.length > 0 ? (
                trains.map((train) => (
                    <option key={train.trainName} value={train.trainName}>
                        {train.trainName}
                    </option>
                ))
            ) : (
                <option value="No options">No options available</option>
            )}
        </select>
    )

}

export default TrainSelector;