import React, { useState } from 'react';
import { ConfirmationNumber } from '@mui/icons-material';
import './QueueManagement.css';

const QueueManagement: React.FC = () => {
  const [queue, setQueue] = useState<number[]>([]);
  const [ticketNumber, setTicketNumber] = useState<number | null>(null);

  const joinQueue = () => {
    const newTicket = queue.length > 0 ? queue[queue.length - 1] + 1 : 1;
    setQueue([...queue, newTicket]);
    setTicketNumber(newTicket);
  };

  return (
    <div className="container">
      <h2><ConfirmationNumber /> Queue Management</h2>
      <button onClick={joinQueue} className="join-queue">Join Queue</button>
      {ticketNumber && <p>Your ticket number is: {ticketNumber}</p>}
      <div className="queue-status">
        <h4>Queue Status:</h4>
        {queue.length > 0 ? (
          queue.map((ticket, index) => <p key={index}>Ticket #{ticket}</p>)
        ) : (
          <p>No one in queue.</p>
        )}
      </div>
    </div>
  );
};

export default QueueManagement;
