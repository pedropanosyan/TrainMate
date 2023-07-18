import {useState} from "react";
import TrainSelector from "./trainSelector";

const Selector = ({trains, orderMuscle, orderTrain, orderAll, changePagination}) => {

    const [selectedOption, setSelectedOption] = useState('');
    const [showTrainSelector, setShowTrainSelector] = useState(false);
    const [trainsGivenMuscle, setTrainGivenMuscle] = useState([])

    function check(array, muscle) {
        setTrainGivenMuscle([])
        let temp = [];
        for (const train of array) {
            if (train.muscle === muscle) {
                if (!includes(temp, train.trainName)){
                    temp.push(train)
                }
            }
        }
        setTrainGivenMuscle(temp);
    }

    function includes(array, name) {
        for (const train of array){
            if (train.trainName === name){
                return true
            }
        }
        return false;
    }

    function filterByMuscle(muscle) {
        const filteredArray = trains.filter((train) => train.muscle === muscle);
        orderMuscle(filteredArray);
        check(filteredArray, muscle)
    }

    function filterByTrain(name) {
        const filteredArray = trains.filter((train) => train.trainName === name);
        orderTrain(filteredArray);
    }

     const handleOptionChange1 = async (event) => {
        const option = event.target.value;
        setSelectedOption(option);
        setShowTrainSelector(false);
        if (option === "Chest" || option === "Arms" || option === "Legs" || option === "Back" || option === "Abs") {
            await filterByMuscle(option)
            setShowTrainSelector(true);
        }
        else if (option === "All") {
            orderAll(trains)
        }
        changePagination();
    };

    function handleOptionChange2(option) {
        filterByTrain(option)
        changePagination();
    }

    return (
        <div>
            <p className="text-light">Filter by:</p>
            <div style={{maxWidth:'300px'}} className="form-group d-flex ">
                <select
                    className="form-control"
                    id="options"
                    value={selectedOption}
                    onChange={handleOptionChange1}
                >
                    <option value="All">See all</option>
                    <option value="Chest">Chest</option>
                    <option value="Abs">Abs</option>
                    <option value="Back">Back</option>
                    <option value="Arms">Arms</option>
                    <option value="Legs">Legs</option>
                </select>
                {showTrainSelector &&
                    <TrainSelector trains={trainsGivenMuscle} handleOptionChange2={handleOptionChange2}/>
                }
            </div>
        </div>
    )
}
export default Selector;