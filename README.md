# Stage 1 DevOps Task – Personal API

## 📌 Project Overview

This project is a simple REST API built as part of the Stage 1 DevOps track.  
It demonstrates backend basics and deployment using a VPS with Nginx reverse proxy and PM2 process management.

The API is deployed publicly and serves JSON responses.

---

## 🚀 Live URL

https://owolabidev.duckdns.org

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Nginx (Reverse Proxy)
- PM2 (Process Manager)
- Ubuntu VPS

---

## 📦 Installation (Run Locally)

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/stage1-api.git
cd stage1-api
```
##Install dependencies
```
npm install
```
##Start the server
```
node index.js
```
Server runs on: http://localhost:3000

### API Endpoints
1. Root Endpoint
```
GET /
```
Response 
```
{
  "message": "API is running"
}
```
2. Health Check
```
GET /health
```
Response
```
{
  "message": "healthy"
}
```
🔹 3. User Info
```
GET /ME
```
Response 
```
{
  "name": "Your Full Name",
  "email": "you@example.com",
  "github": "https://github.com/yourusername"
}
```

### DeploymentArchitecture
Node.js app runs on port 3000
PM2 keeps the application running in the background
Nginx acts as a reverse proxy forwarding traffic from port 80/443 to the app
SSL secured using Let's Encrypt

Flow:
```
Client → Nginx → Node.js App (PM2)
```
###Process Management
PM2 is used to ensure the app stays alive:
```
pm2 start index.js --name stage1-api
pm2 save
pm2 startup
```
###Nginx Configuration
Nginx is configured to proxy requests:

Public traffic → https://owolabidev.duckdns.org
Internally forwarded → http://localhost:3000
###Author
Name: Owolabi Grace Oluwafunmilayo
Email: graceowolabi09@gmaiil.com
GitHub: https://github.com/owolabigrace
 ###✅ Status

✔ API working
✔ Deployed on VPS
✔ Nginx reverse proxy configured
✔ PM2 process manager enabled
✔ SSL enabled
 ###Notes
This project is part of a DevOps training exercise focusing on:
Basic backend API creation
Linux server management
Deployment workflows
Reverse proxy configuration



