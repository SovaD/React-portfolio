// export const projectsData = [
//   {
//     id: 1,
//     title: "DevSpace Premium",
//     description: {
//       ru: "Архитектурно сложное приложение для агрегации технического контента. Реализована кастомная система фильтрации и ленивая загрузка данных через RTK Query.",
//       en: "Architecturally complex application for tech content aggregation. Features custom filtering and lazy loading via RTK Query."
//     },
//     tech: ["React 18", "Redux Toolkit", "RTK Query", "Node.js", "MongoDB", "Framer Motion"],
//     liveUrl: "https://dev-space-app-self.vercel.app/",
//     gitUrl: "https://github.com/SovaD/dev-space-app.git",
//     images: ["../assets/sc1.png", "../assets/sc2.png", "../assets/sc3.png"]
//   },
//   {
//     id: 2,
//     title: "MovieHub Pro",
//     description: {
//       ru: "Кино-платформа на базе TMDB API. Настроен собственный прокси-сервер на Node.js для обхода ограничений, реализовано кэширование запросов и сложные анимации интерфейса.",
//       en: "Movie platform based on TMDB API. Custom Node.js proxy for bypassing restrictions, request caching, and complex UI animations."
//     },
//     tech: ["React Router 6", "Redux Toolkit", "Node.js", "Express", "REST API", "Skeleton UI"],
//     liveUrl: "https://react-movie-hub-app.vercel.app/",
//     gitUrl: "https://github.com/SovaD/react-movie-hub-app.git",
//     images: ["../assets/sc-movie1.png", "../assets/sc-movie2.png", "../assets/sc-movie3.png", "../assets/sc-movie4.png"]
//   },
//   {
//     id: 3,
//     title: "Smart Budget Tracker",
//     description: {
//       ru: "Финансовый дашборд с глубоким анализом данных. Использованы сложные кастомные хуки для управления состоянием и LocalStorage для сохранения данных без бэкенда.",
//       en: "Financial dashboard with deep data analysis. High-level custom hooks for state management and LocalStorage for serverless data persistence."
//     },
//     tech: ["React Hooks", "Context API", "Recharts", "LocalStorage", "BEM", "Vite"],
//     liveUrl: "https://smart-budget-app-ten.vercel.app/",
//     gitUrl: "https://github.com/SovaD/smart-budget-app.git",
//     images: ["../assets/sc-budget1.png", "../assets/sc-budget2.png", "../assets/sc-budget3.png"]
//   },
//   {
//     id: 4,
//     title: "EventFlow Fullstack",
//     description: {
//       ru: "Enterprise-платформа для ивентов. Реализована JWT-авторизация, ролевая модель доступа (RBAC) и автоматическая генерация персональных RSVP-ссылок.",
//       en: "Enterprise event platform. Features JWT authentication, Role-Based Access Control (RBAC), and automated personal RSVP link generation."
//     },
//     tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT Auth", "Axios"],
//     liveUrl: "https://event-flow-app-brown.vercel.app/",
//     gitUrl: "https://github.com/SovaD/event-flow-app.git",
//     images: ["../assets/sc-event1.png", "../assets/sc-event2.png", "../assets/sc-event3.png", "../assets/sc-event4.png"]
//   }
// ];

// Проект 1
import sc1_1 from "../assets/sc1.png";
import sc1_2 from "../assets/sc2.png";
import sc1_3 from "../assets/sc3.png";

// Проект 2
import sc2_1 from "../assets/sc-movie1.png";
import sc2_2 from "../assets/sc-movie2.png";
import sc2_3 from "../assets/sc-movie3.png";
import sc2_4 from "../assets/sc-movie4.png";

// Проект 3
import sc3_1 from "../assets/sc-budget1.png";
import sc3_2 from "../assets/sc-budget2.png";
import sc3_3 from "../assets/sc-budget3.png";

// Проект 4
import sc4_1 from "../assets/sc-event1.png";
import sc4_2 from "../assets/sc-event2.png";
import sc4_3 from "../assets/sc-event3.png";
import sc4_4 from "../assets/sc-event4.png";

export const projectsData = [
  {
    id: 1,
    title: "DevSpace Premium",
    description: {
      ru: "Архитектурно сложное приложение для агрегации технического контента. Реализована кастомная система фильтрации и ленивая загрузка данных через RTK Query.",
      en: "Architecturally complex application for tech content aggregation. Features custom filtering and lazy loading via RTK Query."
    },
    tech: ["React 18", "Redux Toolkit", "RTK Query", "Node.js", "MongoDB", "Framer Motion"],
    liveUrl: "https://dev-space-app-self.vercel.app/",
    gitUrl: "https://github.com/SovaD/dev-space-app.git",
    images: [sc1_1, sc1_2, sc1_3] // Передаем переменные, а не строки
  },
  {
    id: 2,
    title: "MovieHub Pro",
    description: {
      ru: "Кино-платформа на базе TMDB API. Настроен собственный прокси-сервер на Node.js для обхода ограничений, реализовано кэширование запросов и сложные анимации интерфейса.",
      en: "Movie platform based on TMDB API. Custom Node.js proxy for bypassing restrictions, request caching, and complex UI animations."
    },
    tech: ["React Router 6", "Redux Toolkit", "Node.js", "Express", "REST API", "Skeleton UI"],
    liveUrl: "https://react-movie-hub-app.vercel.app/",
    gitUrl: "https://github.com/SovaD/react-movie-hub-app.git",
    images: [sc2_1, sc2_2, sc2_3, sc2_4]
  },
  {
    id: 3,
    title: "Smart Budget Tracker",
    description: {
      ru: "Финансовый дашборд с глубоким анализом данных. Использованы сложные кастомные хуки для управления состоянием и LocalStorage для сохранения данных без бэкенда.",
      en: "Financial dashboard with deep data analysis. High-level custom hooks for state management and LocalStorage for serverless data persistence."
    },
    tech: ["React Hooks", "Context API", "Recharts", "LocalStorage", "BEM", "Vite"],
    liveUrl: "https://smart-budget-app-ten.vercel.app/",
    gitUrl: "https://github.com/SovaD/smart-budget-app.git",
    images: [sc3_1, sc3_2, sc3_3]
  },
  {
    id: 4,
    title: "EventFlow Fullstack",
    description: {
      ru: "Enterprise-платформа для ивентов. Реализована JWT-авторизация, ролевая модель доступа (RBAC) и автоматическая генерация персональных RSVP-ссылок.",
      en: "Enterprise event platform. Features JWT authentication, Role-Based Access Control (RBAC), and automated personal RSVP link generation."
    },
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT Auth", "Axios"],
    liveUrl: "https://event-flow-app-brown.vercel.app/",
    gitUrl: "https://github.com/SovaD/event-flow-app.git",
    images: [sc4_1, sc4_2, sc4_3, sc4_4]
  }
];