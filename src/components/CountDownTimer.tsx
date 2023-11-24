'use client'
import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialTime: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className="flex text-sm ml-3">
        <div className="box-border border bg-[#ff6801] p-2">{formatTime(time).split(':')[0]}</div>
        <span className="self-center text-[#ff6801] mx-1">:</span>
        <div className="box-border border bg-[#ff6801] p-2">{formatTime(time).split(':')[1]}</div>
        <span className="self-center text-[#ff6801] mx-1">:</span>
        <div className="box-border border bg-[#ff6801] p-2">{formatTime(time).split(':')[2]}</div>
    </div>
  );
};

export default CountdownTimer;