import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DiseasePrediction.css';

const DiseasePrediction = () => {
  const [symptoms, setSymptoms] = useState('');
  const [likeableSymptoms, setLikeableSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [predictionResult, setPredictionResult] = useState('');
  const [diseaseInfo, setDiseaseInfo] = useState(null);

  const handleInputChange = (e) => {
    setSymptoms(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/disease-prediction/symptomsSuggestions', { userSymps: symptoms });
      setLikeableSymptoms(response.data.suggestedSymptoms);
    } catch (error) {
      console.error('Error suggesting symptoms:', error);
    }
  };

  const handleSymptomClick = (symptom) => {
    const isSelected = selectedSymptoms.includes(symptom);
    let updatedSelectedSymptoms = [];
    if (isSelected) {
      updatedSelectedSymptoms = selectedSymptoms.filter((s) => s !== symptom);
    } else {
      updatedSelectedSymptoms = [...selectedSymptoms, symptom];
    }
    setSelectedSymptoms(updatedSelectedSymptoms);
  };

  const handlePredictDisease = async () => {
    try {
      const response = await axios.post('http://localhost:4000/disease-prediction', { userSymps: selectedSymptoms });
      setPredictionResult(response.data.predDisease);
    } catch (error) {
      console.error('Error predicting disease:', error);
    }
  };

  const fetchDiseaseInfo = async (diseaseName) => {
    try {
      const response = await axios.post('http://localhost:4000/api/disease/fetch-by-name', { diseaseName });
      setDiseaseInfo(response.data.disease);
    } catch (error) {
      console.error('Error fetching disease info:', error);
    }
  };

  useEffect(() => {
    if (predictionResult) {
      fetchDiseaseInfo(predictionResult);
    }
  }, [predictionResult]);

  const handleClear = () => {
    setSymptoms('');
    setLikeableSymptoms([]);
    setSelectedSymptoms([]);
    setPredictionResult('');
    setDiseaseInfo(null);
  };

  return (
    <div className="disease-prediction-container">
      <h2 className="disease-prediction-heading">Disease Prediction</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="symptoms">Enter Symptoms:</label>
            <input
              type="text"
              id="symptoms"
              value={symptoms}
              onChange={handleInputChange}
              placeholder="E.g., fever, headache, cough"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" style={{ marginRight: '15px' }}>Continue</button>
            <button className="clear-button" onClick={handleClear}>Clear</button>
          </div>
        </form>
        {likeableSymptoms.length > 0 && (
          <div>
            <p>Likeable Symptoms:</p>
            <div className="symptom-buttons-container">
              {likeableSymptoms.map((symptom, index) => (
                <button
                  key={index}
                  className={`symptom-button ${selectedSymptoms.includes(symptom) ? 'selected' : ''}`}
                  onClick={() => handleSymptomClick(symptom)}
                >
                  {symptom}
                </button>
              ))}
            </div>
            <div>
              <button onClick={handlePredictDisease} className="predict-disease-button">Predict Disease</button>
            </div>
          </div>
        )}
        {predictionResult && (
          <div>
            <p className="prediction-result">Prediction Result: {predictionResult}</p>
            {diseaseInfo && (
              <div>
                <h3 className="Heading">Disease Summary : </h3>
                <p>{diseaseInfo.summary}</p>
                <h3 className="Heading">Precautions : </h3>
                <p>{diseaseInfo.precaution}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseasePrediction;
