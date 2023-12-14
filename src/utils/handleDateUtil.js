import React from 'react'

const handleDateUtil = (dateString, monthsToAdd) => {    
    // Convert the input date string to a Date object
        let currentDate = new Date(dateString);
        // Calculate the new month value
        let newMonth = currentDate.getMonth() + Number(monthsToAdd);
    //console.log(newMonth)
    if (newMonth > 11) {
        let yearIncrement = Math.floor(newMonth / 12);
        
        currentDate.setFullYear(currentDate.getFullYear() + yearIncrement);
        currentDate.setMonth(newMonth % 12);
      }
        // Adjust the year and month
        currentDate.setMonth(newMonth);

        //console.log("date:", currentDate)
      
        // Handle cases where the new month value goes beyond December
        // and adjust the year accordingly
       
      
        // Return the new date
     return currentDate.getDate()
}

export default handleDateUtil