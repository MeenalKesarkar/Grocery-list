# 🛒 Grocery List App

A modern and responsive Grocery List Web Application built using React. This app allows users to manage their daily grocery items efficiently with features like adding, searching, updating, and deleting items.

---

## 🚀 Features

* ➕ Add new grocery items
* 🔍 Search items in real-time
* ✅ Mark items as completed (checkbox toggle)
* ❌ Delete items from the list
* 🌐 Data persistence using REST API (JSON Server / backend)
* ⏳ Loading state handling
* 🎯 Clean and user-friendly UI

---

## 🛠️ Tech Stack

* **Frontend:** React (Hooks - useState, useEffect)
* **Styling:** CSS
* **Icons:** React Icons
* **Backend/API:** JSON Server / Custom API
* **HTTP Requests:** Fetch API

---

## 📂 Project Structure

```
src/
│── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── AddItem.js
│   ├── SearchItem.js
│   ├── ItemList.js
│   ├── LineItem.js
│   └── Practice.js
│
│── App.js
│── apiRequest.js
│── App.css
```

---

## ⚙️ How It Works

* On app load, data is fetched from the API.
* Users can:

  * Add items → stored in state + API
  * Toggle items → updates checked status via PATCH request
  * Delete items → removed from state + API
* Search filters items dynamically.

---

## 🔧 Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/MeenalKesarkar/Grocery-list
```

2. Navigate to project folder:

```bash
cd Grocery-list
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Start JSON Server (if using):

```bash
npx json-server --watch data/db.json --port 3500
```

---

## 🌐 API Endpoint

```
http://localhost:3500/items
```

## 💡 Future Improvements

* 🌓 Dark mode
* 📱 Mobile optimization
* 🔐 User authentication
* ☁️ Deploy with backend (MongoDB + Express)
* 📊 Add categories & filters

---

## 👩‍💻 Author

**Meenal Kesarkar**
Frontend Developer | MERN Stack Developer

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---

