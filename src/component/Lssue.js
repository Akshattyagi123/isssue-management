import React from 'react'
import { useState } from 'react';
import CurrentIssue from "./CurrentIssue";
import AddIssue from './AddIssue';
import './Lssue.css';

function Lssue() {
    const [addIssue, setAddIssue] = useState(true);

    function showAddIssue() {
        setAddIssue(true);
    }

    function showCurrentIssue() {
        setAddIssue(false);
    }

    return (
        <div class="issue">
            <h1>Issue Tracker</h1>
            <div className="grey-card-contianer">
                {addIssue ? <AddIssue /> : <CurrentIssue />}
            </div>
            <div className="view-selection-div">
                <button class="view-button" onClick={() => showCurrentIssue()}>
                    Current Issues
                </button>
                <button
                    class="view-button active-button"
                    onClick={() => showAddIssue()}
                >
                    Add Issue
                </button>
            </div>
        </div>


    )
}

export default Lssue;