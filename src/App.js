import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FuelOrderForm from './components/FuelOrderForm';
import Logbook from './components/Logbook';

function App() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      timestamp: '12:30 PM',
      aircraft: 'A320',
      fuelType: 'Jet-A',
      amount: 2000,
      location: 'Gate A1',
      nozzle: 'Under-wing',
      status: 'Pending'
    },
    {
      id: 2,
      timestamp: '12:15 PM',
      aircraft: 'C172',
      fuelType: 'Avgas 100LL',
      amount: 150,
      location: 'Hangar 3',
      nozzle: 'Over-wing',
      status: 'Pending'
    }
  ]);

  const addOrder = (newOrder) => {
    const order = {
      ...newOrder,
      id: orders.length + 1,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Pending'
    };
    setOrders([order, ...orders]);
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <FuelOrderForm onAddOrder={addOrder} />
        <Logbook orders={orders} />
      </main>
    </div>
  );
}

export default App;
