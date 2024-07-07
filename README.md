
# Share The Meal
 Share The Meal is a website to reduce food waste by allowing users to share and request food items efficiently.


## Live Link
## [Share The Meal](https://share-the-meal-e8eba.web.app/)

## server repo
## [Link](https://github.com/AmirHossain58/share-the-meal-server)


## Features
- Login & Registration Systems: User authentication and registration with error handling.
- Add Food Page: Form to add food items with relevant details.
- Available Foods Page: Search and sorting functionality, display of available foods with detailed information.
- Single Food Details Page: Display detailed information about a single food item with the option to request it.
- Manage My Foods Page: Private page for authenticated users to manage the foods they've added, with options to update or delete items.
- My Food Request Page: Private page showing all food requests made by the logged-in user.
- Toast Notifications: Display notifications for CRUD operations.


## Technologies Used
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Query](https://react-query.tanstack.com/)
- [React Hook Form](https://react-hook-form.com/)
- [React Router](https://reactrouter.com/)

## Packages Used
- [@material-tailwind/react](https://www.npmjs.com/package/@material-tailwind/react)
- [@tanstack/react-query](https://www.npmjs.com/package/@tanstack/react-query)
- [@tanstack/react-query-devtools](https://www.npmjs.com/package/@tanstack/react-query-devtools)
- [axios](https://www.npmjs.com/package/axios)
- [firebase](https://www.npmjs.com/package/firebase)
- [framer-motion](https://www.npmjs.com/package/framer-motion)
- [fullcalendar](https://www.npmjs.com/package/fullcalendar)
- [localforage](https://www.npmjs.com/package/localforage)
- [react-datepicker](https://www.npmjs.com/package/react-datepicker)
- [react-fast-marquee](https://www.npmjs.com/package/react-fast-marquee)
- [react-helmet-async](https://www.npmjs.com/package/react-helmet-async)
- [react-hook-form](https://www.npmjs.com/package/react-hook-form)
- [react-hot-toast](https://www.npmjs.com/package/react-hot-toast)
- [react-icons](https://www.npmjs.com/package/react-icons)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-tabs](https://www.npmjs.com/package/react-tabs)
- [sweetalert2](https://www.npmjs.com/package/sweetalert2)
- [swiper](https://www.npmjs.com/package/swiper)


Installation and Setup
Follow these steps to clone and run the Hostel Meals Management System locally:

Clone the clint and server Repository

```
git clone //<repository-url>
cd //<repository-folder>
```
Install Server Dependencies
```
cd //server
npm install
```
Install Client Dependencies
```
cd //client
npm install
```
Set Up Environment Variables

## Create a .env file in the client directory with:

//firebase env
- VITE_apiKey=//api key
- VITE_authDomain=// auth dommain
- VITE_appId=// api id
- VITE_projectId=//projectId
- VITE_storageBucket=//storageBucket
- VITE_messagingSenderId=//messagingSenderId

- VITE_API_URL=http://localhost:8000


## Create a .env file in the server directory with:

- DB_USER= //database user name
- DB_PASS=//password
- ACCESS_TOKEN_SECRET= //token secret jwt
Run the Server

```
cd //server
npm start
```
Run the Client
```
cd //client
npm start
```
