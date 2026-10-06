# DIGITAL LABORATORY - Data Science

A professional, modern, and responsive educational web application for Data Science laboratory experiments.

## 🎯 Project Overview

Digital Laboratory is a comprehensive web-based learning platform designed for college Data Science courses. It functions as a digital lab manual where students can search experiments, watch explanation videos, read theory, view Python code with simple explanations, see expected outputs, and access experiment sub-topics.

### Course Information
- **Course Name:** Data Science
- **Course Code:** 22DS102006
- **Department:** Data Science
- **Section:** 02

### Student & Faculty Information
- **Student:** P. Naga Teja (Roll No: 24102A030102)
- **Faculty:** Bosu Babu (Assistant Professor)

## ✨ Features

- **🔍 Advanced Search** - Search experiments by title, technology, keywords, or topics
- **📂 Category Filtering** - Filter experiments by categories (Pandas, Visualization, etc.)
- **🎥 Video Placeholders** - Professional video placeholders for experiment explanations
- **💻 Code Blocks** - Syntax-highlighted code with copy functionality
- **📝 Simple Explanations** - Step-by-step code breakdowns
- **🌍 Real-world Applications** - Practical use cases for each experiment
- **❓ Viva Questions** - Curated questions for exam preparation
- **🔗 Google Colab Integration** - Direct links to run code in Colab
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- **🎨 Modern UI/UX** - Clean, professional interface with smooth animations

## 🧪 Experiments Covered

1. **Working with Different Data Formats** - CSV, JSON, Excel operations
2. **Web APIs and Databases** - REST APIs, SQL operations
3. **Data Cleaning and Preparation** - Missing data, outliers, text processing
4. **Data Wrangling** - Hierarchical indexing, merge, combine
5. **Data Visualization** - Matplotlib and Seaborn plots
6. **Time Series Analysis** - Temporal data, resampling
7. **Data Aggregation** - GroupBy operations
8. **Web Scraping** - Beautiful Soup, sentiment analysis
9. **Customer Personality Analysis** - Segmentation case study
10. **Text Emotions Detection** - NLP and emotion classification

## 🛠️ Technology Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Language:** JavaScript (ES6+)

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone or navigate to the project directory:**
   ```bash
   cd digital-laboratory
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173/`

## 🚀 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

To preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
digital-laboratory/
├── public/
│   ├── videos/           # Experiment video files
│   └── assets/           # Static assets (images, logos)
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── StudentProfile.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── ExperimentCard.jsx
│   │   ├── ExperimentGrid.jsx
│   │   ├── VideoPlayer.jsx
│   │   └── CodeBlock.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── ExperimentsPage.jsx
│   │   ├── ExperimentDetail.jsx
│   │   ├── Resources.jsx
│   │   └── About.jsx
│   ├── data/             # Data files
│   │   └── experiments.json
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Key Components

### Header
- Responsive navigation bar
- Mobile hamburger menu
- Student profile icon
- Active route highlighting

### Search & Filter
- Real-time search across experiments
- Category-based filtering
- Result count display

### Experiment Cards
- Video preview placeholder
- Technology tags
- Real-world application preview
- Sub-experiment count

### Experiment Detail Page
- Comprehensive experiment information
- Video player with placeholder
- Sub-experiments with code blocks
- Code explanations
- Expected outputs
- Theory sections
- Viva questions
- Navigation between experiments

### Code Block
- Syntax highlighting
- Copy to clipboard functionality
- Language indicator

## 📚 Data Structure

Experiments are stored in `src/data/experiments.json` with the following structure:

```json
{
  "id": 1,
  "number": "01",
  "title": "Experiment Title",
  "shortDescription": "Brief description",
  "aim": "Experiment objective",
  "overview": "Detailed overview",
  "technologies": ["Python", "Pandas"],
  "keywords": ["csv", "json", "data"],
  "video": "/videos/experiment-01.mp4",
  "colabUrl": "https://colab.research.google.com/",
  "realWorldApplication": "Practical use case",
  "learningObjectives": [...],
  "subExperiments": [...],
  "theory": "Theoretical background",
  "result": "Expected result",
  "vivaQuestions": [...]
}
```

## 🎯 Features Roadmap

### Current Version (v1.0)
✅ Complete frontend architecture  
✅ 10 experiments with detailed information  
✅ Search and filter functionality  
✅ Responsive design  
✅ Code blocks with copy functionality  
✅ Video placeholders  
✅ Google Colab integration  

### Future Enhancements
- 🎥 Add actual experiment videos
- 🤖 AI-powered experiment explanations
- 💬 AI lab assistant chatbot
- 🎬 AI-generated experiment videos
- 🗄️ Backend API integration
- 🔐 User authentication
- 📊 Progress tracking
- 🎓 Quiz and assessment features
- 📱 Progressive Web App (PWA)

## 🔧 Customization

### Adding New Experiments
1. Open `src/data/experiments.json`
2. Add a new experiment object with all required fields
3. Ensure unique `id` and `number`
4. Include all sub-experiments, code examples, and explanations

### Changing Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Adding Videos
1. Place video files in `public/videos/`
2. Update the `video` field in experiments.json
3. Supported format: MP4

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is created for educational purposes.

## 🤝 Contributing

This is a college project. For suggestions or improvements, please contact the student or faculty mentioned above.

## 📧 Contact

- **Student:** P. Naga Teja (24102A030102)
- **Faculty:** Bosu Babu, Assistant Professor
- **Department:** Data Science, Section 02

## 🙏 Acknowledgments

- Course: Data Science (22DS102006)
- All referenced textbooks and online resources
- Open source libraries and frameworks used

---

**Note:** This is a first version of the Digital Laboratory platform. Video content and additional interactive features will be added in future updates.
