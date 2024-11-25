import { useEffect, useState } from 'react';
import './App.css';
import LinkedList from './modules/linkedlist';

const ExpensiveItemTracker = () => {
  const [items, setItems] = useState(new LinkedList());
  const [newItem, setNewItem] = useState({ name: '', price: '' });
  const [editingItem, setEditingItem] = useState(null);
  const [editedItem, setEditedItem] = useState({ name: '', price: '' });
 
  useEffect(() => {
    let list = new LinkedList();
    let data = localStorage.getItem("items_list");
    const items_list = JSON.parse(data);
    if (items_list === null || items_list.length === 0) return;
    list.toList(items_list);
    list.sort((a, b) => a.price > b.price);
    setItems(list);
  }, []);

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.price) {
      let new_list = new LinkedList();
      items.transferTo(new_list);
      new_list.push({
        id: items.size() + 1,
        name: newItem.name,
        price: parseFloat(newItem.price)
      });
      new_list.sort((a, b) => a.price > b.price);
      localStorage.setItem('items_list', JSON.stringify(new_list.toArray()));
      setItems(new_list);
      setNewItem({ name: '', price: '' });
    }
  };

  const handleDeleteItem = (id) => {
    let [searched] = items.search({
      id: id,
    });
    if (searched === false) return;
    let new_list = new LinkedList();
    items.remove({
      id: id,
    });
    items.transferTo(new_list);
    new_list.sort((a, b) => a.price > b.price);
    setItems(new_list);
    localStorage.setItem("items_list", JSON.stringify(new_list.toArray()));
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
    setEditedItem({ 
      name: item.name, 
      price: item.price.toString() 
    });
  };

  const handleSaveEdit = () => {
    if (!editingItem || !editedItem.name.trim() || !editedItem.price) return;

    let new_list = new LinkedList();
    items.transferTo(new_list);

    // Find and update the item
    const updatedItems = new_list.toArray().map(item => 
      item.id === editingItem.id ? { 
            ...item, 
            name: editedItem.name.trim(), 
            price: parseFloat(editedItem.price) 
          } 
        : item
    );

    // Create a new linked list from updated items
    let updatedList = new LinkedList();
    updatedList.toList(updatedItems);
    updatedList.sort((a, b) => a.price > b.price);

    localStorage.setItem('items_list', JSON.stringify(updatedList.toArray()));
    setItems(updatedList);
    setEditingItem(null);
    setEditedItem({ name: '', price: '' });
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
    setEditedItem({ name: '', price: '' });
  };

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
        {items.size() > 0 ? (
          <div className="items-list">
            <div className="most-expensive-item">
              <h3>Most Expensive: {items.first()?.name}</h3>
              <p>${items.first()?.price.toLocaleString()}</p>
            </div>
            {items.toArray().map(item => (
              <div key={item.id} className={`item ${item.id === items.first()?.id ? 'highlight' : ''}`}>
                {editingItem && editingItem.id === item.id ? (
                  <div className="edit-item">
                    <div className="edit-inputs">
                      <input 
                        type="text" 
                        value={editedItem.name}
                        onChange={(e) => setEditedItem({ ...editedItem, name: e.target.value })}
                        className="input edit-input"
                        placeholder="Item name"
                        autoFocus
                      />
                      <input 
                        type="number" 
                        value={editedItem.price}
                        onChange={(e) => setEditedItem({ ...editedItem, price: e.target.value })}
                        className="input edit-input"
                        placeholder="Price"
                      />
                    </div>
                    <div className="edit-buttons">
                      <button onClick={handleSaveEdit} className="save-button">💾 Save</button>
                      <button onClick={handleCancelEdit} className="cancel-button">❌ Cancel</button>
                    </div>
                  </div>
                ) : (
                  <div className="item-content">
                    <div>
                      <h3>{item.name}</h3>
                      <p>${item.price.toLocaleString()}</p>
                    </div>
                    <div className="item-actions">
                      <button onClick={() => handleEditItem(item)} className="edit-button">✏️ Edit</button>
                      <button onClick={() => handleDeleteItem(item.id)} className="delete-button">🗑️</button>
                    </div>
                  </div>
                )}
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