import React, { useState, useEffect } from 'react';
import { ConfirmationNumber } from '@mui/icons-material';
import './QueueManagement.css';

const QUEUE_JOIN_KEY = 'queueJoinTime'; // Key for storing the last join time
const COOLDOWN_TIME = 1 * 60 * 1000; // 30 minutes in milliseconds

interface QueueManagementProps {
  username: string;
}

const QueueManagement: React.FC<QueueManagementProps> = ({ username }) => {
  const [queue, setQueue] = useState<number[]>([]);
  const [ticketNumber, setTicketNumber] = useState<number | null>(null);
  const [hasJoinedQueue, setHasJoinedQueue] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [joinCount, setJoinCount] = useState<number>(0); 

  
  const calculateTimeLeft = () => {
    const lastJoinTime = localStorage.getItem(QUEUE_JOIN_KEY);
    if (lastJoinTime) {
      const elapsed = Date.now() - parseInt(lastJoinTime, 10);
      if (elapsed < COOLDOWN_TIME) {
        setTimeLeft(COOLDOWN_TIME - elapsed);
        setHasJoinedQueue(true);
      } else {
        setTimeLeft(0);
        setHasJoinedQueue(false);
      }
    } else {
      setTimeLeft(0);
      setHasJoinedQueue(false);
    }
  };

  
  useEffect(() => {
    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  const joinQueue = () => {
    if (!hasJoinedQueue) {
      const newTicket = queue.length > 0 ? queue[queue.length - 1] + 1 : 1;

      if (joinCount === 0) {
        
        setQueue([...queue, newTicket]);
      } else if (joinCount === 1) {
       
        setQueue([newTicket, ...queue]);
      } else if (joinCount >= 2) {
        
        setQueue([...queue, newTicket]);
      }

      setTicketNumber(newTicket);
      setJoinCount(joinCount + 1); 
      localStorage.setItem(QUEUE_JOIN_KEY, Date.now().toString());
      setHasJoinedQueue(true);
    } else {
      alert(`You cannot join the queue yet. Please wait for ${formatTimeLeft(timeLeft)}.`);
    }
  };

  
  const formatTimeLeft = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    return `${minutes}m ${seconds}s`;
  };

  return (
    <div className="queue-container">
      <h2><ConfirmationNumber /> Queue Management</h2>
      <p>Welcome, {username}! We hope you have a wonderful experience on our App. we hope to serve you better.</p>
      <button onClick={joinQueue} className="join-queue" disabled={hasJoinedQueue}>
        Join Queue
      </button>
      {ticketNumber && <p>Your ticket number is: {ticketNumber}</p>}
      <div className="queue-status">
        <h4>Queue Status:</h4>
        {queue.length > 0 ? (
          queue.map((ticket, index) => <p key={index}>Ticket #{ticket}</p>)
        ) : (
          <p>No one in queue.</p>
        )}
      </div>
      {hasJoinedQueue && <p>Time left before you can join again: {formatTimeLeft(timeLeft)}</p>}
    </div>
  );
};

export default QueueManagement;
