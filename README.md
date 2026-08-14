# Storyline Design & Events — Full-Stack Website

**Premium Event Styling & Production • Pune**  
Weddings | Corporate | Design Studio

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Java 18, Spring Boot 3.4.1, Maven |
| Frontend | React 18, Vite, JavaScript |
| Database | MySQL 8 |
| Styling | Vanilla CSS (custom design system) |

## Project Structure

```
storyline website/
├── backend/                    # Spring Boot REST API
│   ├── src/main/java/com/storyline/events/
│   │   ├── controller/         # REST endpoints
│   │   ├── service/            # Business logic
│   │   ├── repository/         # Spring Data JPA
│   │   ├── model/              # JPA entities
│   │   ├── dto/                # Request/Response DTOs
│   │   ├── config/             # CORS, Web config
│   │   └── exception/          # Global error handling
│   ├── src/main/resources/
│   │   ├── application.properties
│   │   └── data.sql            # Seed data
│   └── pom.xml
│
├── frontend/                   # React + Vite
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Page-level components
│   │   ├── services/           # API layer (Axios)
│   │   ├── hooks/              # Custom React hooks
│   │   └── styles/             # CSS design system
│   └── package.json
│
└── README.md
```

## Getting Started

### Prerequisites
- JDK 18+
- Maven 3.9+
- Node.js 18+
- MySQL 8

### 1. Database Setup

```sql
CREATE DATABASE IF NOT EXISTS storyline_db;
```

The application will auto-create tables and seed data on first run.

### 2. Backend

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

Backend runs on **http://localhost:8080**

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on **http://localhost:5173**

## API Endpoints

### Public

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/services | All services |
| GET | /api/portfolio | All portfolio items |
| GET | /api/portfolio/featured | Featured projects |
| GET | /api/testimonials | All testimonials |
| GET | /api/team | Team members |
| GET | /api/packages | Pricing packages |
| POST | /api/inquiries | Submit inquiry |

### Admin

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/inquiries | List all inquiries |
| PATCH | /api/inquiries/:id/status | Update inquiry status |
| DELETE | /api/inquiries/:id | Delete inquiry |
| POST | /api/admin/portfolio | Add/update portfolio |
| DELETE | /api/admin/portfolio/:id | Delete portfolio item |
| POST | /api/admin/testimonials | Add/update testimonial |
| POST | /api/admin/team | Add/update team member |

## Pages

- **Home** — Hero, disciplines split, featured projects, process, testimonials, inquiry form
- **Weddings** — Services, gallery, packages, testimonials
- **Corporate** — Services, portfolio, packages
- **Design Studio** — 43 deliverables, filterable catalog
- **Portfolio** — Filterable project case studies
- **About** — Vision, mission, values, brand pillars, team
- **Contact** — Info cards, segmented inquiry form
- **Admin** — Dashboard, inquiry management (/admin)

## Configuration

Update `backend/src/main/resources/application.properties` for:
- MySQL credentials
- Email SMTP settings (for inquiry notifications)
- CORS allowed origins
