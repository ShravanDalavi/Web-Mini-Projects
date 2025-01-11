// Shared Data
let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

// DOM Elements
const blogsContainer = document.getElementById('blogs-container');
const editorContainer = document.getElementById('editor-container');
const loginForm = document.getElementById('login-form');
const addBlogBtn = document.getElementById('add-blog-btn');

// Login Functionality
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === 'password') {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'editor.html';
        } else {
            alert('Invalid credentials');
        }
    });
}

// Logout Functionality
const logoutLink = document.getElementById('logout-link');
if (logoutLink) {
    logoutLink.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        alert('Logged out successfully!');
        window.location.href = 'home.html';
    });
}

// Display Blogs on Home
function displayBlogs() {
    if (blogsContainer) {
        blogsContainer.innerHTML = '';
        blogs
            .filter(blog => blog.isPublished)
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .forEach(blog => {
                const blogDiv = document.createElement('div');
                blogDiv.classList.add('blog');
                
                // Blog HTML structure with spacing and colorful theme
                blogDiv.innerHTML = `
                    <h3 style="color: #4CAF50; margin-bottom: 0.5rem;">${blog.title}</h3>
                    <p style="
                        line-height: 1.8; 
                        font-size: calc(1rem + 0.5vw); 
                        color: #333; 
                        margin-bottom: 1rem;">
                        ${blog.content}
                    </p>
                    <small style="
                        display: block; 
                        text-align: right; 
                        font-size: 0.9rem; 
                        color: #888;">
                        <strong>Published:</strong> ${blog.date}
                    </small>
                `;
                
                // Apply colorful background for dark mode or bright theme
                blogDiv.style.background = 'linear-gradient(135deg, #f9f9f9, #e6f7ff)';
                blogDiv.style.border = '1px solid #ddd';
                blogDiv.style.borderRadius = '10px';
                blogDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                blogDiv.style.padding = '1.5rem';
                blogDiv.style.marginBottom = '1.5rem';

                blogsContainer.appendChild(blogDiv);
            });
    }
}


// Manage Blogs in Editor
function manageBlogs() {
    if (editorContainer) {
        editorContainer.innerHTML = '';
        blogs.forEach((blog, index) => {
            const blogForm = document.createElement('div');
            blogForm.classList.add('blog');
            blogForm.innerHTML = `
                <input type="text" value="${blog.title}" id="title-${index}" />
                <textarea id="content-${index}">${blog.content}</textarea>
                <button onclick="saveBlog(${index})">Save</button>
                <button onclick="publishBlog(${index})">Publish</button>
                <button onclick="deleteBlog(${index})">Delete</button>
            `;
            editorContainer.appendChild(blogForm);
        });
    }
}

// Save Blog
function saveBlog(index) {
    const title = document.getElementById(`title-${index}`).value;
    const content = document.getElementById(`content-${index}`).value;

    blogs[index].title = title;
    blogs[index].content = content;
    localStorage.setItem('blogs', JSON.stringify(blogs));
    alert('Blog saved successfully!');
}

// Publish Blog
function publishBlog(index) {
    blogs[index].isPublished = true;
    blogs[index].date = new Date().toLocaleString();
    localStorage.setItem('blogs', JSON.stringify(blogs));
    alert('Blog published successfully!');
    manageBlogs();
    displayBlogs();
}

// Delete Blog
function deleteBlog(index) {
    blogs.splice(index, 1);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    manageBlogs();
}

// Add New Blog
if (addBlogBtn) {
    addBlogBtn.addEventListener('click', () => {
        blogs.push({ title: 'New Blog', content: 'Blog content here...', isPublished: false, date: '' });
        manageBlogs();
    });
}

// Initial Page Load
if (blogsContainer) displayBlogs();
if (editorContainer) manageBlogs();


const darkModeToggle = document.getElementById('dark-mode-toggle');

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    darkModeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
}

// Apply dark mode on page load if previously enabled
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    if (darkModeToggle) darkModeToggle.textContent = 'Light Mode';
}

// Add event listener to the toggle button
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
}
