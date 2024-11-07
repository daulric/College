import React, { useEffect, useState } from 'react';
import './App.css';

// We created the bubble sort algorithm here
function BubbleSort_Item(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j].price > arr[i].price) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

const ExpensiveItemTracker = () => {
  // Here we used a Array Data Structure 
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', price: '' });
  
  useEffect(() => {
    console.log("running!")
    let data = localStorage.getItem("items_list")
    const items_list = data ? JSON.parse(data) : [];
    setItems(items_list);
  }, [])

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.price) {
      setItems(prev => {
        let added_items = [...prev, {
          id: items.length + 1,
          name: newItem.name,
          price: parseFloat(newItem.price)
        }];

        localStorage.setItem('items_list', JSON.stringify(added_items));
        return added_items;
      });
  
      setNewItem({ name: '', price: '' });
    }
  };

  const handleDeleteItem = (id) => {
    setItems(prev => {
      let filtered_items = prev.filter(item => item.id !== id);
      localStorage.setItem("items_list", JSON.stringify(filtered_items));
      return filtered_items;
    });
  };

  const mostExpensive = BubbleSort_Item(items)[0];

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