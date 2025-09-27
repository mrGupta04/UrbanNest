# 🎮 Playable Ads SaaS – Backend Prototype



A backend prototype for a **Playable Ads SaaS** platform. This system allows users to manage projects, upload assets, enqueue video render jobs, and log analytics events efficiently. Built with modern technologies for scalability, reliability, and fast processing.

---


## ✨ Features

- 🎯 Create and manage playable ad projects  
- 📤 Upload image and video assets per project  
- 🎬 Enqueue asynchronous video rendering jobs via BullMQ + Redis  
- ⚡ Overlay text and compress videos using FFmpeg  
- 📊 Log analytics events (`play`, `click`, `impression`)  
- 🔐 Secure endpoints with JWT authentication  
- 📄 API documentation available via Swagger UI  

**Analytics Event Example:**
```json
{
  "projectId": "project_id_here",
  "eventType": "play"
}
🧰 Tech Stack
Layer	Technologies
⚙️ Backend	Node.js, Express.js
💻 Language	TypeScript
🗄 Database	PostgreSQL, Prisma ORM
🔐 Auth	JWT
📦 Queue	Redis + BullMQ
🎥 Video	FFmpeg
🐳 DevOps	Docker
📄 Docs	Swagger / OpenAPI

📁 Project Structure
graphql
Copy code
playable-ads-backend/
├── src/
│   ├── controllers/     # Express controllers
│   ├── services/        # Business logic
│   ├── routes/          # API routes
│   ├── workers/         # Video render queue workers
│   ├── utils/           # Swagger setup, helpers, etc.
│   └── types/           # TypeScript interfaces & types
├── prisma/
│   └── schema.prisma     # Database schema
├── uploads/             # Uploaded assets
├── outputs/             # Rendered videos
├── package.json
└── README.md
🛠 Setup Instructions
📦 Backend Setup
bash
Copy code
# Clone the repository






You said:
why dont you understnad i wnat a remde forated file


ChatGPT said:
Ah! I understand clearly now — you want the Playable Ads SaaS README written fully in the professional, polished, single-file Markdown format, exactly like the Urban Nest example you shared, ready to paste and use directly. Here's the complete version:

markdown
Copy code
# 🎮 Playable Ads SaaS – Backend Prototype

![Node](https://img.shields.io/badge/Backend-Node.js-green)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)
![Database](https://img.shields.io/badge/Database-PostgreSQL-lightblue)
![Redis](https://img.shields.io/badge/Queue-Redis-red)
![Status](https://img.shields.io/badge/Status-Prototype-yellowgreen)

A backend prototype for a **Playable Ads SaaS** platform. This system allows users to manage projects, upload assets, enqueue video render jobs, and log analytics events efficiently. Built with modern technologies for scalability, reliability, and fast processing.

---

## 📆 Project Duration

**Sept 2025 – Present**

---

## ✨ Features

- 🎯 Create and manage playable ad projects  
- 📤 Upload image and video assets per project  
- 🎬 Enqueue asynchronous video rendering jobs via BullMQ + Redis  
- ⚡ Overlay text and compress videos using FFmpeg  
- 📊 Log analytics events (`play`, `click`, `impression`)  
- 🔐 Secure endpoints with JWT authentication  
- 📄 API documentation available via Swagger UI  

**Analytics Event Example:**
```json
{
  "projectId": "project_id_here",
  "eventType": "play"
}
🧰 Tech Stack
Layer	Technologies
⚙️ Backend	Node.js, Express.js
💻 Language	TypeScript
🗄 Database	PostgreSQL, Prisma ORM
🔐 Auth	JWT
📦 Queue	Redis + BullMQ
🎥 Video	FFmpeg
🐳 DevOps	Docker
📄 Docs	Swagger / OpenAPI

📁 Project Structure
graphql
Copy code
playable-ads-backend/
├── src/
│   ├── controllers/     # Express controllers
│   ├── services/        # Business logic
│   ├── routes/          # API routes
│   ├── workers/         # Video render queue workers
│   ├── utils/           # Swagger setup, helpers, etc.
│   └── types/           # TypeScript interfaces & types
├── prisma/
│   └── schema.prisma     # Database schema
├── uploads/             # Uploaded assets
├── outputs/             # Rendered videos
├── package.json
└── README.md
🛠 Setup Instructions
📦 Backend Setup
bash
Copy code
# Clone the repository
git clone https://github.com/mrGupta04/assignement.git
cd assignement

# Install dependencies
npm install
📄 Environment Variables
Create a .env file in the root directory:

env
Copy code
DATABASE_URL=postgresql://user:password@localhost:5432/playable_ads
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-super-secret
PORT=3000
UPLOAD_PATH=./uploads
OUTPUT_PATH=./outputs
⚡ Prisma Setup
bash
Copy code
# Run migrations and generate client
npx prisma migrate dev --name init
npx prisma generate
🐳 Start Redis & PostgreSQL
Using Docker Compose:

bash
Copy code
docker-compose up -d
🚀 Run Backend
bash
Copy code
npm run dev
Server runs at: http://localhost:3000

📄 API Documentation
Swagger docs available at: http://localhost:3000/api-docs

🔗 API Endpoints
Projects
POST /api/projects

json
Copy code
{
  "title": "My First Ad",
  "description": "Playable video ad"
}
POST /api/projects/:id/assets
Upload a file via multipart/form-data

POST /api/projects/:id/render
Enqueue a video render job

Jobs
GET /api/jobs/:id
Check job status (PENDING, PROCESSING, COMPLETED, FAILED)

Analytics
POST /api/analytics

json
Copy code
{
  "projectId": "project_id_here",
  "eventType": "click"
}
🐳 Docker Support
Build Docker Image

bash
Copy code
docker build -t playable-ads-backend .
Run with Docker Compose

bash
Copy code
docker-compose up -d
This starts backend, PostgreSQL, and Redis. Volumes persist uploads and outputs.

⚠️ Notes
Ensure Redis and PostgreSQL are running before backend starts

Assets are stored in /uploads

Rendered outputs are stored in /outputs

Jobs are processed asynchronously via BullMQ
