import Button from "react-bootstrap/Button";
import {useRef, useState} from "react";
import axios from "axios";

const ChestExercises = () => {
    const [showInputs, setShowInputs] = useState(false);
    const [trainName, setTrainName] = useState("");
    const formRef = useRef(null);


    const handleTrainName = (event) => {
        setTrainName(event.target.value)
    }

    const handleCancel = (event) => {
        setShowInputs(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        formRef.current.reset();
        setShowInputs(false);
    };

    const handleNewTrain = (event) => {
        setShowInputs(true);
    }

    const handleAddNewTrain = async () => {
        const token = localStorage.getItem("token");
        const newTrain = { name: trainName, token: token, muscle: "Chest"};
        try {
            await axios.post("http://localhost:8080/createTrain", newTrain);
            alert("Train created successfully")
        }
        catch (e) {
            console.log(e);
        }
        finally {
            newTrain.current.reset();
        }
    }

    return (
        <div>
            <Button className='m-3 ' onClick={handleNewTrain} variant="primary"> New Train </Button>
            {showInputs && (
                <div className=' d-inline-flex border border-primary rounded p-3 mt-3'>
                    <form className='m-1' ref={formRef} onSubmit={handleSubmit}>
                            <div>
                                <input  onChange={handleTrainName} className='m-1' required name="train" placeholder="Enter train name" type="text" />
                            </div>
                        <Button onClick={handleAddNewTrain} className='m-2' variant="secondary" type="submit"> Add train </Button>
                        <Button onClick={handleCancel} className='m-2' variant="secondary"> Cancel </Button>
                    </form>
                </div>
            )}
        </div>
    );
}
export default ChestExercises;