import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function Center() {
    const navigate = useNavigate();
    function clickHandler() {
        //move to AddProject page
        navigate('/AddProject');
    }
    return (
        <div>
            <div className='center'>
                <h1 className="title">Issues Tracker</h1>
                <button className="add" onClick={clickHandler}>Add Projects <AiOutlinePlus className='issueplus' /></button>
            </div>

            <div className="projects">
                <h1 className='yourproject'>Your Projects</h1>
                <section className="projectname"></section>
            </div>
        </div>
    )
}

export default Center   