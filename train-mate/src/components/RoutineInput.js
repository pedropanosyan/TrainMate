import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RoutineInput = () => {
    const [showInputs, setShowInputs] = useState(false);
 //   const [name, setName] = useState("");
   // const [series, setSeries] = useState(0);
    //const [reps, setReps] = useState("");
    //const [routine, setRoutine] = useState([]);

    const formRef = useRef(null);

    const handleNewRoutineClick = async () => {
        try {
            const response = await axios.post('http://localhost:8080/newRoutine', {
                name: "My new routine",
                series: 3,
                reps: 5
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
        setShowInputs(true);
    };
    return (
        <div>
            <button
                style={{ marginLeft: "1100px", marginTop: "200px" }}
                onClick={handleNewRoutineClick}
            >
                New routine
            </button>

            {showInputs && (
                <div>
                    <form
                        ref={formRef}
                        className="inp"
                        style={{ marginLeft: "1100px", marginTop: "100px" }}
                        //onSubmit={handleSubmit}
                    >
                        <h4>Name</h4>
                        <input  type="text" />
                        <h4> Series </h4>
                        <input  type="number" />
                        <h4>Reps</h4>
                        <input type="text" />
                        <button
                            style={{
                                marginLeft: "10px",
                                fontSize: "0.8em",
                                padding: "0.5em 1em",
                                borderRadius: "0.5em",
                                backgroundColor: "white",
                                color: "black",
                            }}
                            type="submit"
                        >
                            ADD
                        </button>
                    </form>
                    <button
                        style={{ marginLeft: "10px", marginTop: "10px" }}
                    >
                        END
                    </button>
                </div>
            )}
        </div>
    );
};

export default RoutineInput;
 /*   const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSeriesChange = (event) => {
        setSeries(event.target.value);
    };

    const handleRepsChange = (event) => {
        setReps(event.target.value);
    };

    const handleNewRoutine = () => {
        setRoutine([]);
        setName("");
        setSeries(0);
        setReps("");
        setShowInputs(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newWorkout = { name, series, reps };
        try {
            await axios.post("/userRoutineWorkout", newWorkout);

            setRoutine([...routine, newWorkout]);
            formRef.current.reset();
        } finally {

        }
    };

    const handleEndRoutineClick = async () => {
        try {
            await axios.post("/userRoutine", { routine });
            handleNewRoutine();
        } catch (error) {
            console.error(error);
        }
    };
*/
