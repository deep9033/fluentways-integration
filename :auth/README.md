# FluentWays - English Learning Platform

A modern React application featuring a comprehensive dashboard for English learning with direct access (no authentication required).

## Features

- **Direct Dashboard Access**: No login required - dashboard accessible immediately
- **User Type Simulation**: Toggle between premium and new user experiences
- **Comprehensive Dashboard**: Full-featured dashboard with multiple sections
- **Responsive Design**: Works on desktop and mobile devices
- **Demo Session Booking**: Direct integration with Razorpay for demo sessions
- **Plan Management**: Complete plan purchase and management system

## Project Structure

```
src/
├── components/
│   ├── Sidebar.js          # Navigation sidebar
│   ├── Sidebar.css
│   ├── TopNav.js           # Top navigation bar
│   ├── TopNav.css
│   ├── Button.js           # Reusable button component
│   ├── Button.css
│   ├── Card.js             # Card component
│   ├── Card.css
│   ├── Input.js            # Input component
│   └── Input.css
├── pages/
│   ├── Dashboard.js        # Main dashboard with routing
│   ├── Dashboard.css
│   ├── Home.js             # Home page
│   ├── Home.css
│   ├── MySessions.js       # Sessions management
│   ├── MySessions.css
│   ├── MyProgress.js       # Progress tracking
│   ├── MyProgress.css
│   ├── MyPlan.js           # Plan management
│   ├── MyPlan.css
│   ├── Settings.js         # Settings page
│   └── Settings.css
├── utils/
│   └── userType.js         # User type detection logic
├── App.js                  # Main app component
├── App.css
├── index.js               # App entry point
└── index.css
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## User Types

- **Premium Users**: Set `userType = 'premium'` in Dashboard.js
- **New Users**: Set `userType = 'new'` in Dashboard.js (default)

## Dashboard Features

- **Home**: Welcome page with user-specific content
- **My Sessions**: Session management and booking
- **My Progress**: Learning progress tracking
- **My Plan**: Plan management and purchase options
- **Settings**: User settings and preferences

## Key Features

- **Direct Access**: No authentication required
- **Dashboard Navigation**: Full sidebar navigation
- **Demo Booking**: Direct link to Razorpay demo session booking
- **Plan Purchase**: Integration with Razorpay for plan purchases
- **Responsive Design**: Works on desktop and mobile devices

## Technologies Used

- React 18
- React Router
- CSS3 with CSS Variables
- Razorpay Integration

## Notes

- The app loads directly to the dashboard without any login
- User type can be changed in `src/pages/Dashboard.js` line 15
- All demo session buttons link to the Razorpay URL
- Plan purchase buttons link to respective Razorpay payment links
- The logo should be placed in the `public` directory as `logo.png` 