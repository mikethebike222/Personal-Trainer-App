# Jacob Oestreicher Coaching Web App

Building a web application for Jacob Oestreicher's coaching business.

**TikTok**: [@jacoboestreichercoaching](https://www.tiktok.com/@jacoboestreichercoaching)

Web app link can be found here(): https://gentle-cliff-05572e80f.6.azurestaticapps.net/

## Project Overview

Full-stack web application with:
- **Frontend**: React.js with routing
- **Backend**: Django REST API
- **Database**: PostgreSQL (locally containerized with Docker)
- **Hosting**: Azure Services(Azure Static Web Apps, Azure Functions, Azure Web Services, Azure PostgreSQL Database)

## Getting Started

### Pre-reqs
- Node.js and npm
- Docker and Docker Compose
- Git

### Frontend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/mikethebike222/Personal-Trainer-App.git
   cd Personal-Trainer-App
   ```

2. Install frontend dependencies:
   ```bash
   npm i
   npm i react-router-dom
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

### Backend & Database Setup
1. Navigate to the project root and start the backend services:
   ```bash
   docker-compose up -d --build
   ```

   This will start:
   - PostgreSQL database on port 5432
   - Django backend on port 8000
   - Adminer (database admin) on port 8080

2. The backend automatically runs database migrations on startup.

### Access Points
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000

### API Endpoints
- `POST /submit/` - Submit user form data
- More endpoints may be added in future as needed

