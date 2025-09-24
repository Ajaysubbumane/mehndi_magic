# Mehndi Magic 🎨

A comprehensive full-stack Mehndi Management System designed to connect designers and clients seamlessly. Manage bookings, portfolios, and client interactions all in one place.

## 🛠 Tech Stack

- **Backend:** Django (REST Framework) & PostgreSQL for robust APIs and data storage
- **Frontend:** React with TailwindCSS and Vite for a fast, modern UI
- **Authentication:** Secure JWT-based authentication
- **State Management:** Zustand & TanStack Query for efficient client-side state and data fetching

## 📦 Folder Structure

```
mehndi_magic/
├── backend/   # Django backend code (APIs, models, authentication)
└── frontend/  # React frontend code (UI, state management)
```

## 🚀 Getting Started

### Backend Setup

1. **Navigate to the backend folder:**

```bash
cd backend
```

2. **Create and activate a virtual environment:**

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies:**

```bash
pip install -r requirements.txt
```

4. **Apply database migrations:**

```bash
python manage.py migrate
```

5. **Start the development server:**

```bash
python manage.py runserver
```

### Frontend Setup

1. **Navigate to the frontend folder:**

```bash
cd frontend
```

2. **Install frontend dependencies:**

```bash
npm install
```

3. **Start the frontend development server:**

```bash
npm run dev
```

The backend will be available at `http://localhost:8000` and the frontend at `http://localhost:5173` by default.
Make sure both servers are running for full functionality.
