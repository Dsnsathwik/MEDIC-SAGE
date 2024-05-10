import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DiseasePedia.css';

const DiseasePedia = () => {
  const [diseases, setDiseases] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/disease/fetch-all');
        setDiseases(response.data.disease);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Disease Encyclopedia</h2>
      <div className="disease-list">
        {diseases.map((disease, index) => (
          <div key={index} className="disease-item">
            <h3>{disease.disease}</h3>
            <p><strong>Summary:</strong> {disease.summary}</p>
            <p><strong>Precaution:</strong> {disease.precaution}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiseasePedia;
