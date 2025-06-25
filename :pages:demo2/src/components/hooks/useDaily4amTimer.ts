
import { useEffect, useState } from "react";

// Returns a string in HH:MM:SS format, always counting down to next 12 AM (midnight) device-local time.
export function useDaily4amTimer() {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeftToMidnight());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeftToMidnight());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Always returns hh:mm:ss or mm:ss or 00:00
  function formatTime(ms: number) {
    if (ms < 0) ms = 0;
    let totalSeconds = Math.floor(ms / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  return formatTime(timeLeft);
}

// Helper: returns ms until next 12 AM (midnight) in user's local time.
function calculateTimeLeftToMidnight(): number {
  const now = new Date();
  const nextMidnight = new Date(now);

  // Set to next day's midnight
  nextMidnight.setHours(0, 0, 0, 0);
  if (now >= nextMidnight) {
    // If already passed midnight for today, set to tomorrow's midnight
    nextMidnight.setDate(nextMidnight.getDate() + 1);
  }

  return nextMidnight.getTime() - now.getTime();
}

