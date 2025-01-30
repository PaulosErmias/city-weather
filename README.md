# Weather Dashboard Challenge

[![Next.js](https://img.shields.io/badge/Next.js-13.5-blue?logo=next.js)](https://nextjs.org/)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-1.9-purple?logo=redux)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)

A weather dashboard built with Next.js and Redux Toolkit that fulfills all requirements of the internship challenge, featuring real-time weather data, elegant UI, and robust error handling.

**Live Demo:** [https://weather-dashboard-internship.vercel.app/](https://your-deployment-link.com)

## ✅ Challenge Requirements Implementation

### Core Requirements Met

| Feature | Implementation Details |
|---------|------------------------|
| **Homepage Search** | - Search bar with city input <br> - Redux-managed search state <br> - Responsive design with Tailwind CSS |
| **City Weather Page** | - Dynamic routing (`/weather/[city]`) <br> - Displays temperature, humidity, wind speed, weather description <br> - Weather condition icons from OpenWeather API |
| **State Management** | - Redux Toolkit for global state <br> - Stores: `weather`, `loading`, `error` states <br> - Thunks for API calls |
| **API Integration** | - OpenWeather Current Weather API <br> - Axios HTTP client <br> - Error handling for 404/500 responses |
| **Styling** | - Tailwind CSS with custom animations <br> - Glassmorphism design system <br> - Mobile-first responsive layout |
| **Error Handling** | - Invalid city detection <br> - Network error handling <br> - Visual error components with retry action |

### Bonus Features Implemented

- **🌡️ Temperature Unit Toggle**  
  Switch between Celsius/Fahrenheit with animated transitions
- **💾 Search Caching**  
  Redux-powered cache to prevent duplicate API calls
- **🛡 Type Safety**  
  Full TypeScript integration with strict type checking
- **⏳ Loading States**  
  Animated spinner with gradient styling
- **🎨 Advanced Styling**  
  Glassmorphism effects, gradient overlays, and smooth animations

## 🚀 Installation

1. Clone repository:
```bash
git clone https://github.com/your-username/weather-dashboard.git
