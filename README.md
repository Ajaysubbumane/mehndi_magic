# Mehndi Magic

A culturally-inspired Mehndi Management System built with Django and React.

## Tech Stack

**Backend**: Django, Django REST Framework, PostgreSQL, JWT, django-environ  
**Frontend**: React, Vite, Tailwind CSS, React Router, Zustand, Axios  
**Dev Tools**: GitHub Issues, Labels, pgAdmin, VS Code

### Backend Setup

1. Navigate to `/backend`
2. Create a virtual environment: python -m venv venv .\venv\Scripts\activate
3. Install dependencies: pip install -r requirements.txt
4. Create `.env` file: DEBUG=True SECRET_KEY=your-secret-key DB_NAME=mehndi_db DB_USER=postgres DB_PASSWORD=postgres DB_HOST=localhost DB_PORT=5432 CORS_ALLOWED_ORIGINS=http://localhost:5173
5. Run migrations: python manage.py makemigrations python manage.py migrate
6. Create superuser: python manage.py createsuperuser
7. Start server: python manage.py runserver
