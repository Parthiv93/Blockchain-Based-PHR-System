import React from 'react';

const Signup = () => {
  return (
    <div className="container">
      <header>Registration</header>
      <form action="#">
        <div class="form-first">
          <div class="personal-details">
            <span class="title">Personal Details</span>
            <div class="fields">
              <div class="input-field">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your Name" required></input>
              </div>
              <div class="input-field">
                <label>Date of Birth</label>
                <input type="date"  required></input>
              </div>
              <div class="input-field">
                <label>Email</label>
                <input type="text" placeholder="Enter your Mail" required></input>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
