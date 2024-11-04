import React from "react";
import Plus_Icon from "../assets/Plus.png";

const CreateEventButton = () => {
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn border border-2 rounded-4 btn-outline-light text-dark dropdown-toggle py-3 px-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src={Plus_Icon} alt="Add" width={16} className="m-1 me-3" />
        Create
      </button>
      <ul class="dropdown-menu">
        <li>
          <div class="dropdown-item">Event</div>
        </li>
        <li>
          <div class="dropdown-item">Task</div>
        </li>
        <li>
          <div class="dropdown-item">
            <span>Appointment Schedule</span>
            <p className="lead ">
              Create a shareable page that lets people book time with you
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CreateEventButton;
