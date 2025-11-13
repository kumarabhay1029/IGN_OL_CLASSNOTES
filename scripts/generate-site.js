const fs = require('fs');const fs = require('fs');

const path = require('path');const path = require('path');

const { marked } = require('marked');const { marked } = require('marked');

const mammoth = require('mammoth');const mammoth = require('mammoth');



// Create dist directory// Create dist directory

const distDir = path.join(__dirname, '../dist');const distDir = path.join(__dirname, '../dist');

if (!fs.existsSync(distDir)) {if (!fs.existsSync(distDir)) {

    fs.mkdirSync(distDir, { recursive: true });    fs.mkdirSync(distDir, { recursive: true });

}}



// Create subdirectories// Create notes directory in dist

const notesDir = path.join(distDir, 'notes');const notesDir = path.join(distDir, 'notes');

const assetsDir = path.join(distDir, 'assets');if (!fs.existsSync(notesDir)) {

const pdfsDir = path.join(distDir, 'pdfs');    fs.mkdirSync(notesDir, { recursive: true });

}

[notesDir, assetsDir, pdfsDir].forEach(dir => {

    if (!fs.existsSync(dir)) {// Create assets directory in dist for images

        fs.mkdirSync(dir, { recursive: true });const assetsDir = path.join(distDir, 'assets');

    }if (!fs.existsSync(assetsDir)) {

});    fs.mkdirSync(assetsDir, { recursive: true });

}

// Helper function to extract title and subject from filename

function parseFilename(filename) {// Create pdfs directory in dist for PDF files

    const parts = filename.split('_');const pdfsDir = path.join(distDir, 'pdfs');

    let subject = parts[0].toUpperCase();if (!fs.existsSync(pdfsDir)) {

    let title = parts.slice(1).join(' ').replace(/-/g, ' ');    fs.mkdirSync(pdfsDir, { recursive: true });

    }

    if (!title) {

        title = filename.replace(/-/g, ' ').replace(/,/g, ' ');// Helper function to extract title and subject from filename

    } else {function parseFilename(filename) {

        title = title.replace(/,/g, ' ');    const parts = filename.split('_');

    }    let subject = parts[0].toUpperCase();

        let title = parts.slice(1).join(' ').replace(/-/g, ' ');

    title = title.replace(/\s+/g, ' ').trim();    

    return { subject, title };    if (!title) {

}        title = filename.replace(/-/g, ' ').replace(/,/g, ' ');

    } else {

// Helper function to create description from content        title = title.replace(/,/g, ' ');

function createDescription(content) {    }

    const plainText = content.replace(/[#*`\[\]<>]/g, '').substring(0, 150);    

    return plainText.trim() + '...';    title = title.replace(/\s+/g, ' ').trim();

}    return { subject, title };

}

// Copy image files to assets directory

function copyImageFiles() {// Helper function to create description from content

    const rootDir = path.join(__dirname, '..');function createDescription(content) {

    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.bmp'];    const plainText = content.replace(/[#*`\[\]]/g, '').substring(0, 150);

        return plainText.trim() + '...';

    const files = fs.readdirSync(rootDir);}

    let copiedCount = 0;

    files.forEach(file => {// Copy image files to assets directory

        const ext = path.extname(file).toLowerCase();function copyImageFiles() {

        if (imageExtensions.includes(ext)) {    const rootDir = path.join(__dirname, '..');

            const srcPath = path.join(rootDir, file);    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.bmp'];

            const destPath = path.join(assetsDir, file);    

            fs.copyFileSync(srcPath, destPath);    const files = fs.readdirSync(rootDir);

            copiedCount++;    files.forEach(file => {

        }        const ext = path.extname(file).toLowerCase();

    });        if (imageExtensions.includes(ext)) {

    if (copiedCount > 0) {            const srcPath = path.join(rootDir, file);

        console.log(`📷 Copied ${copiedCount} image(s)`);            const destPath = path.join(assetsDir, file);

    }            fs.copyFileSync(srcPath, destPath);

}            console.log(`📷 Copied image: ${file}`);

        }

// Process PDF files    });

async function processPdfFiles() {}

    const rootDir = path.join(__dirname, '..');

    const files = fs.readdirSync(rootDir).filter(file => file.endsWith('.pdf'));// Process PDF files

    const pdfCards = [];async function processPdfFiles() {

        const rootDir = path.join(__dirname, '..');

    for (const file of files) {    const files = fs.readdirSync(rootDir).filter(file => file.endsWith('.pdf'));

        try {    const pdfCards = [];

            const filePath = path.join(rootDir, file);    

            const filename = path.basename(file, '.pdf');    for (const file of files) {

            const { subject, title } = parseFilename(filename);        try {

                        const filePath = path.join(rootDir, file);

            // Copy PDF to pdfs directory            const filename = path.basename(file, '.pdf');

            const destPdfPath = path.join(pdfsDir, file);            const { subject, title } = parseFilename(filename);

            fs.copyFileSync(filePath, destPdfPath);            

                        // Copy PDF to pdfs directory

            // Create viewer page for PDF            const destPdfPath = path.join(pdfsDir, file);

            const viewerHtml = `<!DOCTYPE html>            fs.copyFileSync(filePath, destPdfPath);

<html lang="en">            

<head>            // Create viewer page for PDF

    <meta charset="UTF-8">            const viewerHtml = `<!DOCTYPE html>

    <meta name="viewport" content="width=device-width, initial-scale=1.0"><html lang="en">

    <title>${title} - Abhay's Notes Hub</title><head>

    <link rel="stylesheet" href="../note-style.css">    <meta charset="UTF-8">

    <style>    <meta name="viewport" content="width=device-width, initial-scale=1.0">

        .pdf-container {    <title>${title} - Abhay's Notes Hub</title>

            width: 100%;    <link rel="stylesheet" href="../note-style.css">

            height: calc(100vh - 200px);    <style>

            min-height: 600px;        .pdf-container {

            border: 1px solid #e2e8f0;            width: 100%;

            border-radius: 8px;            height: calc(100vh - 200px);

            overflow: hidden;            min-height: 600px;

            background: #f8fafc;            border: 1px solid #e2e8f0;

        }            border-radius: 8px;

        .pdf-viewer {            overflow: hidden;

            width: 100%;            background: #f8fafc;

            height: 100%;        }

        }        .pdf-viewer {

        .pdf-download {            width: 100%;

            margin: 1rem 0;            height: 100%;

            padding: 1rem;        }

            background: #f1f5f9;        .pdf-download {

            border-radius: 8px;            margin: 1rem 0;

            text-align: center;            padding: 1rem;

        }            background: #f1f5f9;

        .download-btn {            border-radius: 8px;

            display: inline-block;            text-align: center;

            padding: 0.75rem 1.5rem;        }

            background: #0366d6;        .download-btn {

            color: white;            display: inline-block;

            text-decoration: none;            padding: 0.75rem 1.5rem;

            border-radius: 8px;            background: #0366d6;

            font-weight: 600;            color: white;

            transition: all 0.3s ease;            text-decoration: none;

        }            border-radius: 8px;

        .download-btn:hover {            font-weight: 600;

            background: #0256b8;            transition: all 0.3s ease;

            transform: translateY(-2px);        }

        }        .download-btn:hover {

    </style>            background: #0256b8;

</head>            transform: translateY(-2px);

<body>        }

    <header>    </style>

        <div class="container"></head>

            <a href="../index.html" class="back-link">← Back to Notes</a><body>

            <h1>${title}</h1>    <header>

            <p class="subject-tag">${subject} • PDF Document</p>        <div class="container">

        </div>            <a href="../index.html" class="back-link">← Back to Notes</a>

    </header>            <h1>${title}</h1>

    <main class="container">            <p class="subject-tag">${subject} • PDF Document</p>

        <div class="note-content">        </div>

            <div class="pdf-download">    </header>

                <p>📄 PDF Document</p>    <main class="container">

                <a href="../pdfs/${file}" class="download-btn" download>⬇️ Download PDF</a>        <div class="note-content">

            </div>            <div class="pdf-download">

            <div class="pdf-container">                <p>📄 PDF Document</p>

                <iframe src="../pdfs/${file}" class="pdf-viewer" frameborder="0"></iframe>                <a href="../pdfs/${file}" class="download-btn" download>⬇️ Download PDF</a>

            </div>            </div>

        </div>            <div class="pdf-container">

    </main>                <iframe src="../pdfs/${file}" class="pdf-viewer" frameborder="0"></iframe>

    <footer>            </div>

        <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>        </div>

    </footer>    </main>

</body>    <footer>

</html>`;        <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>

                </footer>

            const htmlFileName = filename + '.html';</body>

            fs.writeFileSync(path.join(notesDir, htmlFileName), viewerHtml);</html>`;

                        

            pdfCards.push({            const htmlFileName = filename + '.html';

                subject: subject,            fs.writeFileSync(path.join(notesDir, htmlFileName), viewerHtml);

                title: title,            

                description: `PDF document with detailed notes and resources`,            pdfCards.push({

                link: `notes/${htmlFileName}`,                subject: subject,

                file: filename,                title: title,

                type: 'PDF'                description: `PDF document with detailed notes and resources`,

            });                link: `notes/${htmlFileName}`,

                            file: filename,

            console.log(`📄 Processed PDF: ${file}`);                type: 'PDF'

        } catch (error) {            });

            console.error(`Error processing PDF ${file}:`, error.message);            

        }            console.log(`📄 Processed PDF: ${file}`);

    }        } catch (error) {

                console.error(`Error processing PDF ${file}:`, error.message);

    return pdfCards;        }

}    }

    

// Process DOCX files    return pdfCards;

async function processDocxFiles() {}

    const rootDir = path.join(__dirname, '..');

    const files = fs.readdirSync(rootDir).filter(file => // Process DOCX files

        file.endsWith('.docx') || file.endsWith('.doc')async function processDocxFiles() {

    );    const rootDir = path.join(__dirname, '..');

    const docxCards = [];    const files = fs.readdirSync(rootDir).filter(file => 

            file.endsWith('.docx') || file.endsWith('.doc')

    for (const file of files) {    );

        try {    const docxCards = [];

            const filePath = path.join(rootDir, file);    

            const filename = path.basename(file, path.extname(file));    for (const file of files) {

            const { subject, title } = parseFilename(filename);        try {

                        const filePath = path.join(rootDir, file);

            // Convert DOCX to HTML using mammoth            const filename = path.basename(file, path.extname(file));

            const result = await mammoth.convertToHtml({ path: filePath });            const { subject, title } = parseFilename(filename);

            const htmlContent = result.value;            

                        // Convert DOCX to HTML using mammoth

            // Create HTML page for the document            const result = await mammoth.convertToHtml({ path: filePath });

            const docHtml = `<!DOCTYPE html>            const htmlContent = result.value;

<html lang="en">            

<head>            // Create HTML page for the document

    <meta charset="UTF-8">            const docHtml = `<!DOCTYPE html>

    <meta name="viewport" content="width=device-width, initial-scale=1.0"><html lang="en">

    <title>${title} - Abhay's Notes Hub</title><head>

    <link rel="stylesheet" href="../note-style.css">    <meta charset="UTF-8">

</head>    <meta name="viewport" content="width=device-width, initial-scale=1.0">

<body>    <title>${title} - Abhay's Notes Hub</title>

    <header>    <link rel="stylesheet" href="../note-style.css">

        <div class="container"></head>

            <a href="../index.html" class="back-link">← Back to Notes</a><body>

            <h1>${title}</h1>    <header>

            <p class="subject-tag">${subject} • Document</p>        <div class="container">

        </div>            <a href="../index.html" class="back-link">← Back to Notes</a>

    </header>            <h1>${title}</h1>

    <main class="container">            <p class="subject-tag">${subject} • Document</p>

        <article class="note-content">        </div>

            ${htmlContent}    </header>

        </article>    <main class="container">

    </main>        <article class="note-content">

    <footer>            ${htmlContent}

        <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>        </article>

    </footer>    </main>

</body>    <footer>

</html>`;        <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>

                </footer>

            const htmlFileName = filename + '.html';</body>

            fs.writeFileSync(path.join(notesDir, htmlFileName), docHtml);</html>`;

                        

            const description = createDescription(result.value);            const htmlFileName = filename + '.html';

            docxCards.push({            fs.writeFileSync(path.join(notesDir, htmlFileName), docHtml);

                subject: subject,            

                title: title,            const description = createDescription(result.value);

                description: description,            docxCards.push({

                link: `notes/${htmlFileName}`,                subject: subject,

                file: filename,                title: title,

                type: 'DOCX'                description: description,

            });                link: `notes/${htmlFileName}`,

                            file: filename,

            console.log(`📝 Processed DOCX: ${file}`);                type: 'DOCX'

        } catch (error) {            });

            console.error(`Error processing DOCX ${file}:`, error.message);            

        }            console.log(`📝 Processed DOCX: ${file}`);

    }        } catch (error) {

                console.error(`Error processing DOCX ${file}:`, error.message);

    return docxCards;        }

}    }

    

// Process markdown files    return docxCards;

function processMarkdownFiles() {}

    const rootDir = path.join(__dirname, '..');

    const markdownFiles = fs.readdirSync(rootDir)// Read and process markdown files

        .filter(file => file.endsWith('.md') && const markdownFiles = fs.readdirSync(__dirname + '/..')

                file !== 'README.md' &&     .filter(file => file.endsWith('.md') && 

                file !== 'SETUP_INSTRUCTIONS.md');            file !== 'README.md' && 

            file !== 'SETUP_INSTRUCTIONS.md');

    console.log(`Found ${markdownFiles.length} markdown file(s)`);

    const noteCards = [];console.log(`Found ${markdownFiles.length} markdown files`);



    markdownFiles.forEach(file => {// Generate HTML for each markdown file

        try {const noteCards = [];

            const filePath = path.join(rootDir, file);

            const content = fs.readFileSync(filePath, 'utf-8');markdownFiles.forEach(file => {

                try {

            const filename = path.basename(file, '.md');        const filePath = path.join(__dirname, '..', file);

            const { subject, title } = parseFilename(filename);        const content = fs.readFileSync(filePath, 'utf-8');

                    

            // Generate HTML content        // Extract title from filename

            const htmlContent = marked(content);        const filename = path.basename(file, '.md');

                const { subject, title } = parseFilename(filename);

        // Create HTML page for the note        

        const noteHtml = `<!DOCTYPE html>        // Generate HTML content

<html lang="en">        const htmlContent = marked(content);

<head>    

    <meta charset="UTF-8">    // Create HTML page for the note

    <meta name="viewport" content="width=device-width, initial-scale=1.0">    const noteHtml = `<!DOCTYPE html>

    <title>${title} - Abhay's Notes Hub</title><html lang="en">

    <link rel="stylesheet" href="../note-style.css"><head>

</head>    <meta charset="UTF-8">

<body>    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <header>    <title>${title} - Abhay's Notes Hub</title>

        <div class="container">    <link rel="stylesheet" href="../note-style.css">

            <a href="../index.html" class="back-link">← Back to Notes</a></head>

            <h1>${title}</h1><body>

            <p class="subject-tag">${subject}</p>    <header>

        </div>        <div class="container">

    </header>            <a href="../index.html" class="back-link">← Back to Notes</a>

    <main class="container">            <h1>${title}</h1>

        <article class="note-content">            <p class="subject-tag">${subject}</p>

            ${htmlContent}        </div>

        </article>    </header>

    </main>    <main class="container">

    <footer>        <article class="note-content">

        <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>            ${htmlContent}

    </footer>        </article>

</body>    </main>

</html>`;    <footer>

                <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>

        // Save the HTML file    </footer>

        const htmlFileName = filename + '.html';</body>

        fs.writeFileSync(path.join(notesDir, htmlFileName), noteHtml);</html>`;

            

        // Create a short description    // Save the HTML file

        const description = createDescription(content);    const htmlFileName = filename + '.html';

            fs.writeFileSync(path.join(notesDir, htmlFileName), noteHtml);

        // Add to note cards    

        noteCards.push({    // Create a short description

            subject: subject,    const description = createDescription(content);

            title: title,    

            description: description,    // Add to note cards

            link: `notes/${htmlFileName}`,    noteCards.push({

            file: filename,        subject: subject,

            type: 'MD'        title: title,

        });        description: description,

        } catch (error) {        link: `notes/${htmlFileName}`,

            console.error(`Error processing file ${file}:`, error.message);        file: filename,

        }        type: 'MD'

    });    });

    } catch (error) {

    return noteCards;        console.error(`Error processing file ${file}:`, error.message);

}    }

});

// Main async function to process all files

async function generateSite() {// Main async function to process all files

    console.log('🚀 Starting site generation...\n');async function generateSite() {

        // Copy images

    // Copy images    copyImageFiles();

    copyImageFiles();    

        // Process PDFs

    // Process all file types    const pdfCards = await processPdfFiles();

    const noteCards = processMarkdownFiles();    

    const pdfCards = await processPdfFiles();    // Process DOCX files

    const docxCards = await processDocxFiles();    const docxCards = await processDocxFiles();

        

    // Combine all note cards    // Combine all note cards

    const allCards = [...noteCards, ...pdfCards, ...docxCards];    const allCards = [...noteCards, ...pdfCards, ...docxCards];

<html lang="en">

    // Generate index.html<head>

    const indexHtml = `<!DOCTYPE html>    <meta charset="UTF-8">

<html lang="en">    <meta name="viewport" content="width=device-width, initial-scale=1.0">

<head>    <title>Abhay's Notes Hub - IGNOU Study Notes</title>

    <meta charset="UTF-8">    <link rel="stylesheet" href="style.css">

    <meta name="viewport" content="width=device-width, initial-scale=1.0"></head>

    <title>Abhay's Notes Hub - IGNOU Study Notes</title><body>

    <link rel="stylesheet" href="style.css">    <header>

</head>        <div class="container">

<body>            <div class="header-content">

    <header>                <h1>📚 Abhay's Notes Hub</h1>

        <div class="container">                <p class="subtitle">IGNOU Study Notes & Resources</p>

            <div class="header-content">            </div>

                <h1>📚 Abhay's Notes Hub</h1>        </div>

                <p class="subtitle">IGNOU Study Notes & Resources - All Formats Supported</p>    </header>

            </div>    

        </div>    <main class="container">

    </header>        <section class="search-section">

                <input type="text" id="search-bar" placeholder="🔍 Search notes by subject or topic...">

    <main class="container">        </section>

        <section class="search-section">        

            <input type="text" id="search-bar" placeholder="🔍 Search notes by subject or topic...">        <section class="stats">

        </section>            <div class="stat-card">

                        <div class="stat-number">${noteCards.length}</div>

        <section class="stats">                <div class="stat-label">Total Notes</div>

            <div class="stat-card">            </div>

                <div class="stat-number">${allCards.length}</div>            <div class="stat-card">

                <div class="stat-label">Total Notes</div>                <div class="stat-number">${new Set(noteCards.map(n => n.subject)).size}</div>

            </div>                <div class="stat-label">Subjects</div>

            <div class="stat-card">            </div>

                <div class="stat-number">${new Set(allCards.map(n => n.subject)).size}</div>            <div class="stat-card">

                <div class="stat-label">Subjects</div>                <div class="stat-number">Updated</div>

            </div>                <div class="stat-label">${new Date().toLocaleDateString()}</div>

            <div class="stat-card">            </div>

                <div class="stat-number">${noteCards.length} MD / ${pdfCards.length} PDF / ${docxCards.length} DOC</div>        </section>

                <div class="stat-label">Formats</div>        

            </div>        <section class="notes-section">

            <div class="stat-card">            <h2>📖 Available Notes</h2>

                <div class="stat-number">Updated</div>            <div class="notes-grid" id="notes-grid">

                <div class="stat-label">${new Date().toLocaleDateString()}</div>                ${noteCards.map(note => {

            </div>                    const escapedSubject = note.subject.toLowerCase().replace(/"/g, '&quot;');

        </section>                    const escapedTitle = note.title.toLowerCase().replace(/"/g, '&quot;');

                            const escapedLink = note.link.replace(/"/g, '&quot;');

        <section class="notes-section">                    return `

            <h2>📖 Available Notes</h2>                <div class="note-card" data-subject="${escapedSubject}" data-title="${escapedTitle}">

            <div class="notes-grid" id="notes-grid">                    <div class="note-header">

                ${allCards.map(note => {                        <span class="subject-badge">${note.subject}</span>

                    const escapedSubject = note.subject.toLowerCase().replace(/"/g, '&quot;');                    </div>

                    const escapedTitle = note.title.toLowerCase().replace(/"/g, '&quot;');                    <h3>${note.title}</h3>

                    const escapedLink = note.link.replace(/"/g, '&quot;');                    <p class="note-description">${note.description}</p>

                    const typeEmoji = note.type === 'PDF' ? '📄' : note.type === 'DOCX' ? '📝' : '📖';                    <div class="note-footer">

                    return `                        <a href="${escapedLink}" class="btn view-btn">View Notes</a>

                <div class="note-card" data-subject="${escapedSubject}" data-title="${escapedTitle}">                    </div>

                    <div class="note-header">                </div>

                        <span class="subject-badge">${note.subject}</span>                `;

                        <span class="type-badge">${typeEmoji} ${note.type || 'MD'}</span>                }).join('')}

                    </div>            </div>

                    <h3>${note.title}</h3>        </section>

                    <p class="note-description">${note.description}</p>        

                    <div class="note-footer">        <section class="about-section">

                        <a href="${escapedLink}" class="btn view-btn">View Notes</a>            <h2>About This Hub</h2>

                    </div>            <p>This is a collection of study notes for IGNOU courses. Notes are automatically updated when new content is added to the repository. Share with your friends and study together! 🎓</p>

                </div>            <p><strong>How to use:</strong> Browse the notes above, use the search bar to find specific topics, and click "View Notes" to read them.</p>

                `;        </section>

                }).join('')}    </main>

            </div>    

        </section>    <footer>

                <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>

        <section class="about-section">        <p>Last updated: ${new Date().toLocaleString()}</p>

            <h2>About This Hub</h2>    </footer>

            <p>This is a collection of study notes for IGNOU courses. Notes are automatically updated when new content is added to the repository. <strong>Now supporting Markdown (.md), PDF (.pdf), and Word Documents (.docx)!</strong></p>    

            <p><strong>How to use:</strong> Browse the notes above, use the search bar to find specific topics, and click "View Notes" to read them. PDF files can be viewed in-browser or downloaded.</p>    <script>

            <p><strong>Share with friends:</strong> Send them this link and study together! 🎓</p>        // Search functionality

        </section>        const searchBar = document.getElementById('search-bar');

    </main>        const notesGrid = document.getElementById('notes-grid');

            const noteCards = document.querySelectorAll('.note-card');

    <footer>        

        <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>        searchBar.addEventListener('input', (e) => {

        <p>Last updated: ${new Date().toLocaleString()}</p>            const searchTerm = e.target.value.toLowerCase();

    </footer>            

                noteCards.forEach(card => {

    <script>                const subject = card.dataset.subject;

        const searchBar = document.getElementById('search-bar');                const title = card.dataset.title;

        const noteCards = document.querySelectorAll('.note-card');                

                        if (subject.includes(searchTerm) || title.includes(searchTerm)) {

        searchBar.addEventListener('input', (e) => {                    card.style.display = 'block';

            const searchTerm = e.target.value.toLowerCase();                } else {

                                card.style.display = 'none';

            noteCards.forEach(card => {                }

                const subject = card.dataset.subject;            });

                const title = card.dataset.title;        });

                    </script>

                if (subject.includes(searchTerm) || title.includes(searchTerm)) {</body>

                    card.style.display = 'block';</html>`;

                } else {

                    card.style.display = 'none';fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);

                }

            });// Copy CSS files

        });const styleCSS = `/* Modern styling for the notes hub */

    </script>:root {

</body>    --primary: #0366d6;

</html>`;    --primary-dark: #0256b8;

    --secondary: #38bdf8;

    fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);    --bg: #f8fafc;

    --card: #ffffff;

    // Copy CSS files    --text: #0f172a;

    generateCSS();    --text-muted: #64748b;

    --border: #e2e8f0;

    console.log('\n✅ Site generated successfully!');    --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    console.log(`📝 Generated ${allCards.length} note page(s):`);    --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);

    console.log(`   - ${noteCards.length} Markdown`);}

    console.log(`   - ${pdfCards.length} PDF`);

    console.log(`   - ${docxCards.length} DOCX`);* {

    console.log(`📁 Output directory: ${distDir}`);    margin: 0;

}    padding: 0;

    box-sizing: border-box;

function generateCSS() {}

    // Main style.css

    const styleCSS = `/* Modern styling for the notes hub */html {

:root {    overflow-x: hidden;

    --primary: #0366d6;    width: 100%;

    --primary-dark: #0256b8;}

    --secondary: #38bdf8;

    --bg: #f8fafc;body {

    --card: #ffffff;    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;

    --text: #0f172a;    background: var(--bg);

    --text-muted: #64748b;    color: var(--text);

    --border: #e2e8f0;    line-height: 1.6;

    --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);    overflow-x: hidden;

    --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);    width: 100%;

}    max-width: 100vw;

}

* {

    margin: 0;.container {

    padding: 0;    max-width: 1200px;

    box-sizing: border-box;    width: 100%;

}    margin: 0 auto;

    padding: 0 1rem;

html {}

    overflow-x: hidden;

    width: 100%;@media (min-width: 768px) {

}    .container {

        padding: 0 2rem;

body {    }

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;}

    background: var(--bg);

    color: var(--text);/* Header */

    line-height: 1.6;header {

    overflow-x: hidden;    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);

    width: 100%;    color: white;

    max-width: 100vw;    padding: 2rem 0;

}    text-align: center;

    box-shadow: var(--shadow-lg);

.container {    width: 100%;

    max-width: 1200px;}

    width: 100%;

    margin: 0 auto;.header-content h1 {

    padding: 0 1rem;    font-size: clamp(1.5rem, 5vw, 2.5rem);

}    margin-bottom: 0.5rem;

    font-weight: 700;

@media (min-width: 768px) {    padding: 0 1rem;

    .container {    word-wrap: break-word;

        padding: 0 2rem;}

    }

}.subtitle {

    font-size: clamp(0.9rem, 3vw, 1.2rem);

header {    opacity: 0.95;

    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);    padding: 0 1rem;

    color: white;}

    padding: 2rem 0;

    text-align: center;/* Search Section */

    box-shadow: var(--shadow-lg);.search-section {

    width: 100%;    margin: 2rem 0;

}}



.header-content h1 {#search-bar {

    font-size: clamp(1.5rem, 5vw, 2.5rem);    width: 100%;

    margin-bottom: 0.5rem;    padding: 1rem 1.5rem;

    font-weight: 700;    font-size: 1rem;

    padding: 0 1rem;    border: 2px solid var(--border);

    word-wrap: break-word;    border-radius: 50px;

}    background: var(--card);

    transition: all 0.3s ease;

.subtitle {    box-shadow: var(--shadow);

    font-size: clamp(0.9rem, 3vw, 1.2rem);}

    opacity: 0.95;

    padding: 0 1rem;#search-bar:focus {

}    outline: none;

    border-color: var(--primary);

.search-section {    box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.1);

    margin: 2rem 0;}

}

/* Stats Section */

#search-bar {.stats {

    width: 100%;    display: grid;

    padding: 1rem 1.5rem;    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    font-size: 1rem;    gap: 1rem;

    border: 2px solid var(--border);    margin: 2rem 0;

    border-radius: 50px;    width: 100%;

    background: var(--card);}

    transition: all 0.3s ease;

    box-shadow: var(--shadow);.stat-card {

}    background: var(--card);

    padding: 1.25rem;

#search-bar:focus {    border-radius: 12px;

    outline: none;    text-align: center;

    border-color: var(--primary);    box-shadow: var(--shadow);

    box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.1);    border: 1px solid var(--border);

}    min-width: 0;

}

.stats {

    display: grid;.stat-number {

    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));    font-size: clamp(1.5rem, 4vw, 2rem);

    gap: 1rem;    font-weight: 700;

    margin: 2rem 0;    color: var(--primary);

    width: 100%;    margin-bottom: 0.5rem;

}}



.stat-card {.stat-label {

    background: var(--card);    color: var(--text-muted);

    padding: 1.25rem;    font-size: clamp(0.8rem, 2vw, 0.9rem);

    border-radius: 12px;    word-wrap: break-word;

    text-align: center;}

    box-shadow: var(--shadow);

    border: 1px solid var(--border);/* Notes Section */

    min-width: 0;.notes-section {

}    margin: 2rem 0;

    width: 100%;

.stat-number {}

    font-size: clamp(1.2rem, 3vw, 1.8rem);

    font-weight: 700;.notes-section h2 {

    color: var(--primary);    font-size: clamp(1.5rem, 4vw, 2rem);

    margin-bottom: 0.5rem;    margin-bottom: 1.5rem;

}    color: var(--text);

    padding: 0 0.5rem;

.stat-label {}

    color: var(--text-muted);

    font-size: clamp(0.75rem, 2vw, 0.85rem);.notes-grid {

    word-wrap: break-word;    display: grid;

}    grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));

    gap: 1.25rem;

.notes-section {    margin-top: 2rem;

    margin: 2rem 0;    width: 100%;

    width: 100%;}

}

.note-card {

.notes-section h2 {    background: var(--card);

    font-size: clamp(1.5rem, 4vw, 2rem);    border: 1px solid var(--border);

    margin-bottom: 1.5rem;    border-radius: 12px;

    color: var(--text);    padding: 1.25rem;

    padding: 0 0.5rem;    box-shadow: var(--shadow);

}    transition: all 0.3s ease;

    display: flex;

.notes-grid {    flex-direction: column;

    display: grid;    min-width: 0;

    grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));    overflow: hidden;

    gap: 1.25rem;}

    margin-top: 2rem;

    width: 100%;.note-card:hover {

}    transform: translateY(-3px);

    box-shadow: var(--shadow-lg);

.note-card {    border-color: var(--primary);

    background: var(--card);}

    border: 1px solid var(--border);

    border-radius: 12px;.note-header {

    padding: 1.25rem;    margin-bottom: 0.75rem;

    box-shadow: var(--shadow);}

    transition: all 0.3s ease;

    display: flex;.subject-badge {

    flex-direction: column;    display: inline-block;

    min-width: 0;    background: var(--primary);

    overflow: hidden;    color: white;

}    padding: 0.25rem 0.75rem;

    border-radius: 20px;

.note-card:hover {    font-size: 0.75rem;

    transform: translateY(-3px);    font-weight: 600;

    box-shadow: var(--shadow-lg);    word-break: break-word;

    border-color: var(--primary);    max-width: 100%;

}}



.note-header {.note-card h3 {

    margin-bottom: 0.75rem;    font-size: clamp(1.1rem, 3vw, 1.3rem);

    display: flex;    margin-bottom: 0.75rem;

    justify-content: space-between;    color: var(--text);

    align-items: center;    word-wrap: break-word;

    flex-wrap: wrap;    overflow-wrap: break-word;

    gap: 0.5rem;    hyphens: auto;

}}



.subject-badge {.note-description {

    display: inline-block;    color: var(--text-muted);

    background: var(--primary);    font-size: clamp(0.85rem, 2.5vw, 0.95rem);

    color: white;    margin-bottom: 1rem;

    padding: 0.25rem 0.75rem;    line-height: 1.5;

    border-radius: 20px;    word-wrap: break-word;

    font-size: 0.75rem;    overflow: hidden;

    font-weight: 600;    display: -webkit-box;

    word-break: break-word;    -webkit-line-clamp: 3;

}    -webkit-box-orient: vertical;

}

.type-badge {

    display: inline-block;.note-footer {

    background: #f1f5f9;    display: flex;

    color: var(--text);    gap: 0.5rem;

    padding: 0.25rem 0.75rem;    margin-top: auto;

    border-radius: 20px;}

    font-size: 0.7rem;

    font-weight: 600;.btn {

}    display: inline-block;

    padding: 0.75rem 1rem;

.note-card h3 {    border-radius: 8px;

    font-size: clamp(1.1rem, 3vw, 1.3rem);    text-decoration: none;

    margin-bottom: 0.75rem;    font-weight: 600;

    color: var(--text);    transition: all 0.3s ease;

    word-wrap: break-word;    text-align: center;

    overflow-wrap: break-word;    cursor: pointer;

    hyphens: auto;    font-size: 0.9rem;

}    white-space: nowrap;

}

.note-description {

    color: var(--text-muted);.view-btn {

    font-size: clamp(0.85rem, 2.5vw, 0.95rem);    background: var(--primary);

    margin-bottom: 1rem;    color: white;

    line-height: 1.5;    flex: 1;

    word-wrap: break-word;}

    overflow: hidden;

    display: -webkit-box;.view-btn:hover {

    -webkit-line-clamp: 3;    background: var(--primary-dark);

    -webkit-box-orient: vertical;    transform: scale(1.02);

}}



.note-footer {/* About Section */

    display: flex;.about-section {

    gap: 0.5rem;    background: var(--card);

    margin-top: auto;    padding: 1.5rem;

}    border-radius: 12px;

    margin: 2rem 0;

.btn {    box-shadow: var(--shadow);

    display: inline-block;    border: 1px solid var(--border);

    padding: 0.75rem 1rem;    width: 100%;

    border-radius: 8px;}

    text-decoration: none;

    font-weight: 600;.about-section h2 {

    transition: all 0.3s ease;    font-size: clamp(1.3rem, 4vw, 1.8rem);

    text-align: center;    margin-bottom: 1rem;

    cursor: pointer;    color: var(--text);

    font-size: 0.9rem;}

    white-space: nowrap;

}.about-section p {

    color: var(--text-muted);

.view-btn {    margin-bottom: 1rem;

    background: var(--primary);    font-size: clamp(0.9rem, 2.5vw, 1rem);

    color: white;    line-height: 1.6;

    flex: 1;}

}

/* Footer */

.view-btn:hover {footer {

    background: var(--primary-dark);    text-align: center;

    transform: scale(1.02);    padding: 2rem 0;

}    color: var(--text-muted);

    border-top: 1px solid var(--border);

.about-section {    margin-top: 3rem;

    background: var(--card);}

    padding: 1.5rem;

    border-radius: 12px;footer p {

    margin: 2rem 0;    margin: 0.25rem 0;

    box-shadow: var(--shadow);}

    border: 1px solid var(--border);

    width: 100%;/* Responsive */

}@media (max-width: 768px) {

    .container {

.about-section h2 {        padding: 0 1rem;

    font-size: clamp(1.3rem, 4vw, 1.8rem);    }

    margin-bottom: 1rem;    

    color: var(--text);    header {

}        padding: 1.5rem 0;

    }

.about-section p {    

    color: var(--text-muted);    .notes-grid {

    margin-bottom: 1rem;        grid-template-columns: 1fr;

    font-size: clamp(0.9rem, 2.5vw, 1rem);        gap: 1rem;

    line-height: 1.6;    }

}    

    .stats {

footer {        grid-template-columns: 1fr;

    text-align: center;        gap: 0.75rem;

    padding: 2rem 0;    }

    color: var(--text-muted);    

    border-top: 1px solid var(--border);    .note-card {

    margin-top: 3rem;        padding: 1rem;

}    }

    

footer p {    .about-section {

    margin: 0.25rem 0;        padding: 1.25rem;

}    }

}

@media (max-width: 768px) {

    .container {@media (max-width: 480px) {

        padding: 0 1rem;    .container {

    }        padding: 0 0.75rem;

        }

    header {    

        padding: 1.5rem 0;    .btn {

    }        padding: 0.6rem 0.8rem;

            font-size: 0.85rem;

    .notes-grid {    }

        grid-template-columns: 1fr;}

        gap: 1rem;`;

    }

    const noteStyleCSS = `/* Styling for individual note pages */

    .stats {:root {

        grid-template-columns: 1fr;    --primary: #0366d6;

        gap: 0.75rem;    --primary-dark: #0256b8;

    }    --bg: #f8fafc;

        --card: #ffffff;

    .note-card {    --text: #0f172a;

        padding: 1rem;    --text-muted: #64748b;

    }    --border: #e2e8f0;

        --code-bg: #f1f5f9;

    .about-section {}

        padding: 1.25rem;

    }* {

}    margin: 0;

`;    padding: 0;

    box-sizing: border-box;

    // note-style.css for individual note pages}

    const noteStyleCSS = `/* Styling for individual note pages */

:root {body {

    --primary: #0366d6;    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;

    --primary-dark: #0256b8;    background: var(--bg);

    --bg: #f8fafc;    color: var(--text);

    --card: #ffffff;    line-height: 1.7;

    --text: #0f172a;}

    --text-muted: #64748b;

    --border: #e2e8f0;.container {

    --code-bg: #f1f5f9;    max-width: 900px;

}    width: 100%;

    margin: 0 auto;

* {    padding: 0 1rem;

    margin: 0;}

    padding: 0;

    box-sizing: border-box;@media (min-width: 768px) {

}    .container {

        padding: 0 2rem;

body {    }

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;}

    background: var(--bg);

    color: var(--text);/* Header */

    line-height: 1.7;header {

}    background: linear-gradient(135deg, var(--primary) 0%, #38bdf8 100%);

    color: white;

.container {    padding: 1.5rem 0;

    max-width: 900px;    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    width: 100%;    width: 100%;

    margin: 0 auto;}

    padding: 0 1rem;

}.back-link {

    display: inline-block;

@media (min-width: 768px) {    color: white;

    .container {    text-decoration: none;

        padding: 0 2rem;    margin-bottom: 1rem;

    }    font-weight: 600;

}    opacity: 0.9;

    transition: opacity 0.3s ease;

header {    font-size: clamp(0.9rem, 2.5vw, 1rem);

    background: linear-gradient(135deg, var(--primary) 0%, #38bdf8 100%);}

    color: white;

    padding: 1.5rem 0;.back-link:hover {

    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);    opacity: 1;

    width: 100%;}

}

header h1 {

.back-link {    font-size: clamp(1.3rem, 4vw, 2rem);

    display: inline-block;    margin-bottom: 0.5rem;

    color: white;    word-wrap: break-word;

    text-decoration: none;    padding: 0 0.5rem;

    margin-bottom: 1rem;}

    font-weight: 600;

    opacity: 0.9;.subject-tag {

    transition: opacity 0.3s ease;    display: inline-block;

    font-size: clamp(0.9rem, 2.5vw, 1rem);    background: rgba(255, 255, 255, 0.2);

}    padding: 0.3rem 1rem;

    border-radius: 20px;

.back-link:hover {    font-size: clamp(0.75rem, 2vw, 0.9rem);

    opacity: 1;    word-wrap: break-word;

}}



header h1 {/* Main Content */

    font-size: clamp(1.3rem, 4vw, 2rem);main {

    margin-bottom: 0.5rem;    padding: 1.5rem 0;

    word-wrap: break-word;    width: 100%;

    padding: 0 0.5rem;}

}

.note-content {

.subject-tag {    background: var(--card);

    display: inline-block;    padding: 2rem 1.5rem;

    background: rgba(255, 255, 255, 0.2);    border-radius: 12px;

    padding: 0.3rem 1rem;    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    border-radius: 20px;    border: 1px solid var(--border);

    font-size: clamp(0.75rem, 2vw, 0.9rem);    width: 100%;

    word-wrap: break-word;    overflow-x: hidden;

}}



main {@media (min-width: 768px) {

    padding: 1.5rem 0;    .note-content {

    width: 100%;        padding: 3rem;

}    }

}

.note-content {

    background: var(--card);/* Typography */

    padding: 2rem 1.5rem;.note-content h1 {

    border-radius: 12px;    font-size: 2rem;

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);    margin: 2rem 0 1rem;

    border: 1px solid var(--border);    color: var(--text);

    width: 100%;    border-bottom: 3px solid var(--primary);

    overflow-x: hidden;    padding-bottom: 0.5rem;

}}



@media (min-width: 768px) {.note-content h2 {

    .note-content {    font-size: 1.6rem;

        padding: 3rem;    margin: 1.5rem 0 1rem;

    }    color: var(--text);

}}



.note-content h1 {.note-content h3 {

    font-size: 2rem;    font-size: 1.3rem;

    margin: 2rem 0 1rem;    margin: 1.25rem 0 0.75rem;

    color: var(--text);    color: var(--text);

    border-bottom: 3px solid var(--primary);}

    padding-bottom: 0.5rem;

}.note-content p {

    margin-bottom: 1rem;

.note-content h2 {    color: var(--text);

    font-size: 1.6rem;}

    margin: 1.5rem 0 1rem;

    color: var(--text);.note-content ul, .note-content ol {

}    margin: 1rem 0 1rem 2rem;

}

.note-content h3 {

    font-size: 1.3rem;.note-content li {

    margin: 1.25rem 0 0.75rem;    margin-bottom: 0.5rem;

    color: var(--text);}

}

/* Code blocks */

.note-content p {.note-content code {

    margin-bottom: 1rem;    background: var(--code-bg);

    color: var(--text);    padding: 0.2rem 0.4rem;

}    border-radius: 4px;

    font-family: 'Courier New', monospace;

.note-content ul, .note-content ol {    font-size: clamp(0.75rem, 2vw, 0.9em);

    margin: 1rem 0 1rem 2rem;    word-wrap: break-word;

}}



.note-content li {.note-content pre {

    margin-bottom: 0.5rem;    background: var(--code-bg);

}    padding: 1rem;

    border-radius: 8px;

.note-content code {    overflow-x: auto;

    background: var(--code-bg);    margin: 1rem 0;

    padding: 0.2rem 0.4rem;    border: 1px solid var(--border);

    border-radius: 4px;    max-width: 100%;

    font-family: 'Courier New', monospace;}

    font-size: clamp(0.75rem, 2vw, 0.9em);

    word-wrap: break-word;.note-content pre code {

}    background: none;

    padding: 0;

.note-content pre {    font-size: clamp(0.7rem, 1.8vw, 0.85em);

    background: var(--code-bg);}

    padding: 1rem;

    border-radius: 8px;/* Tables */

    overflow-x: auto;.note-content table {

    margin: 1rem 0;    width: 100%;

    border: 1px solid var(--border);    border-collapse: collapse;

    max-width: 100%;    margin: 1.5rem 0;

}    display: block;

    overflow-x: auto;

.note-content pre code {    max-width: 100%;

    background: none;}

    padding: 0;

    font-size: clamp(0.7rem, 1.8vw, 0.85em);.note-content th, .note-content td {

}    border: 1px solid var(--border);

    padding: 0.75rem;

.note-content table {    text-align: left;

    width: 100%;    font-size: clamp(0.8rem, 2vw, 0.95rem);

    border-collapse: collapse;    word-wrap: break-word;

    margin: 1.5rem 0;}

    display: block;

    overflow-x: auto;.note-content th {

    max-width: 100%;    background: var(--code-bg);

}    font-weight: 600;

}

.note-content th, .note-content td {

    border: 1px solid var(--border);/* Blockquotes */

    padding: 0.75rem;.note-content blockquote {

    text-align: left;    border-left: 4px solid var(--primary);

    font-size: clamp(0.8rem, 2vw, 0.95rem);    padding-left: 1rem;

    word-wrap: break-word;    margin: 1rem 0;

}    color: var(--text-muted);

    font-style: italic;

.note-content th {}

    background: var(--code-bg);

    font-weight: 600;/* Links */

}.note-content a {

    color: var(--primary);

.note-content blockquote {    text-decoration: none;

    border-left: 4px solid var(--primary);    border-bottom: 1px solid transparent;

    padding-left: 1rem;    transition: border-color 0.3s ease;

    margin: 1rem 0;}

    color: var(--text-muted);

    font-style: italic;.note-content a:hover {

}    border-bottom-color: var(--primary);

}

.note-content a {

    color: var(--primary);/* Footer */

    text-decoration: none;footer {

    border-bottom: 1px solid transparent;    text-align: center;

    transition: border-color 0.3s ease;    padding: 2rem 0;

}    color: var(--text-muted);

    border-top: 1px solid var(--border);

.note-content a:hover {    margin-top: 3rem;

    border-bottom-color: var(--primary);}

}

/* Responsive */

.note-content img {@media (max-width: 768px) {

    max-width: 100%;    .note-content {

    height: auto;        padding: 1.25rem;

    border-radius: 8px;    }

    margin: 1rem 0;    

}    .note-content h1 {

        font-size: 1.5rem;

footer {    }

    text-align: center;    

    padding: 2rem 0;    .note-content h2 {

    color: var(--text-muted);        font-size: 1.3rem;

    border-top: 1px solid var(--border);    }

    margin-top: 3rem;    

}    .note-content h3 {

        font-size: 1.1rem;

@media (max-width: 768px) {    }

    .note-content {    

        padding: 1.25rem;    .note-content ul, .note-content ol {

    }        margin-left: 1.5rem;

        }

    .note-content h1 {}

        font-size: 1.5rem;

    }@media (max-width: 480px) {

        .container {

    .note-content h2 {        padding: 0 0.75rem;

        font-size: 1.3rem;    }

    }    

        .note-content {

    .note-content h3 {        padding: 1rem;

        font-size: 1.1rem;    }

    }    

        .note-content pre {

    .note-content ul, .note-content ol {        padding: 0.75rem;

        margin-left: 1.5rem;        font-size: 0.75rem;

    }    }

}    

`;    .note-content th, .note-content td {

        padding: 0.5rem;

    fs.writeFileSync(path.join(distDir, 'style.css'), styleCSS);        font-size: 0.8rem;

    fs.writeFileSync(path.join(distDir, 'note-style.css'), noteStyleCSS);    }

}}

`;

// Run the site generation

generateSite().catch(error => {fs.writeFileSync(path.join(distDir, 'style.css'), styleCSS);

    console.error('❌ Error generating site:', error);fs.writeFileSync(path.join(distDir, 'note-style.css'), noteStyleCSS);

    process.exit(1);

});console.log('✅ Site generated successfully!');

console.log(`📝 Generated ${noteCards.length} note pages`);
console.log(`📁 Output directory: ${distDir}`);
