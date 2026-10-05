# Spark

A React web platform presenting Spark's digital services, projects, team, and learning opportunities. It includes separate experiences for company clients and students, including service requests, student projects, courses, and project viewing.

## Features
- Company and student service and project pages.
- Request and booking flows for services, projects, and courses.
- Team, company projects, services, and app information pages.
- Client-side routing with lazy-loaded page components.
- API client configured for the Spark backend.

## Tech stack
- React 18 and React Router 6
- Create React App
- Axios
- Bootstrap, Tailwind CSS, and Framer Motion

## Getting started
```bash
git clone https://github.com/IbrahemMohammad09/Spark.git
cd Spark
npm install
npm start
```

The development server runs at [http://localhost:3000](http://localhost:3000).

## Available scripts
- `npm start` — start the development server.
- `npm test` — run tests in watch mode.
- `npm run build` — build the production application.
- `npm run eject` — expose the Create React App configuration (one-way).

## Configuration
The Axios client in `src/api/axios.js` currently targets the Spark API hosted at `sparkeng.pythonanywhere.com`. Review the backend availability and required API behavior before deploying or relying on live data.

## Source layout
- `src/pages/` — routed pages for company and student experiences.
- `src/components/` — shared sections and interface components.
- `src/api/` — HTTP client configuration.

## License
No license is specified in the repository. Contact the owner before reuse or redistribution.
