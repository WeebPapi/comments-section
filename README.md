React Comment Section Demo

A simple demonstration of virtualized vs. non-virtualized comment rendering in React with TanStack Virtual.

![virtualized](./public/virtualized.png)

![unvirtualized](./public/unvirtualized.png)

Overview:

This project showcases the performance difference between virtualized and traditional rendering approaches when displaying large lists of comments. Toggle between the two modes to experience how virtualization improves scrolling performance and reduces memory usage.

Features:

🔄 Toggle between rendering modes - Switch between virtualized and non-virtualized lists
📊 Performance comparison - See the difference in scrolling smoothness and memory usage
👤 Realistic comment data - Uses DummyJSON.com API for realistic user profiles and comments
📱 Responsive design - Works across different screen sizes

Tech Stack:

- React
- TanStack Query for data fetching
- TanStack Virtual for efficient list rendering
- DummyJSON.com for demo data

Getting Started

```bash

# Clone the repository

git clone https://github.com/WeebPapi/comments-section.git folder

# Navigate to the project directory

cd folder

# Install dependencies

npm install

# Start the development server

npm run dev
```

How It Works:

The demo fetches a list of comments from DummyJSON.com and renders them in two different ways:

Standard Rendering: Renders all comments to the DOM, regardless of visibility
Virtualized Rendering: Only renders comments that are visible in the viewport
Use the toggle switch to alternate between these two approaches and observe the performance difference, especially when scrolling through hundreds of comments.

License:

MIT

---

Built as a demonstration of React virtualization techniques
