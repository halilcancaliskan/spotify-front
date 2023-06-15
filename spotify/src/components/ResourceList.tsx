import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './resources.css'; // Importation du fichier CSS
import 'bootstrap/dist/css/bootstrap.min.css';


// ...


interface Resource {
  id: number;
  name: string;
}

const ResourceList: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [formData, setFormData] = useState({
    name: '',
  });

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const response = await axios.get('/resources');
      setResources(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post('/resources', formData);
      setResources([...resources, response.data]);
      setFormData({ name: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Resource</h2>

      {/* Formulaire */}
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Titre</label>
          <input type="text" className="form-control" id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input type="text" className="form-control" id="image" />
        </div>
        <div className="mb-3">
          <label htmlFor="link" className="form-label">Lien du son</label>
          <input type="text" className="form-control" id="link" />
        </div>
        <button type="submit" className="btn btn-primary">Add Resource</button>
      </form>

      {/* Liste des ressources */}
      <ul>
        {resources.map((resource) => (
          <li key={resource.id}>{resource.name}</li>
        ))}
      </ul>
    </div>
  );

};

export default ResourceList;
