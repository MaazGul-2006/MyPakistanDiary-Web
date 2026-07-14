import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function DashboardPage() {
  const { user, logout } = useContext(AuthContext);
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/entries', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      setEntries(data.data || []);
    } catch (error) {
      console.error('Error fetching entries:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-green-700 to-green-900 text-white p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">🇵🇰 My Pakistan Travel Diary - V5</h1>
          <div className="flex gap-4 items-center">
            <span>Welcome, {user?.name}</span>
            <button
              onClick={logout}
              className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Stats Cards */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-semibold">Total Entries</h3>
            <p className="text-4xl font-bold text-green-700">{entries.length}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-semibold">Universities Connected</h3>
            <p className="text-4xl font-bold text-blue-700">5</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-semibold">Cities Explored</h3>
            <p className="text-4xl font-bold text-purple-700">5</p>
          </div>
        </div>

        {/* Entries List */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Recent Entries</h2>
          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : entries.length === 0 ? (
            <p className="text-gray-500">No entries yet. Start by adding your first travel memory!</p>
          ) : (
            <div className="space-y-4">
              {entries.map((entry) => (
                <div key={entry._id} className="border-l-4 border-green-700 pl-4 py-2">
                  <h3 className="font-semibold text-lg">{entry.place}</h3>
                  <p className="text-sm text-gray-600">{entry.city} • {new Date(entry.date).toLocaleDateString()}</p>
                  <p className="text-gray-700 mt-2">{entry.description}</p>
                  <div className="flex gap-4 mt-2 text-sm">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">{entry.mood}</span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded">⭐ {entry.rating}/5</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded">{entry.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
