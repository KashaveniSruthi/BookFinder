# BookFinder

BookFinder is a React.js application that allows users to search, explore, and view details about millions of books using the Open Library API. The application features a modern design with a global background, blurred overlay, and responsive layout for desktop and mobile devices.

**Features**

* Search Books: Users can search by title, author, or keyword.

* View Book Details: Click on any book to see detailed information.

* Favorites Section: Placeholder for saving favorite books (coming soon).

* About Section: Information about the BookFinder app.

* Responsive Design: Works on desktops, tablets, and mobile screens.

* Modern UI/UX:

  Global blurred background image

  Clean font using Poppins

  Dark overlay for text readability

  Smooth hover effects and transitions
  
**Project Structure**
```
src/
├── App.css
├── App.js
├── index.css
├── index.js
├── assets/
│   └── images
├── components/
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── SearchBar.jsx
│   ├── SearchBar.css
│   ├── Loader.jsx
│   ├── Loader.css
│   ├── BookCard.jsx
│   ├── BookCard.css
│   ├── BookList.jsx
│   ├── BookList.css
│   ├── BookDetails.jsx
│   └── BookDetails.css
└── pages/
    ├── Home.jsx
    ├── Home.css
    ├── Favorites.jsx
    ├── Favorites.css
    ├── About.jsx
    └── About.css
```
**Technologies Used**

* React.js – Frontend library

* React Router – Client-side routing

* Open Library API – Fetch book data

* CSS3 – Styling and animations

* Google Fonts (Poppins) – Modern typography

** Installation & Setup**

1. Clone the repository
```
git clone <your-repo-url>
cd my_app
```
2. Install dependencies
```
npm install
```
4. Run the application
```
npm start
```

**Future Improvements**

* Favorites Functionality: Allow users to save books locally or in a backend.

* Pagination: Display more search results with paging.

* Advanced Search Filters: Search by language, year, or subject.

* Animations: Fade-in and hover animations for book cards.

* Dark/Light Mode Toggle: Theme switching for better accessibility.

