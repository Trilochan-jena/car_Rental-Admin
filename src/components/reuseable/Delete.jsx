import React from 'react';
import "../../styles/delete.css";
import { useDispatch } from 'react-redux';
import { deleteCar, getCarAdd } from '../../action/carAction/addCar';

const Delete = ({ closeModal, deleteData }) => {
    const dispatch = useDispatch();

    const handleDeleteTable = (id) => {
        const obj = {
            userId: id,
        };

        console.log(obj);

        dispatch(deleteCar(obj)).then(() => {
            closeModal();
            dispatch(getCarAdd());
        });
    };

    return (
        <div className='modal-wrapper'>
            <div className='modal-container'>
                Are you sure you want to delete?
                <div className='edit-btn'>
                    <button onClick={closeModal}>Cancel</button>
                    <button onClick={() => handleDeleteTable(deleteData._id)}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Delete;
