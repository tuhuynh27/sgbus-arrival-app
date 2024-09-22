# SG Bus Arrival

SG Bus Arrival is a real-time bus tracking application tailored for commuters in Singapore. Unlike general platforms like Google Maps, this app allows you to pin specific bus stop locations near your home or workplace. By doing so, you can quickly access the app during your daily routine to know exactly when to start walking from your location to catch your bus, providing a more convenient and streamlined experience.

## Table of Contents

- [Features](#features)
- [Why SG Bus Arrival?](#why-sg-bus-arrival)
- [Live Demo](#live-demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **Real-Time Bus Arrivals**: Get up-to-date information on bus arrival times for your selected bus stops and bus numbers.
- **Customizable Bus Stops**: Pin bus stop locations that are relevant to your daily routine, such as near your home or workplace.
- **Notifications**: Receive alerts when your bus is approaching, ensuring you never miss your bus.
- **Rain Forecast**: View rain forecasts to plan your commute accordingly.
- **Theme Toggle**: Switch between light and dark modes for comfortable viewing in different environments.
- **Service Worker Support**: Enhanced performance and offline capabilities through service workers.

## Why SG Bus Arrival?

While platforms like Google Maps provide bus arrival times, SG Bus Arrival offers a more tailored and convenient experience for daily commuters:

- **Pin Specific Bus Stops**: Easily pin bus stops that you frequently use, such as those near your home or workplace.
- **Quick Access During Commute**: Open the app to instantly see when you need to start walking from your location to catch your bus.
- **Streamlined Experience**: Focus on the bus stops that matter to you without navigating through unrelated locations.

## Live Demo

[View the Live Demo](#) <!-- Replace with actual link if available -->

## Installation

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Safari)
- Internet connection to load external dependencies

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/sg-bus-arrival.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd sg-bus-arrival
   ```

3. **Open the Application**

   Open the `index.html` file in your preferred web browser.

   - **Option 1**: Double-click the `index.html` file.
   - **Option 2**: Serve the application using a local server (recommended for service workers).

     ```bash
     # Using Python's SimpleHTTPServer
     python3 -m http.server 8000
     ```

     Then, navigate to `http://localhost:8000` in your browser.

## Usage

1. **Adding Bus Stops**

   - Click on the **Configuration** button (gear icon).
   - Enter the **Station ID** of the bus stop you want to track and click the **Add** button.
   - Optionally, add specific bus numbers to track for each station.

2. **Viewing Bus Arrivals**

   - The main screen displays the arrival times for buses at your selected stations.
   - Click the **Refresh** button to manually update bus arrival times.

3. **Setting Notifications**

   - Click the **Bell** icon next to a bus to set a notification alert when the bus is approaching.

4. **Rain Forecast**

   - View the current rain forecast to plan your commute accordingly.

5. **Theme Toggle**

   - Switch between light and dark modes using the **Moon/Sun** icon.

6. **Information**

   - Click the **Info** button to view more information about the app.

## Technologies

- **Preact**: A fast 3kB alternative to React with the same modern API.
- **HTM**: JSX-like syntax for Preact using tagged template literals.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **DaisyUI**: Tailwind CSS component library for building accessible and responsive UI elements.
- **Feather Icons**: A collection of simply beautiful open-source icons.
- **Service Workers**: Enhancing performance and enabling offline capabilities.
- **Open-Meteo API**: For fetching rain forecast data.
- **Busrouter.sg API**: For fetching real-time bus arrival data.

## Contributing

Contributions are welcome! If you'd like to contribute to SG Bus Arrival, please follow these steps:

1. **Fork the Repository**

2. **Create a New Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "Add your message"
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**

## License

[MIT License](LICENSE) <!-- Replace with actual license if different -->

## Acknowledgments

- **[busrouter.sg](https://busrouter.sg)** for providing real-time bus data.
- **[Open-Meteo](https://open-meteo.com)** for weather forecast data.
- **[Tailwind CSS](https://tailwindcss.com)** and **[DaisyUI](https://daisyui.com)** for their fantastic UI frameworks.
- **[Feather Icons](https://feathericons.com)** for the beautiful icons used in the app.
- **[Preact](https://preactjs.com)** and **[HTM](https://github.com/developit/htm)** for enabling a lightweight and efficient frontend experience.
