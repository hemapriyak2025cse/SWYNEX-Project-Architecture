# DreamBoard — SWYNEX Task 1: Project Architecture

DreamBoard is a personal goal planning and progress tracking web application. It helps users create goals, break them into tasks, set deadlines, and monitor progress from a dashboard.

## Technology Stack
- Frontend: React + TypeScript
- Styling: Tailwind CSS
- Backend: Node.js + Express.js
- Database: SQLite (`better-sqlite3`)
- Authentication: JWT
- Password hashing: bcrypt
- API testing: Postman

## Core Features (V1)
- User registration and login
- Create, view, update, and delete goals
- Categorize goals and set priority/deadlines
- Add and manage tasks under each goal
- Automatically calculate goal progress
- Dashboard statistics and upcoming deadlines

## Architecture
The application follows a three-layer architecture:

1. **Presentation layer:** React + TypeScript frontend.
2. **Application layer:** Express REST API, authentication, validation, and business logic.
3. **Data layer:** SQLite database storing users, goals, and tasks.

Request flow: Browser → React UI → Express API → SQLite database.

## Data Model
- **User:** id, name, email, password_hash, created_at
- **Goal:** id, user_id, title, description, category, priority, target_date, status, created_at, updated_at
- **Task:** id, goal_id, title, due_date, is_completed, created_at, updated_at

Relationships: One user can have many goals; one goal can have many tasks.

## Goal Progress
`progress = (completed_tasks / total_tasks) * 100`

A goal with no tasks has 0% progress.

## Planned API Routes
| Method | Route | Purpose |
|---|---|---|
| POST | `/api/auth/register` | Register |
| POST | `/api/auth/login` | Login |
| GET | `/api/auth/me` | Current user |
| GET/POST | `/api/goals` | List/create goals |
| GET/PUT/DELETE | `/api/goals/:id` | Read/update/delete a goal |
| GET/POST | `/api/goals/:goalId/tasks` | List/create tasks |
| PUT/DELETE | `/api/tasks/:id` | Update/delete task |
| GET | `/api/dashboard/stats` | Dashboard statistics |
| GET | `/api/dashboard/upcoming` | Upcoming deadlines |

All private routes require authentication and must enforce user ownership.

## Repository Structure
```text
SWYNEX-Project-Architecture/
├── README.md
├── .gitignore
├── docs/
│   └── architecture.md
├── database/
│   └── schema.sql
├── backend/
│   ├── package.json
│   └── src/
│       └── server.js
└── frontend/
    ├── package.json
    └── src/
        └── README.md
```

## Status
This is an architecture and starter repository for Task 1. The application implementation is planned for subsequent development tasks.
