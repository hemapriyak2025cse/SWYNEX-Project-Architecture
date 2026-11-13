# DreamBoard — Software Architecture

## 1. Product Overview
DreamBoard is a web application for planning personal goals, organizing tasks, and tracking progress.

## 2. Problem Statement
Users may struggle with scattered goal notes, forgotten deadlines, large goals that are difficult to break down, and inconsistent progress tracking.

## 3. Proposed Solution
Provide a centralized application for goal creation, task breakdown, deadlines, progress calculation, and dashboard insights.

## 4. Target Users
- College students
- Job seekers
- Working professionals
- Individuals focused on personal development

## 5. Functional Requirements
- Register and log in
- Create, view, update, and delete goals
- Categorize goals
- Set priority and target dates
- Create, update, delete, and complete tasks
- Calculate progress automatically
- Search and filter goals
- View dashboard statistics and upcoming deadlines

## 6. Non-Functional Requirements
Security, privacy, usability, maintainability, reliability, performance, scalability, and browser compatibility.

## 7. Technology Stack
React, TypeScript, Tailwind CSS, Node.js, Express.js, SQLite, better-sqlite3, JWT, bcrypt, Git, GitHub, Postman.

## 8. High-Level Architecture
Three layers:
- Presentation: React + TypeScript
- Application: Node.js + Express REST API
- Data: SQLite

Flow: User → React frontend → Express API → SQLite database. Responses return through the API to the frontend.

## 9. Data Model
- User: id, name, email, password_hash, created_at
- Goal: id, user_id, title, description, category, priority, target_date, status, created_at, updated_at
- Task: id, goal_id, title, due_date, is_completed, created_at, updated_at

Relationships: User 1-to-many Goal; Goal 1-to-many Task.

Progress: `(completed tasks / total tasks) * 100`; if there are no tasks, progress is 0%.

## 10. REST API
- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/api/auth/me`
- GET/POST `/api/goals`
- GET/PUT/DELETE `/api/goals/:id`
- GET/POST `/api/goals/:goalId/tasks`
- PUT/DELETE `/api/tasks/:id`
- GET `/api/dashboard/stats`
- GET `/api/dashboard/upcoming`

## 11. Frontend Screens
Register, Login, Dashboard, My Goals, Add/Edit Goal, Goal Details, Profile. Future screens include AI Dream Planner, Vision Board, Habit Tracker, Focus Mode, Analytics, and Community Challenges.

## 12. Security and Validation
Use bcrypt password hashing, JWT authentication, server-side validation, protected routes, user ownership checks, parameterized SQL, environment variables for secrets, and SQLite foreign-key constraints.

## 13. Future Scope
AI goal planning, vision boards, habit tracking, calendar reminders, gamification, group challenges, analytics, journaling, and PDF reports.

## 14. Conclusion
DreamBoard uses a modular three-layer full-stack architecture to support secure goal and task management, automatic progress tracking, and future productivity features.
