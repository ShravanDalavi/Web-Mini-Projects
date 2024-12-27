# Short Link Generator with Analog Clock and Dark Mode

This is a user-friendly web application that allows users to generate short links for URLs and toggle between light and dark modes. It also includes an animated analog clock feature.

---

## Features

- **Short Link Generator**: Easily generate short links for any URL using the Rebrandly API.
- **Dark Mode Toggle**: Seamlessly switch between light and dark modes for a better user experience.
- **Custom Design**: Beautiful, responsive UI with interactive elements.
- **Analog Clock Animation**: An aesthetic clock animation complements the application's look and feel.
- **Error Handling**: Handles invalid URLs and server errors gracefully.

---

## Demo
[Link to demo](https://qws2hl.csb.app/)

###Light Mode

###Dark Mode


## Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/ShravanDalavi/Web-Mini-Projects.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Web-Mini-Projects/projects/Short\ Link\ Generator
    ```
3. Open the `index.html` file in your web browser:
    ```bash
    open index.html
    ```

---

## Usage

1. Enter a valid URL in the input field.
2. Click the **Generate Short Link** button.
3. Copy the generated short link displayed below the input field.
4. Toggle between light and dark modes using the button in the header.
5. Observe the analog clock, which updates dynamically.

---

## Technologies

- **HTML**: Structure and content of the application.
- **CSS**: Styling for the layout, dark mode, and animations.
- **JavaScript**: Functionality for generating short links, toggling themes, and clock updates.
- **Rebrandly API**: Used to generate short links.
- **Bootstrap**: For responsive design and additional UI components.

---

## How It Works

1. **Short Link Generation**:
   - User inputs a URL.
   - JavaScript validates the URL format.
   - If valid, an AJAX request is sent to the Rebrandly API.
   - The API response provides the short URL, which is displayed to the user.
   
2. **Dark Mode**:
   - The page dynamically switches between light and dark themes using CSS variable overrides.
   - User preferences persist while toggling themes.

3. **Analog Clock**:
   - The clock uses CSS animations for a smooth ticking effect.
   - It updates automatically in sync with the current time.

---

## Customization

### API Key
- Replace the `apikey` in the `script.js` file with your own Rebrandly API key:
    ```javascript
    const requestHeaders = {
        "Content-Type": "application/json",
        "apikey": "YOUR_API_KEY",
    };
    ```

### Styling
- Update `style.css` to customize colors, fonts, or animations. Examples:
    - Change button hover effect:
        ```css
        .wrap_btn:hover {
            transform: scale(1.15);
        }
        ```

### Analog Clock
- Modify clock styles in `style.css` for a different look:
    ```css
    .clock-hand {
        background-color: var(--accent-color);
    }
    ```

---

## File Structure

```bash
short-link-generator/
│
├── index.html # Main HTML file
├── style.css # Styling for the app
├── script.js # JavaScript for functionality
├── README.md # Project documentation
```
