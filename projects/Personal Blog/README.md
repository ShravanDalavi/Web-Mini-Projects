## Personal Blog
A dynamic, responsive, and interactive personal blogging platform where users can create, edit, publish, and view blogs. The platform includes a login system for administrators to manage blog content.
## Features
- Admin Login: Secure login functionality to manage blogs.
- Create, Edit, Publish, Delete Blogs: Full CRUD functionality for blog posts.
- Dynamic Blog Display: Published blogs are dynamically displayed on the homepage.
- Responsive Design: Optimized for both desktop and mobile devices.
- Custom Styling: Uses CSS animations, transitions, and themes for a visually appealing interface.
- Dark Mode: Toggle dark mode for better accessibility and reduced eye strain.
## Demo
[Link to demo](https://tsr2xq.csb.app/index.html)

![image](https://github.com/user-attachments/assets/e04b14dd-1060-480c-84ce-70466f67792f)


## Installation
1. Clone the repository:
```bash
git clone https://github.com/ShravanDalavi/Web-Mini-Projects.git
cd Web-Mini-Projects/projects/Personal\ Blog
```
2. Open index.html in your preferred browser.

## Usage
1. Home Page: Displays all published blogs.
- File: `home.html`
2. Login Page: Admin login to access the blog editor.
- File: `login.html`
- Username: `admin`, Password: `password`
3. Blog Editor: Create, edit, publish, or delete blogs.
- File: `editor.html`

### Steps:
- Open `home.html` to view published blogs.
- Navigate to `login.html` to log in as an admin.
- Use `editor.html` for managing blogs.

## Technologies
- HTML5: Structuring content.
- CSS3: Styling and responsive design.
- JavaScript: Dynamic interactions and local storage.
- Local Storage: Data persistence for blogs.

## How It Works
1. Blog Storage:
- Blogs are stored in the browser's `localStorage`.
- Example structure:
```json
[
  {
    "title": "Sample Blog",
    "content": "This is a sample blog post.",
    "isPublished": true,
    "date": "2025-01-01, 10:00 AM"
  }
]
```
2. Admin Panel:
- Login credentials are verified through hardcoded values.
- Upon successful login, the user is redirected to the editor.html page.

3. Dynamic Updates:
- Blog content is dynamically rendered on the homepage and editor.
- Published blogs are sorted by date and displayed with custom styles.

## Customization
1. Styling:
- Modify the CSS variables in `css/styles.css` to change the color scheme, font, or layout.
2. Admin Credentials:
- Update the login credentials in the JavaScript file (`js/app.js`)
```JavaScript
if (username === 'your-username' && password === 'your-password') { ... }
```
3. Blog Content:
- Blogs are fetched and manipulated through JavaScript. You can extend the functionality by integrating a backend or database.


## File Structure
```bash
personal-blog/
│
├── index.html          # Entry point (Home page)
├── login.html          # Admin login page
├── editor.html         # Blog management page
│
├── css/
│   ├── styles.css      # Shared styling
│
├── js/
│   ├── app.js          # Core JavaScript logic
│
└── README.md           # Project documentation
```
