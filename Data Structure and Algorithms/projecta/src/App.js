import React, { useState } from 'react';
import './App.css';

const ExpensiveItemTracker = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Rolex Watch', price: 15000 },
    { id: 2, name: 'MacBook Pro', price: 2500 },
    { id: 3, name: 'Diamond Ring', price: 8000 }
  ]);

  const [newItem, setNewItem] = useState({ name: '', price: '' });

  const getMostExpensiveItem = () => {
    return items.reduce((max, item) =>
      item.price > max.price ? item : max,
      { price: -Infinity }
    );
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.price) {
      setItems([...items, {
        id: items.length + 1,
        name: newItem.name,
        price: parseFloat(newItem.price)
      }]);
      setNewItem({ name: '', price: '' });
    }
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const mostExpensive = getMostExpensiveItem();

  return (
    <div className="tracker-container">
      <div className="card">
        <div className="card-header">
          <h2>Most Expensive Item Tracker</h2>
          <span role="img" aria-label="crown" className="crown">👑</span>
        </div>

        <form onSubmit={handleAddItem} className="add-item-form">
          <input
            type="text"
            placeholder="Item name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            className="input"
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            className="input"
            required
          />
          <button type="submit" className="add-button">
            ➕ Add
          </button>
        </form>

        {items.length > 0 ? (
          <div className="items-list">
            <div className="most-expensive-item">
              <h3>Most Expensive: {mostExpensive.name}</h3>
              <p>${mostExpensive.price.toLocaleString()}</p>
            </div>

            {items.sort((a, b) => b.price - a.price).map(item => (
              <div key={item.id} className={`item ${item.id === mostExpensive.id ? 'highlight' : ''}`}>
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price.toLocaleString()}</p>
                </div>
                <button onClick={() => handleDeleteItem(item.id)} className="delete-button">🗑️</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-items">No items added yet. Add some items to track!</div>
        )}
      </div>
    </div>
  );
};

export default ExpensiveItemTracker;