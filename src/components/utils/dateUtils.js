export const isSameDay = (date1, date2) => {
  return date1.toDateString() === date2.toDateString();
};

export const getMonthData = () => {
  const daysInMonth = 31;
  const firstDayOfWeek = 3; // Example: Start on Wednesday
  const totalCells = 35;
  const today = new Date();

  let days = [];

  // Get the previous month's days
  const prevMonthDays = firstDayOfWeek;
  const prevMonthDate = new Date(today.getFullYear(), today.getMonth(), 0);
  for (let i = prevMonthDays; i > 0; i--) {
    days.push({
      day: prevMonthDate.getDate() - i + 1,
      isToday: false,
      isPrevMonth: true,
    });
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    const currentDate = new Date(today.getFullYear(), today.getMonth(), i);
    days.push({
      day: i,
      isToday: isSameDay(today, currentDate),
      isPrevMonth: false,
    });
  }

  // Fill remaining cells
  while (days.length < totalCells) {
    days.push({
      day: null,
      isToday: false,
      isPrevMonth: false,
    });
  }

  return days;
};
