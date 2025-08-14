import React from 'react';
import './Logbook.css';

const Logbook = ({ orders }) => {
  const getFuelIcon = (fuelType) => {
    return fuelType === 'Jet-A' ? '✈️' : '🛩️';
  };

  const getNozzleIcon = (nozzle) => {
    return nozzle === 'Under-wing' ? '⬇️' : '⬆️';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return '#ffc107';
      case 'In Progress': return '#17a2b8';
      case 'Completed': return '#28a745';
      default: return '#6c757d';
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">📋 Logbook</h2>
        <span className="order-count">{orders.length} orders</span>
      </div>
      <div className="card-body">
        {orders.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📝</div>
            <p>No fuel orders yet. Submit your first order above!</p>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order.id} className="order-item">
                <div className="order-header">
                  <div className="order-id">#{order.id}</div>
                  <div className="order-time">{order.timestamp}</div>
                  <div 
                    className="order-status"
                    style={{ backgroundColor: getStatusColor(order.status) }}
                  >
                    {order.status}
                  </div>
                </div>
                
                <div className="order-details">
                  <div className="detail-row">
                    <div className="detail-item">
                      <span className="detail-icon">✈️</span>
                      <span className="detail-label">Aircraft:</span>
                      <span className="detail-value">{order.aircraft}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">📍</span>
                      <span className="detail-label">Location:</span>
                      <span className="detail-value">{order.location}</span>
                    </div>
                  </div>
                  
                  <div className="detail-row">
                    <div className="detail-item">
                      <span className="detail-icon">{getFuelIcon(order.fuelType)}</span>
                      <span className="detail-label">Fuel:</span>
                      <span className="detail-value">{order.fuelType} ({order.amount}L)</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">{getNozzleIcon(order.nozzle)}</span>
                      <span className="detail-label">Nozzle:</span>
                      <span className="detail-value">{order.nozzle}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Logbook;
