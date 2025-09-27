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



Assets are stored in /uploads

Rendered outputs are stored in /outputs

Jobs are processed asynchronously via BullMQ
