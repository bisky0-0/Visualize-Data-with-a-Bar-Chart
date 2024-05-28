// FreeCodeCamp Data Visualization Project: D3 and JSON

This project is a part of the FreeCodeCamp Data Visualization Certification. It demonstrates the use of D3.js to create a bar chart that visualizes GDP data retrieved from a JSON file.

## Project Overview

The goal of this project is to create an interactive bar chart using D3.js to display GDP data. The chart includes custom tooltips and is styled to respond to user interactions such as hovering over the bars.

## Features

- Fetches GDP data from a remote JSON file.
- Visualizes data using a bar chart with D3.js.
- Adds custom tooltips that display detailed information.
- Highlights bars on hover with a smooth color transition.
- Customizable axes with filtered tick values for better readability.

## Technologies Used

- JavaScript (ES6+)
- D3.js (v6)
- HTML5
- CSS3

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/freecodecamp-d3-project.git
   cd freecodecamp-d3-project
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:8080` to view the project.

## File Structure

- `index.html`: The main HTML file that contains the container for the D3 visualization.
- `src/`
  - `index.js`: The entry point of the application.
  - `data.js`: Contains the function to fetch the GDP data.
  - `d3Component.js`: Contains the D3.js code to create the bar chart.
  - `styles.css`: Contains the CSS styles for the project.
