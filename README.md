# Jacob Oestreicher Coaching Web App

Building a web application for Jacob Oestreicher's coaching business.

**TikTok**: [@jacoboestreichercoaching](https://www.tiktok.com/@jacoboestreichercoaching)

## Project Overview

Full-stack web application with:
- **Frontend**: React.js with routing
- **Backend**: Django REST API
- **Database**: PostgreSQL (containerized with Docker)
- **Admin Interface**: Adminer for database management

## Getting Started

### Prerequisites
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
- **Frontend**: http://localhost:3000 (or your Vite dev server port)
- **Backend API**: http://localhost:8000
- **Database Admin (Adminer)**: http://localhost:8080
  - Admin info is private

### API Endpoints
- `POST /sends/` - Submit user form data
- More endpoints will be added as development continues

## Development Status
**In Active Development**

The backend logic and additional features are still being finalized.

## Tech Stack
- **Frontend**: React, React Router
- **Backend**: Django, Django REST Framework
- **Database**: PostgreSQL
- **Containerization**: Docker, Docker Compose
- **Database Management**: Adminer