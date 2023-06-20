function getDayOfWeek(dateString) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayOfWeekIndex = date.getUTCDay();
    return daysOfWeek[dayOfWeekIndex];
  }
  
  console.log(getDayOfWeek("2023-06-20"));