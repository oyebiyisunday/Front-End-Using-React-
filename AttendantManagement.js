import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createAttendant, updateAttendant, deleteAttendant } from '../graphql/mutations';
import { listAttendants } from '../graphql/queries';

export default function AttendantManagement() {
  const [attendants, setAttendants] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    fetchAttendants();
  }, []);

  async function fetchAttendants() {
    const result = await API.graphql(graphqlOperation(listAttendants));
    setAttendants(result.data.listAttendants.items);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.graphql(graphqlOperation(createAttendant, { input: formData }));
    fetchAttendants();
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="attendant-management">
      <h2>Attendant Management</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Attendant Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Attendant</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendants.map(attendant => (
            <tr key={attendant.id}>
              <td>{attendant.name}</td>
              <td>{attendant.email}</td>
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