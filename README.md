# MEDIC-SAGE 

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-v18-blue.svg)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v4.4+-green.svg)](https://www.mongodb.com/)

Your intelligent health companion for symptom analysis and disease prediction.

## 🌟 Overview

Medic-Sage is an advanced healthcare application that serves as your virtual medical assistant. Leveraging cutting-edge algorithms and a comprehensive medical database, it provides accurate disease predictions based on user-reported symptoms. Beyond diagnosis, the platform offers detailed information about various health conditions, recommended treatments, and preventive measures.

### Key Capabilities
- Real-time symptom analysis and disease prediction
- Comprehensive disease information database
- Local hospital finder
- Personalized health recommendations
- User-friendly interface with responsive design

## ✨ Features

### 1. Symptom Analysis Engine
- Interactive symptom input interface
- Multi-symptom correlation analysis
- AI-powered disease prediction
- Confidence score for each prediction

### 2. Disease Encyclopedia
- Detailed disease descriptions
- Causes and risk factors
- Common symptoms and progression
- Treatment options and protocols
- Prevention guidelines

### 3. Hospital Locator
- GPS-based hospital search
- Facility information and specialties
- Distance calculation
- Contact information and directions

### 4. Health Management
- Personalized health tips
- Medication reminders
- Lifestyle recommendations
- Emergency contact management

## 🛠️ Tech Stack

### Frontend
- React.js (v18+)
- Styled Components
- Material-UI
- Redux for state management
- React Router for navigation

### Backend
- Node.js (v14+)
- Express.js
- JWT authentication
- RESTful API architecture

### Database
- MongoDB
- Mongoose ODM

### Additional Tools
- Axios for HTTP requests
- Socket.io for real-time features
- Jest for testing
- ESLint for code quality
- Prettier for code formatting

## 🚀 Installation

### Prerequisites
- Node.js (v14 or later)
- MongoDB (v4.4 or later)
- npm or yarn package manager

### Setup Instructions

1. **Clone the Repository**
```bash
git clone https://github.com/username/medic-sage.git
cd medic-sage
```

2. **Backend Setup**
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Update environment variables
# Edit .env with your configuration
```

3. **Frontend Setup**
```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Update environment variables
# Edit .env with your configuration
```

4. **Start the Application**
```bash
# Start backend server (from backend directory)
npm run dev

# Start frontend application (from frontend directory)
npm start
```

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```plaintext
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

#### Frontend (.env)
```plaintext
REACT_APP_API_URL=http://localhost:5000
REACT_APP_GOOGLE_MAPS_KEY=your_google_maps_api_key
```

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api/v1
```

### Main Endpoints

#### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/profile` - Get user profile

#### Symptoms
- `GET /symptoms` - Get all symptoms
- `POST /symptoms/analyze` - Analyze symptoms
- `GET /symptoms/:id` - Get symptom details

#### Diseases
- `GET /diseases` - Get all diseases
- `GET /diseases/:id` - Get disease details
- `GET /diseases/search` - Search diseases

#### Hospitals
- `GET /hospitals/nearby` - Find nearby hospitals
- `GET /hospitals/:id` - Get hospital details

## 🔜 Future Enhancements

- AI-powered chat support
- Telemedicine integration
- Health record management
- Mobile application development
- Multi-language support
- Advanced analytics dashboard
- Integration with wearable devices

## 🤝 Contributing

We welcome contributions to Medic-Sage! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Project Maintainer - [@username](https://github.com/username)

Project Link: [https://github.com/username/medic-sage](https://github.com/username/medic-sage)

## 🙏 Acknowledgments

- Medical data providers
- Open source community
- All contributors
- Testing team members

---

Made with ❤️ by the Medic-Sage Team
