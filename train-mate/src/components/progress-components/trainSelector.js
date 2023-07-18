import {useState} from "react";

const TrainSelector = ({trains, handleOptionChange2}) => {

    const [isDisable, setIsDisable] = useState(false);

    function handleChange(event) {
        handleOptionChange2(event.target.value)
        setIsDisable(true);
    }

    return (
        <select style={{width:'450px'}} className="ms-5 form-control" onChange={handleChange}>
            <option disabled={isDisable} value={trains}>Filter by train</option>
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