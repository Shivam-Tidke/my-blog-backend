# MERN Blog Backend
- This is the Express + MongoDB backend for a simple blog application, providing CRUD APIs for blog posts. It connects to a MongoDB Atlas database and exposes RESTful endpoints.
## Features
- Create and fetch blog posts
- Connected to MongoDB Atlas
- CORS-enabled
- Environment-based config via .env
 
## Folder Structure
``` bash
├── src/
│   ├── config/          # DB connection logic
│   │   └── db.js
│   ├── controllers/     # Request handlers
│   │   └── postController.js
│   ├── models/          # Mongoose schema
│   │   └── post.js
│   ├── routes/          # API routes
│   │   └── posts.js
│   ├── constants.js     # Optional constants
│   └── server.js        # Main entry point
├── .env                 # Environment variables
├── .gitignore
├── package.json
└── README.md

```
##Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- CORS
