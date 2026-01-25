# 🌍 TalentHive Global

**TalentHive Global** is a professional networking platform inspired by LinkedIn, designed to connect talent across the globe. It enables users to build professional profiles, share posts, grow their network, and communicate seamlessly—all in one modern, scalable application.

---

## ✨ Features

### 🔐 Authentication

* Google OAuth Authentication
* Secure session handling
* Protected routes for authenticated users

### 👤 User Profiles

* Create & update professional profiles
* Profile pictures and cover images
* Bio, skills, and personal information
* Cloud-based image storage using **Cloudinary**

### 📝 Posts & Engagement

* Create, edit, and delete posts
* Like and comment on posts
* Real-time content updates
* Media uploads in posts (images)

### 🤝 Networking

* Send and receive friend (connection) requests
* Accept or reject requests
* View connections list
* Suggested connections

### 💬 Messaging

* One-to-one real-time messaging
* Conversation history
* User-friendly chat interface

### 🔔 Notifications

* Real-time notifications for:

  * Friend requests
  * Post likes & comments
  * Messages
* Read/unread notification states

### ☁️ Media Uploads

* Image uploads handled via **Cloudinary**
* Optimized image delivery
* Secure and scalable storage

---

## 🛠️ Tech Stack

### Frontend

* React / Next.js
* Tailwind CSS / CSS Modules
* Context API / Redux (if applicable)

### Backend

* Node.js
* Express.js
* RESTful APIs

### Database

* MongoDB with Mongoose

### Authentication

* Google OAuth 2.0

### Cloud & Services

* Cloudinary (image uploads)
* JWT / Session-based auth

---

## 📁 Project Structure

```
talenthive-global/
├── frontend/          # Frontend
├── backend/          # Backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── config/
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add:

```
MONGO_URI=your_mongodb_connection
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
JWT_SECRET=your_jwt_secret
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/9802HEMENSAN/TalentHive-Global.git
cd talenthive-global
```

### 2️⃣ Install Dependencies

```bash
npm install
cd client && npm install
```

### 3️⃣ Run the Application

```bash
npm run dev
```

---

## 🔮 Future Enhancements

* Job postings & applications
* Video posts
* Group communities
* Advanced search & filters
* Dark mode
* Mobile app version

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo, create a new branch, and submit a pull request.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 💡 Inspiration

TalentHive Global is inspired by LinkedIn but built with flexibility, scalability, and a modern developer-first mindset.

---
 
