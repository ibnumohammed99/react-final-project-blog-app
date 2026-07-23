🌐 BlogSphere – Modern React Blog Platform

BlogSphere is a modern, responsive blogging application built with React. It allows users to explore articles, read detailed posts, create and manage their own content, bookmark favorite articles, and personalize their experience with a complete light/dark theme system.

The application combines API integration, client-side routing, global state management, and modern UI practices to create a scalable blogging platform.

✨ Features
📚 Blog Experience
Browse blog posts fetched from the DummyJSON API
View detailed blog pages
Display related comments
Dynamic blog categories and tags
Search posts by title/content
Filter posts by category
✍️ Post Management
Create new blog posts
Edit existing posts
Delete posts
Form validation
Local storage persistence
🔖 Bookmark System
Bookmark favorite articles
Manage saved posts
Global state management using Jotai
Persistent bookmarks with localStorage
🎨 Modern UI
Fully responsive design
Modern navigation system
Hero section
Blog cards
Footer
Clean reusable components
🌙 Theme System
Light and dark mode support
Theme management using React Context API
User preference saved with localStorage
Smooth theme transitions
📸 Screenshots
🏠 Home Page

🌙 Dark Mode

📖 Blog Details

✍️ Create Post

🔖 Bookmarks

🛠️ Tech Stack
Frontend
React
Vite
CSS3
Libraries
React Router DOM
Jotai
Context API
Other
DummyJSON REST API
Local Storage
blog-app/
📂 Project Structure
├── screenshots/
│   ├── home.png
│   ├── dark-mode.png
│   ├── details.png
│   ├── create-post.png
│   └── bookmarks.png
│
├── src/
│   ├── atoms/
│   │   └── bookmarkAtoms.js
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── BlogCard.jsx
│   │   └── BlogForm.jsx
│   │
│   ├── context/
│   │   └── ThemeContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Blogs.jsx
│   │   ├── BlogDetails.jsx
│   │   ├── Articles.jsx
│   │   ├── CreatePost.jsx
│   │   ├── EditPost.jsx
│   │   ├── Bookmarks.jsx
│   │   └── Login.jsx
│   │
│   ├── hooks/
│   │   └── useFetchPosts.js
│   │
│   ├── data/
│   └── styles/
│
├── App.jsx
├── main.jsx
├── package.json
└── README.md
🚀 Getting Started
Clone repository
git clone https://github.com/ibnumohammed99/react-final-project-blog-app.git
Install dependencies
npm install
Run development server
npm run dev

Application runs at:

http://localhost:5173
🌐 API

This project uses:

DummyJSON API

Endpoints:

GET /posts
GET /posts/{id}
GET /comments/post/{id}
📚 What I Learned

This project helped me improve:

Building scalable React applications
Component-based architecture
React Router navigation
Global state management with Jotai
Theme management with Context API
REST API integration
CRUD operations
Form validation
Responsive UI development
Organizing production-style project structure
🚀 Future Improvements
User authentication
Backend integration
Database storage
Rich text editor
User profiles
Real-time comments
Deployment improvements
👨‍💻 Author

Miftahudin Mohammed

GitHub:
https://github.com/ibnumohammed99
