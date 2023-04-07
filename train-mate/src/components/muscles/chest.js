import Button from "react-bootstrap/Button";
import {useRef, useState} from "react";


const ChestExcercises = () => {
    const [showInputs, setShowInputs] = useState(false);
    const [excerciseName, setExcerciseName] = useState("");
    const formRef = useRef(null);
    const handleNewRoutineClick = () => {
        setShowInputs(true);
    };
    const handleNameChange = (event) => {
        setExcerciseName(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        formRef.current.reset();
        setShowInputs(false);
    };
    return (
        <div>
            <Button className='m-3 ' variant="primary" onClick={handleNewRoutineClick}> New excercise </Button>
            {showInputs && (
                <div className=' d-inline-flex border border-primary rounded p-3 mt-3'>
                    <form className='m-1' ref={formRef} onSubmit={handleSubmit}>
                        <input className='mb-3' name="routineName" required placeholder="Enter name exercise" onChange={handleNameChange} type="text" />
                    </form>
                </div>
            )}
            </div>
    )
}
export default ChestExcercises;