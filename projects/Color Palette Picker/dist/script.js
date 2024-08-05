document.addEventListener('DOMContentLoaded', () => {
    const palettePicker = document.getElementById('palette-picker');
    const colorOutput = document.getElementById('color-output');
    
    // Generate a color palette
    const colors = generateColorPalette();
    
    // Populate the color palette
    colors.forEach(color => {
        const colorDiv = document.createElement('div');
        colorDiv.className = 'color';
        colorDiv.style.backgroundColor = color;
        colorDiv.dataset.color = color;
        colorDiv.addEventListener('click', () => {
            colorOutput.value = color;
        });
        palettePicker.appendChild(colorDiv);
    });
});

// Function to generate a wide range of colors
function generateColorPalette() {
    const colors = [];
    const step = 51; // Adjust this value to control the number of colors generated (51 provides 6^3 = 216 colors)
    
    for (let r = 0; r <= 255; r += step) {
        for (let g = 0; g <= 255; g += step) {
            for (let b = 0; b <= 255; b += step) {
                colors.push(`rgb(${r}, ${g}, ${b})`);
            }
        }
    }
    
    return colors;
}