import { useState, useEffect } from "react";
import { getMonthData } from "../utils/dateUtils";

const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState([]);
  const [highlightToday, setHighlightToday] = useState(false);

  useEffect(() => {
    setCalendarDays(getMonthData(currentDate));
  }, [currentDate]);

  const goToToday = () => {
    const today = new Date();
    setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));
    setHighlightToday(true);
  };

  // Remove highlight when clicking outside the calendar
  useEffect(() => {
    const handleClickOutside = (event) => {
      const calendarContainer = document.getElementById("calendar-container");
      if (calendarContainer && !calendarContainer.contains(event.target)) {
        setHighlightToday(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return { currentDate, setCurrentDate, calendarDays, highlightToday, goToToday };
};

export default useCalendar;
