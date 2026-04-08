An interactive, high-performance Dashboard built for pet sitters in Rover. It transforms raw pet-sitting data into a beautiful Bento Grid interface.

# 🛠 Tech Stack
- Framework: React 19 + Vite

- Language: TypeScript (Strictly typed)

- Styling: CSS Modules (Scoped styles)

- Icons/UI: Phosphor icons + CSS-based animations.

# ✨ Key Features
- Responsive Bento Grid Layout: Optimized for desktop and mobile visualization.

- Star Sitter Metrics: Visual progress indicators with dynamic "target" calculations driven by backend data.
  
- Bookings Activity Manager: A unified, tabbed interface for switching between "Active" and "History" views without layout shifts.

- Custom Hooks: Specialized useGetRequest hook for centralized, type-safe API fetching.

# 🏗 Architecture
📂 /components: Modular UI elements categorized into atoms, molecules, and organisms (Atomic Design).

📂 /hooks: Encapsulated logic for data fetching and global state management.

📂 /layouts: Structural components defining page-level organization.

📂 /types: TypeScript interfaces mapped directly to Backend serializers.

📂 /utils: Pure utility functions for data transformation and formatting.

# 🎨 Design Philosophy

Pawmetrics prioritizes a smooth user experience. By leveraging subtle CSS transitions and purposeful animations, the dashboard remains fluid as sitters navigate their business data across different timeframes.

The UI provides explicit visual feedback for:

⏳ Loading states

⚠️ Error handling

📦 Empty states
