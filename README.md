# 🎨 Color Palette Picker

A modern and responsive Color Palette Picker built with **React**, **Vite**, and **Tailwind CSS**. This application allows users to explore a predefined color palette, preview colors instantly, generate random selections, and reset the interface through an intuitive and interactive user experience.

---

## ✨ Features

- 🎨 Select colors from a predefined palette
- 👀 Live color preview with real-time updates
- 🎲 Generate a random color with a single click
- 🔄 Reset the current selection
- ✨ Smooth hover and transition animations
- 📱 Responsive design across different screen sizes
- 🧩 Reusable and modular React components

---

## 📸 Preview

> **Application Screenshot**

![Color Palette Picker](./screenshots/Screenshot%202026-07-12%20224518.png)

---

## 🛠️ Built With

- **React** – Component-based UI development
- **Vite** – Fast development environment and build tool
- **Tailwind CSS** – Utility-first CSS framework
- **Lucide React** – Modern icon library
- **JavaScript (ES6+)** – Application logic

---

## 📂 Project Structure

```text
color-palette-picker/
│
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── ColorButton.jsx
│   │   ├── ColorPreview.jsx
│   │   └── colors.js
│   │
│   ├── screenshots/
│   │   └── color-palette-picker.png
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── public/
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ How It Works

1. The application stores predefined colors in a JavaScript array.
2. React renders the palette dynamically using the `.map()` method.
3. When a user selects a color, the `useState` hook updates the application state.
4. The preview component automatically re-renders to display the selected color.
5. The **Random Color** feature selects a random item from the color array.
6. The **Reset** button clears the current selection and restores the initial view.

---

## 🧠 React Concepts Demonstrated

- Functional Components
- Component Reusability
- Props
- State Management with `useState`
- Event Handling
- Conditional Rendering
- List Rendering with `.map()`
- Dynamic Styling
- Responsive UI Design

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/color-palette-picker.git
```

### Navigate to the project

```bash
cd color-palette-picker
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

---

## 🌱 Future Improvements

- 🎨 Custom color picker
- 📋 Copy HEX/RGB color values
- 🌙 Dark mode support
- 🎭 Multiple color palette themes

---

## 👨‍💻 Author

**Miftahudin Mohammed Hussein**

Computer Science & Engineering Student at **Adama Science and Technology University (ASTU)**

- 💼 Passionate about Frontend Development, React, and Full-Stack Web Development
- 🌱 Currently learning modern web technologies and building real-world projects

---

## ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub.

---

## 📄 License

This project is licensed under the **MIT License**.
