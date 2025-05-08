# Arcadia 🎮

Welcome to **Arcadia**, a dynamic and interactive quiz web application developed with React! 🧠✨

This project was proudly developed by **Luis Claudio**, and it's built using the latest React ecosystem tools such as `react-router-dom`, `axios`, `tailwindcss`, and utilizes the public [Open Trivia Database API](https://opentdb.com/) for generating trivia questions. It also leverages the `Context API` for global state management and a custom React Hook to encapsulate logic for fetching and handling questions.


---

## 🚀 Features

- 📱 Fully responsive layout: works perfectly on all screen sizes (mobile and desktop)
- 🖥️ Desktop animations: includes smooth transitions and animations on elements like cards, logo, and more
- 🎮 Quiz experience powered by the Open Trivia Database API
- ⚛️ Built with React using functional components
- 🌍 Navigation with `react-router-dom`
- 🌈 Styled with Tailwind CSS for a sleek and responsive design
- 🔄 API data fetching with Axios
- 💡 State management using React Context API
- 🔁 Custom Hook to handle quiz logic (fetching, scoring, etc.)
- ✅ Real-time feedback on answers:
  - After selecting an answer, it becomes **highlighted**:
    - ✅ Green if correct
    - ❌ Red if incorrect + the correct one also highlighted in green
- ➡️ The button to proceed to the next question **only appears** after selecting an answer
- 🏁 Final score summary on a **custom congratulatory page**, tailored to the user's performance
- 🚫 Personalized message for users who try to access the results page **without completing the quiz**
- ❗ Custom **404 error page** for routes that do not exist

---

## 📦 Tech Stack

- **Frontend**: React, React Router DOM
- **Styling**: Tailwind CSS
- **HTTP Requests**: Axios
- **State Management**: Context API
- **Utilities**: Custom React Hook
- **API**: [Open Trivia Database](https://opentdb.com/)

---

## 🛠️ Installation

Follow the steps below to run the project locally:

```bash
# Clone the repository
$ git clone https://github.com/LuisClaudi0/arcadia.git

# Navigate into the project directory
$ cd arcadia

# Install dependencies
$ npm install

# Start the development server
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🔍 Project Structure

```bash
src/ 
├── components/           # Reusable UI components
├── context/              # Context API for global state
├── hooks/                # Custom hook for quiz logic
├── pages/                # Page components (Home, Quiz, Results, Page404)
├── utils/                # Utilities components
├── App.jsx               # App setup with routes
├── index.css             # Tailwind classes
└── main.jsx              # ReactDOM rendering
```

---

## 📸 Screenshots

![Home Screen](public\assets\screenshots\menu.png)

![Quiz Screen](public\assets\screenshots\question.png)

![Right Question](public\assets\screenshots\right-question.png)

![Wrong Question](public\assets\screenshots\wrong-question.png)

![Results Low](public\assets\screenshots\results-1.png)

![Results Medium](public\assets\screenshots\results-2.png)

![Results High](public\assets\screenshots\results-3.png)

![Page 404](public\assets\screenshots\page-404.png)

---

## 🤓 About the Developer

**Luis Claudio**  
A passionate software engineer in the making, constantly learning and evolving. 🚀

- 📧 Email: luisclaudiobar@gmail.com

Feel free to reach out, collaborate, or share feedback!

---

## 📃 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🧠

> "Curiosity is the wick in the candle of learning." – William Arthur Ward

Enjoy testing your knowledge and have fun! 🧠🎉