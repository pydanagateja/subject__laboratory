# 📄 Module PDF Creation Guide

## Where to Place PDF Files

Create the following folder and add your PDF files:

```
digital-laboratory/
└── public/
    └── pdfs/
        ├── module-1.pdf  (Introduction)
        ├── module-2.pdf  (Data Extraction)
        ├── module-3.pdf  (Data Visualization)
        ├── module-4.pdf  (Statistical Thinking)
        └── module-5.pdf  (Time Series Analysis and Predictive Modeling)
```

## Module Content for PDFs

### Module 1: Introduction (9 Periods)
**Topics to include:**
1. Definition of Data Science
2. Skills for Data Science
3. Tools for Data Science
4. Data Types and Data Collections
5. Data Preprocessing
6. Data Analysis and Data Analytics
7. Descriptive Analysis
8. Diagnostic Analytics
9. Predictive Analytics
10. Prescriptive Analytics
11. Exploratory Analysis
12. Mechanistic Analysis

### Module 2: Data Extraction (9 Periods)
**Topics to include:**
1. Extracting Meaning from Data
2. Feature Selection Techniques
3. User Retention Analysis
4. Filters and Wrappers
5. Entropy in Feature Selection
6. Decision Tree Algorithm
7. Random Forests
8. The Dimensionality Problem
9. Single Value Decomposition (SVD)
10. Principal Component Analysis (PCA)

### Module 3: Data Visualization (8 Periods)
**Topics to include:**
1. Brief Matplotlib API Primer
2. Plotting with Pandas and Seaborn
3. Line Plots
4. Bar Plots
5. Histograms and Density Plots
6. Scatter Plots
7. Facet Grids
8. Categorical Data Visualization
9. Other Python Visualization Tools

### Module 4: Statistical Thinking (11 Periods)
**Topics to include:**
1. Distributions - Representing and Plotting Histograms
2. Outliers Detection
3. Summarizing Distributions
4. Variance and Reporting Results
5. Probability Mass Function (PMF)
6. Plotting PMFs and Visualizations
7. The Class Size Paradox
8. Data Frame Indexing
9. Cumulative Distribution Functions (CDFs)
10. Limits of PMFs
11. Representing CDFs
12. Percentile Based Statistics
13. Random Numbers Generation
14. Comparing Percentile Ranks
15. Modeling Distributions
16. Exponential Distribution
17. Normal Distribution
18. Lognormal Distribution

### Module 5: Time Series Analysis and Predictive Modeling (8 Periods)
**Topics to include:**
1. Time Series Analysis - Importing and Cleaning
2. Plotting Time Series Data
3. Moving Averages
4. Handling Missing Values
5. Serial Correlation
6. Autocorrelation Analysis
7. Predictive Modeling Overview
8. Evaluating Predictive Models
9. Building Predictive Model Solutions
10. Sentiment Analysis

## How to Create PDFs

### Option 1: Using Microsoft Word/Google Docs
1. Create a document with module content
2. Add heading, topics, explanations, and examples
3. Export as PDF
4. Name it according to module (e.g., module-1.pdf)

### Option 2: Using LaTeX/Overleaf (Professional)
1. Create structured document with sections
2. Add code examples, diagrams, and formulas
3. Compile to PDF
4. Name appropriately

### Option 3: Using PowerPoint/Google Slides
1. Create presentation slides with module content
2. Export as PDF
3. Name according to module

## PDF Content Structure Recommendation

Each PDF should include:

1. **Cover Page**
   - Module Number and Title
   - Course: Data Science (22DS102006)
   - Number of Periods

2. **Table of Contents**
   - List all topics covered

3. **Topics (Each topic should have)**
   - Topic title
   - Explanation/Theory
   - Code examples (if applicable)
   - Diagrams/Charts (if applicable)
   - Key takeaways

4. **Summary**
   - Key points recap
   - Learning outcomes

5. **References**
   - Books, websites, resources

## Quick Steps to Add PDFs

1. **Create the folder:**
```bash
mkdir public/pdfs
```

2. **Add your PDF files** to `public/pdfs/` folder

3. **Test the download:**
   - Run: `npm run dev`
   - Go to `/modules/1` (or any module)
   - Click "Open PDF" or "Download PDF"

## Features Already Implemented

✅ **Download Button** - Downloads PDF directly
✅ **Open PDF Button** - Opens PDF in viewer
✅ **PDF Viewer** - Embedded iframe viewer
✅ **External Link** - Opens PDF in new tab
✅ **Error Handling** - Shows "PDF not available yet" message if file missing
✅ **Close Button** - Closes PDF viewer

## What Happens If PDFs Are Missing?

The website will show a friendly message:
> "📄 PDF not available yet
> This module's PDF is being prepared. Please check back soon."

The website will still work perfectly - it just won't show the actual PDF content.

## Need Help Creating PDFs?

You can:
1. Create simple text documents with module topics
2. Take existing course materials and convert to PDF
3. Use online PDF creators
4. Copy content from reliable Data Science resources

---

**Once you add the PDFs, the download buttons will work automatically!**
