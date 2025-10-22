const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Create dist directory
const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Create notes directory in dist
const notesDir = path.join(distDir, 'notes');
if (!fs.existsSync(notesDir)) {
    fs.mkdirSync(notesDir, { recursive: true });
}

// Read all markdown files (exclude README and SETUP_INSTRUCTIONS)
const markdownFiles = fs.readdirSync(__dirname + '/..')
    .filter(file => file.endsWith('.md') && 
            file !== 'README.md' && 
            file !== 'SETUP_INSTRUCTIONS.md');

console.log(`Found ${markdownFiles.length} markdown files`);

// Generate HTML for each markdown file
const noteCards = [];

markdownFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract title from filename
    const filename = path.basename(file, '.md');
    const parts = filename.split('_');
    
    // Try to extract subject code and title
    let subject = parts[0].toUpperCase();
    let title = parts.slice(1).join(' ').replace(/-/g, ' ');
    
    // If title is empty, use filename
    if (!title) {
        title = filename.replace(/-/g, ' ');
    }
    
    // Generate HTML content
    const htmlContent = marked(content);
    
    // Create HTML page for the note
    const noteHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - Abhay's Notes Hub</title>
    <link rel="stylesheet" href="../note-style.css">
</head>
<body>
    <header>
        <div class="container">
            <a href="../index.html" class="back-link">← Back to Notes</a>
            <h1>${title}</h1>
            <p class="subject-tag">${subject}</p>
        </div>
    </header>
    <main class="container">
        <article class="note-content">
            ${htmlContent}
        </article>
    </main>
    <footer>
        <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>
    </footer>
</body>
</html>`;
    
    // Save the HTML file
    const htmlFileName = filename + '.html';
    fs.writeFileSync(path.join(notesDir, htmlFileName), noteHtml);
    
    // Create a short description (first 150 chars of content)
    const plainText = content.replace(/[#*`\[\]]/g, '').substring(0, 150);
    const description = plainText.trim() + '...';
    
    // Add to note cards
    noteCards.push({
        subject: subject,
        title: title,
        description: description,
        link: `notes/${htmlFileName}`,
        file: filename
    });
});

// Generate index.html
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abhay's Notes Hub - IGNOU Study Notes</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="container">
            <div class="header-content">
                <h1>📚 Abhay's Notes Hub</h1>
                <p class="subtitle">IGNOU Study Notes & Resources</p>
            </div>
        </div>
    </header>
    
    <main class="container">
        <section class="search-section">
            <input type="text" id="search-bar" placeholder="🔍 Search notes by subject or topic...">
        </section>
        
        <section class="stats">
            <div class="stat-card">
                <div class="stat-number">${noteCards.length}</div>
                <div class="stat-label">Total Notes</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${new Set(noteCards.map(n => n.subject)).size}</div>
                <div class="stat-label">Subjects</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">Updated</div>
                <div class="stat-label">${new Date().toLocaleDateString()}</div>
            </div>
        </section>
        
        <section class="notes-section">
            <h2>📖 Available Notes</h2>
            <div class="notes-grid" id="notes-grid">
                ${noteCards.map(note => `
                <div class="note-card" data-subject="${note.subject.toLowerCase()}" data-title="${note.title.toLowerCase()}">
                    <div class="note-header">
                        <span class="subject-badge">${note.subject}</span>
                    </div>
                    <h3>${note.title}</h3>
                    <p class="note-description">${note.description}</p>
                    <div class="note-footer">
                        <a href="${note.link}" class="btn view-btn">View Notes</a>
                    </div>
                </div>
                `).join('')}
            </div>
        </section>
        
        <section class="about-section">
            <h2>About This Hub</h2>
            <p>This is a collection of study notes for IGNOU courses. Notes are automatically updated when new content is added to the repository. Share with your friends and study together! 🎓</p>
            <p><strong>How to use:</strong> Browse the notes above, use the search bar to find specific topics, and click "View Notes" to read them.</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>
        <p>Last updated: ${new Date().toLocaleString()}</p>
    </footer>
    
    <script>
        // Search functionality
        const searchBar = document.getElementById('search-bar');
        const notesGrid = document.getElementById('notes-grid');
        const noteCards = document.querySelectorAll('.note-card');
        
        searchBar.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            noteCards.forEach(card => {
                const subject = card.dataset.subject;
                const title = card.dataset.title;
                
                if (subject.includes(searchTerm) || title.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);

// Copy CSS files
const styleCSS = `/* Modern styling for the notes hub */
:root {
    --primary: #0366d6;
    --primary-dark: #0256b8;
    --secondary: #38bdf8;
    --bg: #f8fafc;
    --card: #ffffff;
    --text: #0f172a;
    --text-muted: #64748b;
    --border: #e2e8f0;
    --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
header {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    color: white;
    padding: 3rem 0;
    text-align: center;
    box-shadow: var(--shadow-lg);
}

.header-content h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
}

.subtitle {
    font-size: 1.2rem;
    opacity: 0.95;
}

/* Search Section */
.search-section {
    margin: 2rem 0;
}

#search-bar {
    width: 100%;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    border: 2px solid var(--border);
    border-radius: 50px;
    background: var(--card);
    transition: all 0.3s ease;
    box-shadow: var(--shadow);
}

#search-bar:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.1);
}

/* Stats Section */
.stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
}

.stat-card {
    background: var(--card);
    padding: 1.5rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
}

.stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 0.5rem;
}

.stat-label {
    color: var(--text-muted);
    font-size: 0.9rem;
}

/* Notes Section */
.notes-section {
    margin: 3rem 0;
}

.notes-section h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--text);
}

.notes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.note-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
}

.note-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary);
}

.note-header {
    margin-bottom: 1rem;
}

.subject-badge {
    display: inline-block;
    background: var(--primary);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
}

.note-card h3 {
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
    color: var(--text);
}

.note-description {
    color: var(--text-muted);
    font-size: 0.95rem;
    margin-bottom: 1rem;
    line-height: 1.5;
}

.note-footer {
    display: flex;
    gap: 0.5rem;
}

.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    text-align: center;
    cursor: pointer;
}

.view-btn {
    background: var(--primary);
    color: white;
    flex: 1;
}

.view-btn:hover {
    background: var(--primary-dark);
    transform: scale(1.02);
}

/* About Section */
.about-section {
    background: var(--card);
    padding: 2rem;
    border-radius: 12px;
    margin: 3rem 0;
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
}

.about-section h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: var(--text);
}

.about-section p {
    color: var(--text-muted);
    margin-bottom: 1rem;
}

/* Footer */
footer {
    text-align: center;
    padding: 2rem 0;
    color: var(--text-muted);
    border-top: 1px solid var(--border);
    margin-top: 3rem;
}

footer p {
    margin: 0.25rem 0;
}

/* Responsive */
@media (max-width: 768px) {
    .header-content h1 {
        font-size: 2rem;
    }
    
    .notes-grid {
        grid-template-columns: 1fr;
    }
    
    .stats {
        grid-template-columns: 1fr;
    }
}
`;

const noteStyleCSS = `/* Styling for individual note pages */
:root {
    --primary: #0366d6;
    --primary-dark: #0256b8;
    --bg: #f8fafc;
    --card: #ffffff;
    --text: #0f172a;
    --text-muted: #64748b;
    --border: #e2e8f0;
    --code-bg: #f1f5f9;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.7;
}

.container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
header {
    background: linear-gradient(135deg, var(--primary) 0%, #38bdf8 100%);
    color: white;
    padding: 2rem 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.back-link {
    display: inline-block;
    color: white;
    text-decoration: none;
    margin-bottom: 1rem;
    font-weight: 600;
    opacity: 0.9;
    transition: opacity 0.3s ease;
}

.back-link:hover {
    opacity: 1;
}

header h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.subject-tag {
    display: inline-block;
    background: rgba(255, 255, 255, 0.2);
    padding: 0.3rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
}

/* Main Content */
main {
    padding: 2rem 0;
}

.note-content {
    background: var(--card);
    padding: 3rem;
    border-radius: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border);
}

/* Typography */
.note-content h1 {
    font-size: 2rem;
    margin: 2rem 0 1rem;
    color: var(--text);
    border-bottom: 3px solid var(--primary);
    padding-bottom: 0.5rem;
}

.note-content h2 {
    font-size: 1.6rem;
    margin: 1.5rem 0 1rem;
    color: var(--text);
}

.note-content h3 {
    font-size: 1.3rem;
    margin: 1.25rem 0 0.75rem;
    color: var(--text);
}

.note-content p {
    margin-bottom: 1rem;
    color: var(--text);
}

.note-content ul, .note-content ol {
    margin: 1rem 0 1rem 2rem;
}

.note-content li {
    margin-bottom: 0.5rem;
}

/* Code blocks */
.note-content code {
    background: var(--code-bg);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
}

.note-content pre {
    background: var(--code-bg);
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1rem 0;
    border: 1px solid var(--border);
}

.note-content pre code {
    background: none;
    padding: 0;
}

/* Tables */
.note-content table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
}

.note-content th, .note-content td {
    border: 1px solid var(--border);
    padding: 0.75rem;
    text-align: left;
}

.note-content th {
    background: var(--code-bg);
    font-weight: 600;
}

/* Blockquotes */
.note-content blockquote {
    border-left: 4px solid var(--primary);
    padding-left: 1rem;
    margin: 1rem 0;
    color: var(--text-muted);
    font-style: italic;
}

/* Links */
.note-content a {
    color: var(--primary);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s ease;
}

.note-content a:hover {
    border-bottom-color: var(--primary);
}

/* Footer */
footer {
    text-align: center;
    padding: 2rem 0;
    color: var(--text-muted);
    border-top: 1px solid var(--border);
    margin-top: 3rem;
}

/* Responsive */
@media (max-width: 768px) {
    .note-content {
        padding: 1.5rem;
    }
    
    header h1 {
        font-size: 1.5rem;
    }
    
    .note-content h1 {
        font-size: 1.6rem;
    }
}
`;

fs.writeFileSync(path.join(distDir, 'style.css'), styleCSS);
fs.writeFileSync(path.join(distDir, 'note-style.css'), noteStyleCSS);

console.log('✅ Site generated successfully!');
console.log(`📝 Generated ${noteCards.length} note pages`);
console.log(`📁 Output directory: ${distDir}`);
