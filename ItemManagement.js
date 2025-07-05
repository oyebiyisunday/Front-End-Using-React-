import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createItem, updateItem, deleteItem } from '../graphql/mutations';
import { listItems } from '../graphql/queries';

export default function ItemManagement() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    const result = await API.graphql(graphqlOperation(listItems));
    setItems(result.data.listItems.items);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.graphql(graphqlOperation(createItem, { input: formData }));
    fetchItems();
    setFormData({ name: '', description: '', price: '' });
  };

  return (
    <div className="item-management">
      <h2>Item Management</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Item Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          name="price"
          type="number"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Item</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>${item.price}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}