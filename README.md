# Windsurf - Autonomous Aircraft Fueling App

A mobile-friendly web application for ordering aircraft refueling services with robotic fuel truck integration.

## Features

- **Mobile-First Design**: Optimized for smartphone access via QR code
- **Fuel & Aircraft Compatibility**: Automatic fuel type and nozzle selection based on aircraft
- **Real-Time Order Logbook**: Live updates of fuel orders
- **Responsive UI**: Works seamlessly across all device sizes
- **Aviation Safety**: Built-in logic prevents incompatible fuel/aircraft combinations

## Aircraft & Fuel Compatibility

- **Cessna 172**: Avgas 100LL, Over-wing nozzle
- **Airbus A320**: Jet-A, Under-wing pressure nozzle
- **Gulfstream G550**: Jet-A, Under-wing pressure nozzle
- **AW139 Helicopter**: Jet-A, Over-wing nozzle
- **Beechcraft King Air 350**: Jet-A, Over-wing nozzle

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

Build for production:
```bash
npm run build
```

The app can be deployed to GitHub Pages, Netlify, or any static hosting service.

## Technology Stack

- **Frontend**: React 18
- **Styling**: CSS3 with Flexbox/Grid
- **Responsive Design**: Mobile-first approach
- **Icons**: Unicode emojis for universal compatibility

## Demo Usage

1. Select an aircraft type from the dropdown
2. Fuel type automatically sets based on aircraft compatibility
3. Enter fuel amount in liters
4. Specify aircraft location (gate, hangar, etc.)
5. Submit order to see it appear in the logbook

Perfect for aviation industry demonstrations and hackathon presentations!
