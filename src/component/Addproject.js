import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Addproject.css';
import { toast } from 'react-toastify';

function Addproject() {
    const [description, setDescription] = useState('');

    const handleDescriptionChange = (event) => {
        const inputText = event.target.value;
        const words = inputText.split(' ');

        if (words.length <= 10) { // Limit to 10 words per line
            setDescription(inputText);
        }
    };
    const navigate = useNavigate();
    //Navigates to 
    function clickHandler() {
        if (description.length <= 0 ? toast.warning("Required field") : toast.success("Project created") && setTimeout(() => {
            navigate('/');

        }, 500));
    }

    return (
        <div className="P1Name">
            <label htmlFor="PName">Add Project Name</label>
            <br />
            <input className="PName" type="input"></input>
            <br />
            <br />

            <label htmlFor="PName1">Add Project Description </label>
            <br />
            <textarea
                className="PName1"
                rows="4"
                cols="50"
                value={description}
                onChange={handleDescriptionChange}
            ></textarea>
            <br />
            <br />
            <button id="add" onClick={clickHandler}>ADD</button>
        </div>
    );
}

export default Addproject;




