import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Resource {
  id: number;
  name: string;
}

const ResourceList: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get('/resources');
        setResources(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResources();
  }, []);

  return (
    <div>
      <h2>Resource List</h2>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id}>{resource.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
