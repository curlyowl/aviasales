import React from 'react';
import './Ticket.css';

export const Ticket = () => {
  return (
    <div className="App-ticket">
      <header className="App-ticketHeader">
        <div>
          <span className="App-ticketPrice">13&nbsp;400&nbsp;P</span>
        </div>
        <div>
          <img className="App-ticketLogo" src="//pics.avs.io/99/36/S7.png" />
        </div>
      </header>
      <section className="App-ticketBody">
        <div className="App-ticketRow">
          <div className="App-ticketDetails">
            <div className="App-ticketTitle">MOW – HKT</div>
            <div className="App-ticketInfo">10:45 – 08:00</div>
          </div>
          <div className="App-ticketDetails">
            <div className="App-ticketTitle">В пути </div>
            <div className="App-ticketInfo">21ч 15м</div>
          </div>
          <div className="App-ticketDetails">
            <div className="App-ticketTitle">2 пересадки</div>
            <div className="App-ticketInfo">HKG, JNB</div>
          </div>
        </div>
        <div className="App-ticketRow">
          <div className="App-ticketDetails">
            <div className="App-ticketTitle">MOW – HKT</div>
            <div className="App-ticketInfo">11:20 – 00:50</div>
          </div>
          <div className="App-ticketDetails">
            <div className="App-ticketTitle">В пути </div>
            <div className="App-ticketInfo">13ч 30м</div>
          </div>
          <div className="App-ticketDetails">
            <div className="App-ticketTitle">1 пересадки</div>
            <div className="App-ticketInfo">HKG</div>
          </div>
        </div>
      </section>
    </div>
  );
}