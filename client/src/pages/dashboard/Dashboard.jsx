import React, { useState } from 'react';

const Dashboard = () => {
  // Sample project data
  const [projects, setProjects] = useState([
    { id: 1, name: 'Website Redesign', status: 'In Progress', dueDate: '2025-02-10' },
    { id: 2, name: 'Mobile App Launch', status: 'Completed', dueDate: '2025-01-15' },
    { id: 3, name: 'Marketing Campaign', status: 'Pending', dueDate: '2025-03-05' },
  ]);

  // Summary data
  const completed = projects.filter((project) => project.status === 'Completed').length;
  const inProgress = projects.filter((project) => project.status === 'In Progress').length;
  const pending = projects.filter((project) => project.status === 'Pending').length;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h1>Project Management Dashboard</h1>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Add Project
        </button>
      </header>

      {/* Summary Section */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#f9f9f9',
          padding: '15px',
          borderRadius: '5px',
          marginBottom: '20px',
        }}
      >
        <div>
          <h3>Completed</h3>
          <p>{completed}</p>
        </div>
        <div>
          <h3>In Progress</h3>
          <p>{inProgress}</p>
        </div>
        <div>
          <h3>Pending</h3>
          <p>{pending}</p>
        </div>
      </section>

      {/* Project List */}
      <section>
        <h2>Projects</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Due Date</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.status}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.dueDate}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <button
                    style={{
                      padding: '5px 10px',
                      backgroundColor: '#007BFF',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '3px',
                      cursor: 'pointer',
                    }}
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      padding: '5px 10px',
                      backgroundColor: '#DC3545',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      marginLeft: '10px',
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;
