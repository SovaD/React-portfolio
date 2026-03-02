# Frontend Developer Portfolio | React & Vite

Интерактивное Single Page Application (SPA), демонстрирующее навыки построения современной фронтенд-архитектуры, работы с состоянием и внешними API.

[Live](https://react-portfolio-ochre-chi.vercel.app/)

---

##  Техническая реализация (Architecture)

Проект построен с использованием компонентного подхода и разделения ответственности (Separation of Concerns):

* **Global State Management:** Использование **React Context API** для управления темами (Dark/Light) и локализацией (RU/EN) без лишнего ререндеринга.
* **Routing & Navigation:** Реализована сложная навигация с использованием `react-router-dom` и `react-router-hash-link`, включая:
    * Бесшовный скролл к секциям (Hash Anchors).
    * Обработку несуществующих маршрутов (Custom 404 Page).
    * Корректную работу навигации при возврате с других страниц на главную.
* **API Integration:** Настроена интеграция с **EmailJS** для обработки пользовательских форм на клиентской стороне без необходимости в выделенном бэкенде.
* **UI/UX Logic:** * Реализован кастомный обработчик событий мыши для интерактивных элементов.
    * Оптимизированные анимации с использованием **Framer Motion** (библиотека декларативных анимаций).
    * Динамическая смена `document.title` для удержания внимания пользователя.

## 💻 Стек технологий
* **Core:** React 18, Vite.
* **Logic:** JavaScript (ES6+), React Hooks (useEffect, useState, useContext).
* **Styles:** CSS3 (Variables, Flexbox, Grid, Media Queries).
* **Tools:** Lucide Icons, Git, npm.

---
**Разработчик:** SovaD| Peri