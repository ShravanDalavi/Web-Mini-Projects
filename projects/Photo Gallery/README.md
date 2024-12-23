# Photo Gallery

This project is a simple **Photo Gallery** application combined with a form for uploading image details. Users can view a gallery of photos, and administrators or users can add new photos by filling out the provided form.


## Features

1. Responsive Design:

- The gallery adapts to different screen sizes using CSS media queries.
- Images resize dynamically for mobile and desktop views.
  
2. Interactive Lightbox:

- Clicking an image opens it in a fullscreen lightbox for better viewing.
- Includes a close button to exit the lightbox.

3. Hover Effects:

- Images scale and show a shadow effect when hovered over.

4. Grid Display:

- A grid-based structure showcases multiple images in an organized manner.
- Includes animation for a dynamic and interactive experience.


## Demo
[Link to demo](https://lf36l9.csb.app/)

![image](https://github.com/user-attachments/assets/a0e3455b-53e5-4cbe-9388-4e7623438793)


## Installation

1. Clone the repository to your local machine:
```bash
git clone https://github.com/ShravanDalavi/Web-Mini-Projects.git
```
2. Navigate to the project folder:
```bash
cd Web-Mini-Projects/projects/Photo\ Gallery
```
3. Open `index.html` in your web browser to start the clock.
```bash
open index.html
```

## Usage

1. Image Viewing:

Hover over the images to see the interactive effect.
Click on an image to view it in a lightbox.
Close the lightbox using the × button.

2. Navigation:

Scroll through the gallery to browse available images.
Responsive layout ensures usability across devices.


## Customization
1. Adding Images:

Place new images in the `Photo` folder.
Add corresponding `<img` tags in the `index.html` file within the `.gallery div`.

2. Styling:

Modify `styles.css` for changes to colors, fonts, spacing, or layout.
Adjust hover and animation effects by editing the CSS transitions or keyframes.

3. JavaScript Enhancements:

Extend functionality in `script.js`, such as adding slideshow capabilities or integrating third-party libraries.

## File Structure
```graphql
Photo Gallery/
│
├── index.html   # Main HTML file for the gallery
├── styles.css   # Styling for the gallery and lightbox
├── script.js    # JavaScript for lightbox functionality
├── Photo/       # Folder containing all gallery images
│   ├── Image1.jpg
│   ├── Image2.jpg
│   └── ...

```

