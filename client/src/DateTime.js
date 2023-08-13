import React, { useState, useEffect } from 'react';

function DateTimeComponent() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  const formattedDateTime = currentDateTime.toLocaleString(); // Format the date and time

  return (
    <div>
      <p>Current Date and Time: {formattedDateTime}</p>
    </div>
  );
}

export default DateTimeComponent;
