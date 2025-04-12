import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/api/projects');
        setProjects(response.data);
      } catch (error) {
        setError('Failed to fetch projects');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleAddProject = async () => {
    if (!newProjectName) {
      setError('Project name is required');
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post('/api/projects', { name: newProjectName });
      setProjects([...projects, response.data]);
      setNewProjectName('');
      setError(null);
    } catch (error) {
      setError('Failed to add project');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      {error && <div className="error-message">{error}</div>}
      <div className="add-project">
        <input
          type="text"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
          placeholder="New project name"
          disabled={isLoading}
        />
        <button onClick={handleAddProject} disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add Project'}
        </button>
      </div>
      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;