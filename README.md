📍 React Geo Data Dashboard

A React-based dashboard to visualize geo-referenced project data in both tabular and map formats, with synchronized interactions and performance optimization for large datasets.

## 🚀 Objective

Build a React application that consumes mock spatial + tabular data and presents it via:

A high-performance data table

An interactive map (Leaflet)

Both views stay fully synchronized.

## 🛠 Tech Stack

React + Vite

TypeScript (strict mode, verbatimModuleSyntax)

Material UI (MUI) + DataGrid

Leaflet + react-leaflet

Local mock API (JSON-based)

## 📁 Folder Structure & Component Decomposition

```txt
src/
├── api/          # Mock API layer (async, paginated)
├── hooks/        # Data-fetching & state logic
├── components/   # UI components (Table, Map, Filters)
├── pages/        # Page-level composition
├── types/        # Shared TypeScript types
└── utils/        # Sorting & filtering helpers
```

Why this structure?

Clear separation of data logic vs UI

Reusable and testable components

Scales cleanly as features grow

## 📊 Data Handling Strategy
Mock API

A static JSON file with 5,000 geo records

Simulated network latency

Paginated responses

This approach avoids unnecessary backend complexity and keeps the focus on frontend architecture and performance.

Custom Hook (useGeoData)

Centralized data fetching

Pagination state

Filtering state

Single source of truth

## ⚡ Handling Large Datasets (5k+ rows)

MUI DataGrid with built-in row virtualization

Server-side pagination mode (even with mock data)

Minimal re-renders via scoped state

Result: smooth scrolling and zero UI lag.

🗺 Map + UI Synchronization

A single shared state controls selection:

const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

Interaction Flow

Clicking a table row highlights the corresponding map marker

Clicking a map marker highlights the corresponding table row

No DOM manipulation, no duplicated state — purely React-driven synchronization.

## 🧠 Key Design Decisions

Local state only (no Redux) as per requirements

Type-only imports to comply with strict TypeScript settings

Latest MUI DataGrid API (paginationModel)

Leaflet chosen for simplicity and reliability

## 🧪 Screenshots / Recording

## 📸 Screenshots or a short screen recording demonstrate:

Table pagination & filtering

Map marker rendering

Bidirectional synchronization (table ↔ map)

<img width="1919" height="929" alt="image" src="https://github.com/user-attachments/assets/32c1b322-7957-4012-af08-b98712e842a3" />
<img width="1919" height="934" alt="image" src="https://github.com/user-attachments/assets/491cfb15-0efe-4eb9-b294-bdde47d67694" />
<img width="1919" height="921" alt="image" src="https://github.com/user-attachments/assets/e59bbeec-366b-49ed-88fe-4285357284dc" />
<img width="1918" height="926" alt="image" src="https://github.com/user-attachments/assets/237dbb43-adfd-4afd-aa96-e2ae350ced29" />


## ⏱ Time Spent (Honest Breakdown)

Project setup & architecture: 1.5 hrs

Mock API & data generation: 0.5 hr

Table (performance + pagination): 2 hrs

Map integration & synchronization: 2 hrs

Bug fixes, TypeScript strictness, polish: 1 hr

Total: ~7 hours

## 🔗 GitHub Repository

## 👉 GitHub Link:
https://github.com/Dushant-A-Banpurkar/geo-visual

## ✅ Evaluation Criteria Mapping
Criteria	How it’s addressed
Component decomposition	Feature-based folder structure
Handling large datasets	Virtualized MUI DataGrid
Map + UI synchronization	Shared selection state
Code readability	Typed APIs, hooks, clean separation
## 🔮 Possible Improvements

Map clustering for dense markers

URL-based state (deep linking)

Backend-powered pagination & filtering

Unit tests for hooks and utilities

## 🏁 Final Note

This project focuses on clarity, performance, and maintainability, closely mirroring real-world frontend architecture rather than a demo-style implementation.
