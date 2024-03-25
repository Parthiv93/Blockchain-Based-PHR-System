import React from 'react';

const AvailableDoctor = () => {
    // Fetch available doctor list from the server
    const fetchAvailableDoctors = async () => {
        try {
            const response = await fetch('/api/available-doctors');
            const data = await response.json();
            // Process the data and update the state or UI accordingly
        } catch (error) {
            console.error('Error fetching available doctors:', error);
        }
    };

    // Call the fetchAvailableDoctors function when the component mounts
    React.useEffect(() => {
        fetchAvailableDoctors();
    }, []);

    return (
        <div>
            <h2>Available Doctors</h2>
            {/* Render the available doctor list */}
        </div>
    );
};

export default AvailableDoctor;