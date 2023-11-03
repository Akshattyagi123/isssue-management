import React from "react";
import "./AddIssue.css";

function AddIssue() {
    return (
        <div className="add-issue">
            <form>
                <label>
                    Description
                    <input type="text" placeholder="Describe issue here" />
                </label>
                <label>
                    Assign To
                    <select name="forDev" id="forDev">
                        <option value="select">Select</option>
                        <option value="Punit">Punit</option>
                        <option value="Gautam">Gautam</option>
                        <option value="Simran">Simran</option>
                        <option value="Akshat">Akshat</option>
                    </select>
                </label>
                <label>
                    Priority
                    <select name="priority" id="priority">
                        <option value="select">Select</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Super-High">Super-High</option>
                    </select>
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddIssue;