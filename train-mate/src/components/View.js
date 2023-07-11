import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "react-bootstrap/Pagination";
import Selector from "./progress-components/selector";

function ViewCard() {
    const [workouts, setWorkouts] = useState([]);
    const [workoutsCopy, setWorkoutsCopy] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        const accessToken = localStorage.getItem('token');
        axios.get("http://localhost:8080/getTrainWorkouts", {
            headers: {
                token: accessToken
            }
        })
            .then(response => {
                const sortedWorkouts = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setWorkouts(sortedWorkouts);
                setWorkoutsCopy(sortedWorkouts);
            })
            .catch(error => console.log(error));
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const displayedWorkouts = workoutsCopy.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(workouts.length / itemsPerPage);

    const generatePageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    const rectangleStyle = {
        width: '90%',
        backgroundColor: 'lightblue',
        color: 'black',
        textTransform: 'capitalize',
        fontSize: '0.7em',
        borderRadius: '10px',
        padding: '10px',
        margin: '0 auto 10px',
    };

    function orderByMuscle(array) {
        setWorkoutsCopy(array)
    }

    function orderByTrain(array) {
        setWorkoutsCopy(array);
    }

    function orderAll(array) {
        setWorkoutsCopy(array);
    }
    
    function changePagination() {
        handlePageChange(1)
    }

    return (
        <div className="container min-vh-100">
            <div className="row" style = {{ marginLeft: '2%'}}>
                <Selector orderAll={orderAll} orderTrain={orderByTrain} orderMuscle={orderByMuscle} trains={workouts} changePagination={changePagination} />
            </div>
            {displayedWorkouts.map(workout => (
                <div key={workout.id} className="mt-3">
                    <li style={{ listStyle: 'inside', listStylePosition: 'initial' }}>
                        <div style={rectangleStyle}>
                            <div style={{fontSize: '15px'}}>
                                <span><span style={{fontWeight:'bold'}}>{workout.muscle}:</span> {workout.trainName},</span>
                                <span style={{ marginLeft: '2%' }}><span style={{fontWeight:'bold'}}>Reps</span>: {workout.reps},</span>
                                <span style={{ marginLeft: '2%' }}><span style={{fontWeight:'bold'}}>Weight:</span> {workout.weight}Kg,</span>
                                    <span style={{ marginLeft: '2%' }}><span style={{fontWeight:'bold'}}>Sets:</span> {workout.sets},</span>
                                    <span style={{ marginLeft: '2%' }}><span style={{fontWeight:'bold'}}>Date:</span> {workout.date}</span>
                            </div>
                        </div>
                    </li>
                </div>
            ))}
            <Pagination className="" style={{ marginLeft: '41%', marginTop: '8%'}}>
                <Pagination.First onClick={() => handlePageChange(1)} />
                <Pagination.Prev
                    onClick={() =>
                        handlePageChange(currentPage > 1 ? currentPage - 1 : currentPage)
                    }
                />
                {generatePageNumbers().map((pageNumber) => (
                    <Pagination.Item
                        key={pageNumber}
                        active={currentPage === pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                    >
                        {pageNumber}
                    </Pagination.Item>
                ))}
                <Pagination.Next
                    onClick={() =>
                        handlePageChange(
                            currentPage < totalPages ? currentPage + 1 : currentPage
                        )
                    }
                />
                <Pagination.Last onClick={() => handlePageChange(totalPages)} />
            </Pagination>
        </div>
    );
}

export default ViewCard;
