# 🍃 GreenNest – Indoor Plant Care & Store

A sleek single-page MERN application for plant lovers to explore, buy, and care for indoor plants — optimized for a smooth user experience, modern UI, and responsive design.

## 🚀 Live Demo
🔗 Live Site: https://green-nest-01.netlify.app     
🔗 Client Repo: https://github.com/Islamul-Hoque/GreenNest-Client  

---

## 📝 Description
GreenNest is an elegant single-page web app where users can explore indoor plants, view care tips, book expert consultations, and purchase plants. Authenticated users can access protected routes for plant details and profile management.  
The platform uses JSON-based plant data, Firebase Authentication, and a minimalist, responsive UI to provide a seamless experience.

---

## 📸 Screenshot
![GreenNest Screenshot](https://i.ibb.co.com/dJxWfhTW/gn.png)

---

## ✨ Key Features
- Explore top-rated indoor plants with images, prices, ratings, and “View Details”.  
- Plant care tips section with watering, sunlight, and fertilizing guides.  
- Book expert consultations via a protected form.  
- Firebase Authentication: Email/Password + Google Sign-In.  
- Authenticated users can access profile page and update displayName/photoURL.  
- Dark/Light mode toggle (optional).  
- Fully responsive UI across devices.  
- Smooth slider animations with Swiper.js or Framer Motion.  
- Toast notifications for success/error messages.  
- SPA functionality with no reload or crash errors.  
- Update profile (displayName/photoURL) in real-time. 

---

## 🧰 Tech Stack

### Frontend
- React.js  
- React Router  
- Tailwind CSS  
- DaisyUI  
- Swiper.js  
- Axios  


### Authentication
- Firebase Authentication (Email/Password + Google OAuth)

---

## 📦 Dependencies

### Client
- react  
- react-router
- axios  
- firebase  
- tailwindcss  
- daisyui  
- swiper.js 
- react-toastify  


---

## 🛠 Installation & Run Locally

### Clone the repositories
```bash
git clone <client-repo-url>
```

---

### Client Setup
```bash
cd client
npm install
```

Create a `.env` file:
```
VITE_apiKey=your_key  
VITE_authDomain=your_auth_domain  
VITE_projectId=your_project_id  
VITE_storageBucket=your_storage  
VITE_messagingSenderId=your_sender_id  
VITE_appId=your_app_id  
```

Run the client:
```bash
npm run dev
```

---

## 🔐 Protected Routes
- /plant/:id (Plant Details Page)  
- /profile (User Profile Page)  

---

## 👤 Author

**Islamul Hoque**  
*MERN Stack Web Developer*  

📍 **Chattogram, Bangladesh**  
📧 **islamulhoque2006@gmail.com**  

🔗 **Social Links:**  
- [LinkedIn](https://linkedin.com/Islamul-Hoque)  
- [Facebook](https://facebook.com/ISLAMUL.HOQUE.ISHFAK.OFFICIAL)  
- [Twitter](https://twitter.com/ISHFAK2003)
