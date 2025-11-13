const fs = require('fs');const fs = require('fs');const fs = require('fs');

const path = require('path');

const { marked } = require('marked');const path = require('path');const path = require('path');

const mammoth = require('mammoth');

const { marked } = require('marked');const { marked } = require('marked');

// Create dist directory

const distDir = path.join(__dirname, '../dist');const mammoth = require('mammoth');const mammoth = require('mammoth');

if (!fs.existsSync(distDir)) {

    fs.mkdirSync(distDir, { recursive: true });

}

// Create dist directory// Create dist directory

// Create subdirectories

const notesDir = path.join(distDir, 'notes');const distDir = path.join(__dirname, '../dist');const distDir = path.join(__dirname, '../dist');

const assetsDir = path.join(distDir, 'assets');

const pdfsDir = path.join(distDir, 'pdfs');if (!fs.existsSync(distDir)) {if (!fs.existsSync(distDir)) {



[notesDir, assetsDir, pdfsDir].forEach(dir => {    fs.mkdirSync(distDir, { recursive: true });    fs.mkdirSync(distDir, { recursive: true });

    if (!fs.existsSync(dir)) {

        fs.mkdirSync(dir, { recursive: true });}}

    }

});



// Helper function to extract title and subject from filename// Create subdirectories// Create notes directory in dist

function parseFilename(filename) {

    const parts = filename.split('_');const notesDir = path.join(distDir, 'notes');const notesDir = path.join(distDir, 'notes');

    let subject = parts[0].toUpperCase();

    let title = parts.slice(1).join(' ').replace(/-/g, ' ');const assetsDir = path.join(distDir, 'assets');if (!fs.existsSync(notesDir)) {

    

    if (!title) {const pdfsDir = path.join(distDir, 'pdfs');    fs.mkdirSync(notesDir, { recursive: true });

        title = filename.replace(/-/g, ' ').replace(/,/g, ' ');

    } else {}

        title = title.replace(/,/g, ' ');

    }[notesDir, assetsDir, pdfsDir].forEach(dir => {

    

    title = title.replace(/\s+/g, ' ').trim();    if (!fs.existsSync(dir)) {// Create assets directory in dist for images

    return { subject, title };

}        fs.mkdirSync(dir, { recursive: true });const assetsDir = path.join(distDir, 'assets');



// Helper function to create description from content    }if (!fs.existsSync(assetsDir)) {

function createDescription(content) {

    const plainText = content.replace(/[#*`\[\]<>]/g, '').substring(0, 150);});    fs.mkdirSync(assetsDir, { recursive: true });

    return plainText.trim() + '...';

}}



// Copy image files to assets directory// Helper function to extract title and subject from filename

function copyImageFiles() {

    const rootDir = path.join(__dirname, '..');function parseFilename(filename) {// Create pdfs directory in dist for PDF files

    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.bmp'];

        const parts = filename.split('_');const pdfsDir = path.join(distDir, 'pdfs');

    const files = fs.readdirSync(rootDir);

    let copiedCount = 0;    let subject = parts[0].toUpperCase();if (!fs.existsSync(pdfsDir)) {

    files.forEach(file => {

        const ext = path.extname(file).toLowerCase();    let title = parts.slice(1).join(' ').replace(/-/g, ' ');    fs.mkdirSync(pdfsDir, { recursive: true });

        if (imageExtensions.includes(ext)) {

            const srcPath = path.join(rootDir, file);    }

            const destPath = path.join(assetsDir, file);

            fs.copyFileSync(srcPath, destPath);    if (!title) {

            copiedCount++;

        }        title = filename.replace(/-/g, ' ').replace(/,/g, ' ');// Helper function to extract title and subject from filename

    });

    if (copiedCount > 0) {    } else {function parseFilename(filename) {

        console.log(`📷 Copied ${copiedCount} image(s)`);

    }        title = title.replace(/,/g, ' ');    const parts = filename.split('_');

}

    }    let subject = parts[0].toUpperCase();

// Process PDF files

async function processPdfFiles() {        let title = parts.slice(1).join(' ').replace(/-/g, ' ');

    const rootDir = path.join(__dirname, '..');

    const files = fs.readdirSync(rootDir).filter(file => file.endsWith('.pdf'));    title = title.replace(/\s+/g, ' ').trim();    

    const pdfCards = [];

        return { subject, title };    if (!title) {

    for (const file of files) {

        try {}        title = filename.replace(/-/g, ' ').replace(/,/g, ' ');

            const filePath = path.join(rootDir, file);

            const filename = path.basename(file, '.pdf');    } else {

            const { subject, title } = parseFilename(filename);

            // Helper function to create description from content        title = title.replace(/,/g, ' ');

            // Copy PDF to pdfs directory

            const destPdfPath = path.join(pdfsDir, file);function createDescription(content) {    }

            fs.copyFileSync(filePath, destPdfPath);

                const plainText = content.replace(/[#*`\[\]<>]/g, '').substring(0, 150);    

            // Create viewer page for PDF

            const viewerHtml = `<!DOCTYPE html>    return plainText.trim() + '...';    title = title.replace(/\s+/g, ' ').trim();

<html lang="en">

<head>}    return { subject, title };

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">}

    <title>${title} - Abhay's Notes Hub</title>

    <link rel="stylesheet" href="../note-style.css">// Copy image files to assets directory

    <style>

        .pdf-container {function copyImageFiles() {// Helper function to create description from content

            width: 100%;

            height: calc(100vh - 200px);    const rootDir = path.join(__dirname, '..');function createDescription(content) {

            min-height: 600px;

            border: 1px solid #e2e8f0;    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.bmp'];    const plainText = content.replace(/[#*`\[\]]/g, '').substring(0, 150);

            border-radius: 8px;

            overflow: hidden;        return plainText.trim() + '...';

            background: #f8fafc;

        }    const files = fs.readdirSync(rootDir);}

        .pdf-viewer {

            width: 100%;    let copiedCount = 0;

            height: 100%;

        }    files.forEach(file => {// Copy image files to assets directory

        .pdf-download {

            margin: 1rem 0;        const ext = path.extname(file).toLowerCase();function copyImageFiles() {

            padding: 1rem;

            background: #f1f5f9;        if (imageExtensions.includes(ext)) {    const rootDir = path.join(__dirname, '..');

            border-radius: 8px;

            text-align: center;            const srcPath = path.join(rootDir, file);    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.bmp'];

        }

        .download-btn {            const destPath = path.join(assetsDir, file);    

            display: inline-block;

            padding: 0.75rem 1.5rem;            fs.copyFileSync(srcPath, destPath);    const files = fs.readdirSync(rootDir);

            background: #0366d6;

            color: white;            copiedCount++;    files.forEach(file => {

            text-decoration: none;

            border-radius: 8px;        }        const ext = path.extname(file).toLowerCase();

            font-weight: 600;

            transition: all 0.3s ease;    });        if (imageExtensions.includes(ext)) {

        }

        .download-btn:hover {    if (copiedCount > 0) {            const srcPath = path.join(rootDir, file);

            background: #0256b8;

            transform: translateY(-2px);        console.log(`📷 Copied ${copiedCount} image(s)`);            const destPath = path.join(assetsDir, file);

        }

    </style>    }            fs.copyFileSync(srcPath, destPath);

</head>

<body>}            console.log(`📷 Copied image: ${file}`);

    <header>

        <div class="container">        }

            <a href="../index.html" class="back-link">← Back to Notes</a>

            <h1>${title}</h1>// Process PDF files    });

            <p class="subject-tag">${subject} • PDF Document</p>

        </div>async function processPdfFiles() {}

    </header>

    <main class="container">    const rootDir = path.join(__dirname, '..');

        <div class="note-content">

            <div class="pdf-download">    const files = fs.readdirSync(rootDir).filter(file => file.endsWith('.pdf'));// Process PDF files

                <p>📄 PDF Document</p>

                <a href="../pdfs/${file}" class="download-btn" download>⬇️ Download PDF</a>    const pdfCards = [];async function processPdfFiles() {

            </div>

            <div class="pdf-container">        const rootDir = path.join(__dirname, '..');

                <iframe src="../pdfs/${file}" class="pdf-viewer" frameborder="0"></iframe>

            </div>    for (const file of files) {    const files = fs.readdirSync(rootDir).filter(file => file.endsWith('.pdf'));

        </div>

    </main>        try {    const pdfCards = [];

    <footer>

        <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>            const filePath = path.join(rootDir, file);    

    </footer>

</body>            const filename = path.basename(file, '.pdf');    for (const file of files) {

</html>`;

                        const { subject, title } = parseFilename(filename);        try {

            const htmlFileName = filename + '.html';

            fs.writeFileSync(path.join(notesDir, htmlFileName), viewerHtml);                        const filePath = path.join(rootDir, file);

            

            pdfCards.push({            // Copy PDF to pdfs directory            const filename = path.basename(file, '.pdf');

                subject: subject,

                title: title,            const destPdfPath = path.join(pdfsDir, file);            const { subject, title } = parseFilename(filename);

                description: `PDF document with detailed notes and resources`,

                link: `notes/${htmlFileName}`,            fs.copyFileSync(filePath, destPdfPath);            

                file: filename,

                type: 'PDF'                        // Copy PDF to pdfs directory

            });

                        // Create viewer page for PDF            const destPdfPath = path.join(pdfsDir, file);

            console.log(`📄 Processed PDF: ${file}`);

        } catch (error) {            const viewerHtml = `<!DOCTYPE html>            fs.copyFileSync(filePath, destPdfPath);

            console.error(`Error processing PDF ${file}:`, error.message);

        }<html lang="en">            

    }

    <head>            // Create viewer page for PDF

    return pdfCards;

}    <meta charset="UTF-8">            const viewerHtml = `<!DOCTYPE html>



// Process DOCX files    <meta name="viewport" content="width=device-width, initial-scale=1.0"><html lang="en">

async function processDocxFiles() {

    const rootDir = path.join(__dirname, '..');    <title>${title} - Abhay's Notes Hub</title><head>

    const files = fs.readdirSync(rootDir).filter(file => 

        file.endsWith('.docx') || file.endsWith('.doc')    <link rel="stylesheet" href="../note-style.css">    <meta charset="UTF-8">

    );

    const docxCards = [];    <style>    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    

    for (const file of files) {        .pdf-container {    <title>${title} - Abhay's Notes Hub</title>

        try {

            const filePath = path.join(rootDir, file);            width: 100%;    <link rel="stylesheet" href="../note-style.css">

            const filename = path.basename(file, path.extname(file));

            const { subject, title } = parseFilename(filename);            height: calc(100vh - 200px);    <style>

            

            // Convert DOCX to HTML using mammoth            min-height: 600px;        .pdf-container {

            const result = await mammoth.convertToHtml({ path: filePath });

            const htmlContent = result.value;            border: 1px solid #e2e8f0;            width: 100%;

            

            // Create HTML page for the document            border-radius: 8px;            height: calc(100vh - 200px);

            const docHtml = `<!DOCTYPE html>

<html lang="en">            overflow: hidden;            min-height: 600px;

<head>

    <meta charset="UTF-8">            background: #f8fafc;            border: 1px solid #e2e8f0;

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>${title} - Abhay's Notes Hub</title>        }            border-radius: 8px;

    <link rel="stylesheet" href="../note-style.css">

</head>        .pdf-viewer {            overflow: hidden;

<body>

    <header>            width: 100%;            background: #f8fafc;

        <div class="container">

            <a href="../index.html" class="back-link">← Back to Notes</a>            height: 100%;        }

            <h1>${title}</h1>

            <p class="subject-tag">${subject} • Document</p>        }        .pdf-viewer {

        </div>

    </header>        .pdf-download {            width: 100%;

    <main class="container">

        <article class="note-content">            margin: 1rem 0;            height: 100%;

            ${htmlContent}

        </article>            padding: 1rem;        }

    </main>

    <footer>            background: #f1f5f9;        .pdf-download {

        <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>

    </footer>            border-radius: 8px;            margin: 1rem 0;

</body>

</html>`;            text-align: center;            padding: 1rem;

            

            const htmlFileName = filename + '.html';        }            background: #f1f5f9;

            fs.writeFileSync(path.join(notesDir, htmlFileName), docHtml);

                    .download-btn {            border-radius: 8px;

            const description = createDescription(result.value);

            docxCards.push({            display: inline-block;            text-align: center;

                subject: subject,

                title: title,            padding: 0.75rem 1.5rem;        }

                description: description,

                link: `notes/${htmlFileName}`,            background: #0366d6;        .download-btn {

                file: filename,

                type: 'DOCX'            color: white;            display: inline-block;

            });

                        text-decoration: none;            padding: 0.75rem 1.5rem;

            console.log(`📝 Processed DOCX: ${file}`);

        } catch (error) {            border-radius: 8px;            background: #0366d6;

            console.error(`Error processing DOCX ${file}:`, error.message);

        }            font-weight: 600;            color: white;

    }

                transition: all 0.3s ease;            text-decoration: none;

    return docxCards;

}        }            border-radius: 8px;



// Process markdown files        .download-btn:hover {            font-weight: 600;

function processMarkdownFiles() {

    const rootDir = path.join(__dirname, '..');            background: #0256b8;            transition: all 0.3s ease;

    const markdownFiles = fs.readdirSync(rootDir)

        .filter(file => file.endsWith('.md') &&             transform: translateY(-2px);        }

                file !== 'README.md' && 

                file !== 'SETUP_INSTRUCTIONS.md' &&        }        .download-btn:hover {

                file !== 'IMPLEMENTATION_COMPLETE.md' &&

                file !== 'QUICK_START.md');    </style>            background: #0256b8;



    console.log(`Found ${markdownFiles.length} markdown file(s)`);</head>            transform: translateY(-2px);

    const noteCards = [];

<body>        }

    markdownFiles.forEach(file => {

        try {    <header>    </style>

            const filePath = path.join(rootDir, file);

            const content = fs.readFileSync(filePath, 'utf-8');        <div class="container"></head>

            

            const filename = path.basename(file, '.md');            <a href="../index.html" class="back-link">← Back to Notes</a><body>

            const { subject, title } = parseFilename(filename);

                        <h1>${title}</h1>    <header>

            // Generate HTML content

            const htmlContent = marked(content);            <p class="subject-tag">${subject} • PDF Document</p>        <div class="container">

        

        // Create HTML page for the note        </div>            <a href="../index.html" class="back-link">← Back to Notes</a>

        const noteHtml = `<!DOCTYPE html>

<html lang="en">    </header>            <h1>${title}</h1>

<head>

    <meta charset="UTF-8">    <main class="container">            <p class="subject-tag">${subject} • PDF Document</p>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>${title} - Abhay's Notes Hub</title>        <div class="note-content">        </div>

    <link rel="stylesheet" href="../note-style.css">

</head>            <div class="pdf-download">    </header>

<body>

    <header>                <p>📄 PDF Document</p>    <main class="container">

        <div class="container">

            <a href="../index.html" class="back-link">← Back to Notes</a>                <a href="../pdfs/${file}" class="download-btn" download>⬇️ Download PDF</a>        <div class="note-content">

            <h1>${title}</h1>

            <p class="subject-tag">${subject}</p>            </div>            <div class="pdf-download">

        </div>

    </header>            <div class="pdf-container">                <p>📄 PDF Document</p>

    <main class="container">

        <article class="note-content">                <iframe src="../pdfs/${file}" class="pdf-viewer" frameborder="0"></iframe>                <a href="../pdfs/${file}" class="download-btn" download>⬇️ Download PDF</a>

            ${htmlContent}

        </article>            </div>            </div>

    </main>

    <footer>        </div>            <div class="pdf-container">

        <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>

    </footer>    </main>                <iframe src="../pdfs/${file}" class="pdf-viewer" frameborder="0"></iframe>

</body>

</html>`;    <footer>            </div>

        

        // Save the HTML file        <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>        </div>

        const htmlFileName = filename + '.html';

        fs.writeFileSync(path.join(notesDir, htmlFileName), noteHtml);    </footer>    </main>

        

        // Create a short description</body>    <footer>

        const description = createDescription(content);

        </html>`;        <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>

        // Add to note cards

        noteCards.push({                </footer>

            subject: subject,

            title: title,            const htmlFileName = filename + '.html';</body>

            description: description,

            link: `notes/${htmlFileName}`,            fs.writeFileSync(path.join(notesDir, htmlFileName), viewerHtml);</html>`;

            file: filename,

            type: 'MD'                        

        });

        } catch (error) {            pdfCards.push({            const htmlFileName = filename + '.html';

            console.error(`Error processing file ${file}:`, error.message);

        }                subject: subject,            fs.writeFileSync(path.join(notesDir, htmlFileName), viewerHtml);

    });

                title: title,            

    return noteCards;

}                description: `PDF document with detailed notes and resources`,            pdfCards.push({



// Main async function to process all files                link: `notes/${htmlFileName}`,                subject: subject,

async function generateSite() {

    console.log('🚀 Starting site generation...\n');                file: filename,                title: title,

    

    // Copy images                type: 'PDF'                description: `PDF document with detailed notes and resources`,

    copyImageFiles();

                });                link: `notes/${htmlFileName}`,

    // Process all file types

    const noteCards = processMarkdownFiles();                            file: filename,

    const pdfCards = await processPdfFiles();

    const docxCards = await processDocxFiles();            console.log(`📄 Processed PDF: ${file}`);                type: 'PDF'

    

    // Combine all note cards        } catch (error) {            });

    const allCards = [...noteCards, ...pdfCards, ...docxCards];

            console.error(`Error processing PDF ${file}:`, error.message);            

    // Generate index.html

    const indexHtml = `<!DOCTYPE html>        }            console.log(`📄 Processed PDF: ${file}`);

<html lang="en">

<head>    }        } catch (error) {

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">                console.error(`Error processing PDF ${file}:`, error.message);

    <title>Abhay's Notes Hub - IGNOU Study Notes</title>

    <link rel="stylesheet" href="style.css">    return pdfCards;        }

</head>

<body>}    }

    <header>

        <div class="container">    

            <div class="header-content">

                <h1>📚 Abhay's Notes Hub</h1>// Process DOCX files    return pdfCards;

                <p class="subtitle">IGNOU Study Notes & Resources - All Formats Supported</p>

            </div>async function processDocxFiles() {}

        </div>

    </header>    const rootDir = path.join(__dirname, '..');

    

    <main class="container">    const files = fs.readdirSync(rootDir).filter(file => // Process DOCX files

        <section class="search-section">

            <input type="text" id="search-bar" placeholder="🔍 Search notes by subject or topic...">        file.endsWith('.docx') || file.endsWith('.doc')async function processDocxFiles() {

        </section>

            );    const rootDir = path.join(__dirname, '..');

        <section class="stats">

            <div class="stat-card">    const docxCards = [];    const files = fs.readdirSync(rootDir).filter(file => 

                <div class="stat-number">${allCards.length}</div>

                <div class="stat-label">Total Notes</div>            file.endsWith('.docx') || file.endsWith('.doc')

            </div>

            <div class="stat-card">    for (const file of files) {    );

                <div class="stat-number">${new Set(allCards.map(n => n.subject)).size}</div>

                <div class="stat-label">Subjects</div>        try {    const docxCards = [];

            </div>

            <div class="stat-card">            const filePath = path.join(rootDir, file);    

                <div class="stat-number">${noteCards.length} MD / ${pdfCards.length} PDF / ${docxCards.length} DOC</div>

                <div class="stat-label">Formats</div>            const filename = path.basename(file, path.extname(file));    for (const file of files) {

            </div>

            <div class="stat-card">            const { subject, title } = parseFilename(filename);        try {

                <div class="stat-number">Updated</div>

                <div class="stat-label">${new Date().toLocaleDateString()}</div>                        const filePath = path.join(rootDir, file);

            </div>

        </section>            // Convert DOCX to HTML using mammoth            const filename = path.basename(file, path.extname(file));

        

        <section class="notes-section">            const result = await mammoth.convertToHtml({ path: filePath });            const { subject, title } = parseFilename(filename);

            <h2>📖 Available Notes</h2>

            <div class="notes-grid" id="notes-grid">            const htmlContent = result.value;            

                ${allCards.map(note => {

                    const escapedSubject = note.subject.toLowerCase().replace(/"/g, '&quot;');                        // Convert DOCX to HTML using mammoth

                    const escapedTitle = note.title.toLowerCase().replace(/"/g, '&quot;');

                    const escapedLink = note.link.replace(/"/g, '&quot;');            // Create HTML page for the document            const result = await mammoth.convertToHtml({ path: filePath });

                    const typeEmoji = note.type === 'PDF' ? '📄' : note.type === 'DOCX' ? '📝' : '📖';

                    return `            const docHtml = `<!DOCTYPE html>            const htmlContent = result.value;

                <div class="note-card" data-subject="${escapedSubject}" data-title="${escapedTitle}">

                    <div class="note-header"><html lang="en">            

                        <span class="subject-badge">${note.subject}</span>

                        <span class="type-badge">${typeEmoji} ${note.type || 'MD'}</span><head>            // Create HTML page for the document

                    </div>

                    <h3>${note.title}</h3>    <meta charset="UTF-8">            const docHtml = `<!DOCTYPE html>

                    <p class="note-description">${note.description}</p>

                    <div class="note-footer">    <meta name="viewport" content="width=device-width, initial-scale=1.0"><html lang="en">

                        <a href="${escapedLink}" class="btn view-btn">View Notes</a>

                    </div>    <title>${title} - Abhay's Notes Hub</title><head>

                </div>

                `;    <link rel="stylesheet" href="../note-style.css">    <meta charset="UTF-8">

                }).join('')}

            </div></head>    <meta name="viewport" content="width=device-width, initial-scale=1.0">

        </section>

        <body>    <title>${title} - Abhay's Notes Hub</title>

        <section class="about-section">

            <h2>About This Hub</h2>    <header>    <link rel="stylesheet" href="../note-style.css">

            <p>This is a collection of study notes for IGNOU courses. Notes are automatically updated when new content is added to the repository. <strong>Now supporting Markdown (.md), PDF (.pdf), and Word Documents (.docx)!</strong></p>

            <p><strong>How to use:</strong> Browse the notes above, use the search bar to find specific topics, and click "View Notes" to read them. PDF files can be viewed in-browser or downloaded.</p>        <div class="container"></head>

            <p><strong>Share with friends:</strong> Send them this link and study together! 🎓</p>

        </section>            <a href="../index.html" class="back-link">← Back to Notes</a><body>

    </main>

                <h1>${title}</h1>    <header>

    <footer>

        <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>            <p class="subject-tag">${subject} • Document</p>        <div class="container">

        <p>Last updated: ${new Date().toLocaleString()}</p>

    </footer>        </div>            <a href="../index.html" class="back-link">← Back to Notes</a>

    

    <script>    </header>            <h1>${title}</h1>

        const searchBar = document.getElementById('search-bar');

        const noteCards = document.querySelectorAll('.note-card');    <main class="container">            <p class="subject-tag">${subject} • Document</p>

        

        searchBar.addEventListener('input', (e) => {        <article class="note-content">        </div>

            const searchTerm = e.target.value.toLowerCase();

                        ${htmlContent}    </header>

            noteCards.forEach(card => {

                const subject = card.dataset.subject;        </article>    <main class="container">

                const title = card.dataset.title;

                    </main>        <article class="note-content">

                if (subject.includes(searchTerm) || title.includes(searchTerm)) {

                    card.style.display = 'block';    <footer>            ${htmlContent}

                } else {

                    card.style.display = 'none';        <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>        </article>

                }

            });    </footer>    </main>

        });

    </script></body>    <footer>

</body>

</html>`;</html>`;        <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>



    fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);                </footer>



    // Copy CSS files            const htmlFileName = filename + '.html';</body>

    generateCSS();

            fs.writeFileSync(path.join(notesDir, htmlFileName), docHtml);</html>`;

    console.log('\n✅ Site generated successfully!');

    console.log(`📝 Generated ${allCards.length} note page(s):`);                        

    console.log(`   - ${noteCards.length} Markdown`);

    console.log(`   - ${pdfCards.length} PDF`);            const description = createDescription(result.value);            const htmlFileName = filename + '.html';

    console.log(`   - ${docxCards.length} DOCX`);

    console.log(`📁 Output directory: ${distDir}`);            docxCards.push({            fs.writeFileSync(path.join(notesDir, htmlFileName), docHtml);

}

                subject: subject,            

function generateCSS() {

    // Main style.css                title: title,            const description = createDescription(result.value);

    const styleCSS = `/* Modern styling for the notes hub */

:root {                description: description,            docxCards.push({

    --primary: #0366d6;

    --primary-dark: #0256b8;                link: `notes/${htmlFileName}`,                subject: subject,

    --secondary: #38bdf8;

    --bg: #f8fafc;                file: filename,                title: title,

    --card: #ffffff;

    --text: #0f172a;                type: 'DOCX'                description: description,

    --text-muted: #64748b;

    --border: #e2e8f0;            });                link: `notes/${htmlFileName}`,

    --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);                            file: filename,

}

            console.log(`📝 Processed DOCX: ${file}`);                type: 'DOCX'

* {

    margin: 0;        } catch (error) {            });

    padding: 0;

    box-sizing: border-box;            console.error(`Error processing DOCX ${file}:`, error.message);            

}

        }            console.log(`📝 Processed DOCX: ${file}`);

html {

    overflow-x: hidden;    }        } catch (error) {

    width: 100%;

}                console.error(`Error processing DOCX ${file}:`, error.message);



body {    return docxCards;        }

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;

    background: var(--bg);}    }

    color: var(--text);

    line-height: 1.6;    

    overflow-x: hidden;

    width: 100%;// Process markdown files    return docxCards;

    max-width: 100vw;

}function processMarkdownFiles() {}



.container {    const rootDir = path.join(__dirname, '..');

    max-width: 1200px;

    width: 100%;    const markdownFiles = fs.readdirSync(rootDir)// Read and process markdown files

    margin: 0 auto;

    padding: 0 1rem;        .filter(file => file.endsWith('.md') && const markdownFiles = fs.readdirSync(__dirname + '/..')

}

                file !== 'README.md' &&     .filter(file => file.endsWith('.md') && 

@media (min-width: 768px) {

    .container {                file !== 'SETUP_INSTRUCTIONS.md');            file !== 'README.md' && 

        padding: 0 2rem;

    }            file !== 'SETUP_INSTRUCTIONS.md');

}

    console.log(`Found ${markdownFiles.length} markdown file(s)`);

header {

    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);    const noteCards = [];console.log(`Found ${markdownFiles.length} markdown files`);

    color: white;

    padding: 2rem 0;

    text-align: center;

    box-shadow: var(--shadow-lg);    markdownFiles.forEach(file => {// Generate HTML for each markdown file

    width: 100%;

}        try {const noteCards = [];



.header-content h1 {            const filePath = path.join(rootDir, file);

    font-size: clamp(1.5rem, 5vw, 2.5rem);

    margin-bottom: 0.5rem;            const content = fs.readFileSync(filePath, 'utf-8');markdownFiles.forEach(file => {

    font-weight: 700;

    padding: 0 1rem;                try {

    word-wrap: break-word;

}            const filename = path.basename(file, '.md');        const filePath = path.join(__dirname, '..', file);



.subtitle {            const { subject, title } = parseFilename(filename);        const content = fs.readFileSync(filePath, 'utf-8');

    font-size: clamp(0.9rem, 3vw, 1.2rem);

    opacity: 0.95;                    

    padding: 0 1rem;

}            // Generate HTML content        // Extract title from filename



.search-section {            const htmlContent = marked(content);        const filename = path.basename(file, '.md');

    margin: 2rem 0;

}                const { subject, title } = parseFilename(filename);



#search-bar {        // Create HTML page for the note        

    width: 100%;

    padding: 1rem 1.5rem;        const noteHtml = `<!DOCTYPE html>        // Generate HTML content

    font-size: 1rem;

    border: 2px solid var(--border);<html lang="en">        const htmlContent = marked(content);

    border-radius: 50px;

    background: var(--card);<head>    

    transition: all 0.3s ease;

    box-shadow: var(--shadow);    <meta charset="UTF-8">    // Create HTML page for the note

}

    <meta name="viewport" content="width=device-width, initial-scale=1.0">    const noteHtml = `<!DOCTYPE html>

#search-bar:focus {

    outline: none;    <title>${title} - Abhay's Notes Hub</title><html lang="en">

    border-color: var(--primary);

    box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.1);    <link rel="stylesheet" href="../note-style.css"><head>

}

</head>    <meta charset="UTF-8">

.stats {

    display: grid;<body>    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    gap: 1rem;    <header>    <title>${title} - Abhay's Notes Hub</title>

    margin: 2rem 0;

    width: 100%;        <div class="container">    <link rel="stylesheet" href="../note-style.css">

}

            <a href="../index.html" class="back-link">← Back to Notes</a></head>

.stat-card {

    background: var(--card);            <h1>${title}</h1><body>

    padding: 1.25rem;

    border-radius: 12px;            <p class="subject-tag">${subject}</p>    <header>

    text-align: center;

    box-shadow: var(--shadow);        </div>        <div class="container">

    border: 1px solid var(--border);

    min-width: 0;    </header>            <a href="../index.html" class="back-link">← Back to Notes</a>

}

    <main class="container">            <h1>${title}</h1>

.stat-number {

    font-size: clamp(1.2rem, 3vw, 1.8rem);        <article class="note-content">            <p class="subject-tag">${subject}</p>

    font-weight: 700;

    color: var(--primary);            ${htmlContent}        </div>

    margin-bottom: 0.5rem;

}        </article>    </header>



.stat-label {    </main>    <main class="container">

    color: var(--text-muted);

    font-size: clamp(0.75rem, 2vw, 0.85rem);    <footer>        <article class="note-content">

    word-wrap: break-word;

}        <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>            ${htmlContent}



.notes-section {    </footer>        </article>

    margin: 2rem 0;

    width: 100%;</body>    </main>

}

</html>`;    <footer>

.notes-section h2 {

    font-size: clamp(1.5rem, 4vw, 2rem);                <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>

    margin-bottom: 1.5rem;

    color: var(--text);        // Save the HTML file    </footer>

    padding: 0 0.5rem;

}        const htmlFileName = filename + '.html';</body>



.notes-grid {        fs.writeFileSync(path.join(notesDir, htmlFileName), noteHtml);</html>`;

    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));            

    gap: 1.25rem;

    margin-top: 2rem;        // Create a short description    // Save the HTML file

    width: 100%;

}        const description = createDescription(content);    const htmlFileName = filename + '.html';



.note-card {            fs.writeFileSync(path.join(notesDir, htmlFileName), noteHtml);

    background: var(--card);

    border: 1px solid var(--border);        // Add to note cards    

    border-radius: 12px;

    padding: 1.25rem;        noteCards.push({    // Create a short description

    box-shadow: var(--shadow);

    transition: all 0.3s ease;            subject: subject,    const description = createDescription(content);

    display: flex;

    flex-direction: column;            title: title,    

    min-width: 0;

    overflow: hidden;            description: description,    // Add to note cards

}

            link: `notes/${htmlFileName}`,    noteCards.push({

.note-card:hover {

    transform: translateY(-3px);            file: filename,        subject: subject,

    box-shadow: var(--shadow-lg);

    border-color: var(--primary);            type: 'MD'        title: title,

}

        });        description: description,

.note-header {

    margin-bottom: 0.75rem;        } catch (error) {        link: `notes/${htmlFileName}`,

    display: flex;

    justify-content: space-between;            console.error(`Error processing file ${file}:`, error.message);        file: filename,

    align-items: center;

    flex-wrap: wrap;        }        type: 'MD'

    gap: 0.5rem;

}    });    });



.subject-badge {    } catch (error) {

    display: inline-block;

    background: var(--primary);    return noteCards;        console.error(`Error processing file ${file}:`, error.message);

    color: white;

    padding: 0.25rem 0.75rem;}    }

    border-radius: 20px;

    font-size: 0.75rem;});

    font-weight: 600;

    word-break: break-word;// Main async function to process all files

}

async function generateSite() {// Main async function to process all files

.type-badge {

    display: inline-block;    console.log('🚀 Starting site generation...\n');async function generateSite() {

    background: #f1f5f9;

    color: var(--text);        // Copy images

    padding: 0.25rem 0.75rem;

    border-radius: 20px;    // Copy images    copyImageFiles();

    font-size: 0.7rem;

    font-weight: 600;    copyImageFiles();    

}

        // Process PDFs

.note-card h3 {

    font-size: clamp(1.1rem, 3vw, 1.3rem);    // Process all file types    const pdfCards = await processPdfFiles();

    margin-bottom: 0.75rem;

    color: var(--text);    const noteCards = processMarkdownFiles();    

    word-wrap: break-word;

    overflow-wrap: break-word;    const pdfCards = await processPdfFiles();    // Process DOCX files

    hyphens: auto;

}    const docxCards = await processDocxFiles();    const docxCards = await processDocxFiles();



.note-description {        

    color: var(--text-muted);

    font-size: clamp(0.85rem, 2.5vw, 0.95rem);    // Combine all note cards    // Combine all note cards

    margin-bottom: 1rem;

    line-height: 1.5;    const allCards = [...noteCards, ...pdfCards, ...docxCards];    const allCards = [...noteCards, ...pdfCards, ...docxCards];

    word-wrap: break-word;

    overflow: hidden;<html lang="en">

    display: -webkit-box;

    -webkit-line-clamp: 3;    // Generate index.html<head>

    -webkit-box-orient: vertical;

}    const indexHtml = `<!DOCTYPE html>    <meta charset="UTF-8">



.note-footer {<html lang="en">    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    display: flex;

    gap: 0.5rem;<head>    <title>Abhay's Notes Hub - IGNOU Study Notes</title>

    margin-top: auto;

}    <meta charset="UTF-8">    <link rel="stylesheet" href="style.css">



.btn {    <meta name="viewport" content="width=device-width, initial-scale=1.0"></head>

    display: inline-block;

    padding: 0.75rem 1rem;    <title>Abhay's Notes Hub - IGNOU Study Notes</title><body>

    border-radius: 8px;

    text-decoration: none;    <link rel="stylesheet" href="style.css">    <header>

    font-weight: 600;

    transition: all 0.3s ease;</head>        <div class="container">

    text-align: center;

    cursor: pointer;<body>            <div class="header-content">

    font-size: 0.9rem;

    white-space: nowrap;    <header>                <h1>📚 Abhay's Notes Hub</h1>

}

        <div class="container">                <p class="subtitle">IGNOU Study Notes & Resources</p>

.view-btn {

    background: var(--primary);            <div class="header-content">            </div>

    color: white;

    flex: 1;                <h1>📚 Abhay's Notes Hub</h1>        </div>

}

                <p class="subtitle">IGNOU Study Notes & Resources - All Formats Supported</p>    </header>

.view-btn:hover {

    background: var(--primary-dark);            </div>    

    transform: scale(1.02);

}        </div>    <main class="container">



.about-section {    </header>        <section class="search-section">

    background: var(--card);

    padding: 1.5rem;                <input type="text" id="search-bar" placeholder="🔍 Search notes by subject or topic...">

    border-radius: 12px;

    margin: 2rem 0;    <main class="container">        </section>

    box-shadow: var(--shadow);

    border: 1px solid var(--border);        <section class="search-section">        

    width: 100%;

}            <input type="text" id="search-bar" placeholder="🔍 Search notes by subject or topic...">        <section class="stats">



.about-section h2 {        </section>            <div class="stat-card">

    font-size: clamp(1.3rem, 4vw, 1.8rem);

    margin-bottom: 1rem;                        <div class="stat-number">${noteCards.length}</div>

    color: var(--text);

}        <section class="stats">                <div class="stat-label">Total Notes</div>



.about-section p {            <div class="stat-card">            </div>

    color: var(--text-muted);

    margin-bottom: 1rem;                <div class="stat-number">${allCards.length}</div>            <div class="stat-card">

    font-size: clamp(0.9rem, 2.5vw, 1rem);

    line-height: 1.6;                <div class="stat-label">Total Notes</div>                <div class="stat-number">${new Set(noteCards.map(n => n.subject)).size}</div>

}

            </div>                <div class="stat-label">Subjects</div>

footer {

    text-align: center;            <div class="stat-card">            </div>

    padding: 2rem 0;

    color: var(--text-muted);                <div class="stat-number">${new Set(allCards.map(n => n.subject)).size}</div>            <div class="stat-card">

    border-top: 1px solid var(--border);

    margin-top: 3rem;                <div class="stat-label">Subjects</div>                <div class="stat-number">Updated</div>

}

            </div>                <div class="stat-label">${new Date().toLocaleDateString()}</div>

footer p {

    margin: 0.25rem 0;            <div class="stat-card">            </div>

}

                <div class="stat-number">${noteCards.length} MD / ${pdfCards.length} PDF / ${docxCards.length} DOC</div>        </section>

@media (max-width: 768px) {

    .container {                <div class="stat-label">Formats</div>        

        padding: 0 1rem;

    }            </div>        <section class="notes-section">

    

    header {            <div class="stat-card">            <h2>📖 Available Notes</h2>

        padding: 1.5rem 0;

    }                <div class="stat-number">Updated</div>            <div class="notes-grid" id="notes-grid">

    

    .notes-grid {                <div class="stat-label">${new Date().toLocaleDateString()}</div>                ${noteCards.map(note => {

        grid-template-columns: 1fr;

        gap: 1rem;            </div>                    const escapedSubject = note.subject.toLowerCase().replace(/"/g, '&quot;');

    }

            </section>                    const escapedTitle = note.title.toLowerCase().replace(/"/g, '&quot;');

    .stats {

        grid-template-columns: 1fr;                            const escapedLink = note.link.replace(/"/g, '&quot;');

        gap: 0.75rem;

    }        <section class="notes-section">                    return `

    

    .note-card {            <h2>📖 Available Notes</h2>                <div class="note-card" data-subject="${escapedSubject}" data-title="${escapedTitle}">

        padding: 1rem;

    }            <div class="notes-grid" id="notes-grid">                    <div class="note-header">

    

    .about-section {                ${allCards.map(note => {                        <span class="subject-badge">${note.subject}</span>

        padding: 1.25rem;

    }                    const escapedSubject = note.subject.toLowerCase().replace(/"/g, '&quot;');                    </div>

}

`;                    const escapedTitle = note.title.toLowerCase().replace(/"/g, '&quot;');                    <h3>${note.title}</h3>



    // note-style.css for individual note pages                    const escapedLink = note.link.replace(/"/g, '&quot;');                    <p class="note-description">${note.description}</p>

    const noteStyleCSS = `/* Styling for individual note pages */

:root {                    const typeEmoji = note.type === 'PDF' ? '📄' : note.type === 'DOCX' ? '📝' : '📖';                    <div class="note-footer">

    --primary: #0366d6;

    --primary-dark: #0256b8;                    return `                        <a href="${escapedLink}" class="btn view-btn">View Notes</a>

    --bg: #f8fafc;

    --card: #ffffff;                <div class="note-card" data-subject="${escapedSubject}" data-title="${escapedTitle}">                    </div>

    --text: #0f172a;

    --text-muted: #64748b;                    <div class="note-header">                </div>

    --border: #e2e8f0;

    --code-bg: #f1f5f9;                        <span class="subject-badge">${note.subject}</span>                `;

}

                        <span class="type-badge">${typeEmoji} ${note.type || 'MD'}</span>                }).join('')}

* {

    margin: 0;                    </div>            </div>

    padding: 0;

    box-sizing: border-box;                    <h3>${note.title}</h3>        </section>

}

                    <p class="note-description">${note.description}</p>        

body {

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;                    <div class="note-footer">        <section class="about-section">

    background: var(--bg);

    color: var(--text);                        <a href="${escapedLink}" class="btn view-btn">View Notes</a>            <h2>About This Hub</h2>

    line-height: 1.7;

}                    </div>            <p>This is a collection of study notes for IGNOU courses. Notes are automatically updated when new content is added to the repository. Share with your friends and study together! 🎓</p>



.container {                </div>            <p><strong>How to use:</strong> Browse the notes above, use the search bar to find specific topics, and click "View Notes" to read them.</p>

    max-width: 900px;

    width: 100%;                `;        </section>

    margin: 0 auto;

    padding: 0 1rem;                }).join('')}    </main>

}

            </div>    

@media (min-width: 768px) {

    .container {        </section>    <footer>

        padding: 0 2rem;

    }                <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>

}

        <section class="about-section">        <p>Last updated: ${new Date().toLocaleString()}</p>

header {

    background: linear-gradient(135deg, var(--primary) 0%, #38bdf8 100%);            <h2>About This Hub</h2>    </footer>

    color: white;

    padding: 1.5rem 0;            <p>This is a collection of study notes for IGNOU courses. Notes are automatically updated when new content is added to the repository. <strong>Now supporting Markdown (.md), PDF (.pdf), and Word Documents (.docx)!</strong></p>    

    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    width: 100%;            <p><strong>How to use:</strong> Browse the notes above, use the search bar to find specific topics, and click "View Notes" to read them. PDF files can be viewed in-browser or downloaded.</p>    <script>

}

            <p><strong>Share with friends:</strong> Send them this link and study together! 🎓</p>        // Search functionality

.back-link {

    display: inline-block;        </section>        const searchBar = document.getElementById('search-bar');

    color: white;

    text-decoration: none;    </main>        const notesGrid = document.getElementById('notes-grid');

    margin-bottom: 1rem;

    font-weight: 600;            const noteCards = document.querySelectorAll('.note-card');

    opacity: 0.9;

    transition: opacity 0.3s ease;    <footer>        

    font-size: clamp(0.9rem, 2.5vw, 1rem);

}        <p>&copy; ${new Date().getFullYear()} Abhay's Notes Hub. All rights reserved.</p>        searchBar.addEventListener('input', (e) => {



.back-link:hover {        <p>Last updated: ${new Date().toLocaleString()}</p>            const searchTerm = e.target.value.toLowerCase();

    opacity: 1;

}    </footer>            



header h1 {                noteCards.forEach(card => {

    font-size: clamp(1.3rem, 4vw, 2rem);

    margin-bottom: 0.5rem;    <script>                const subject = card.dataset.subject;

    word-wrap: break-word;

    padding: 0 0.5rem;        const searchBar = document.getElementById('search-bar');                const title = card.dataset.title;

}

        const noteCards = document.querySelectorAll('.note-card');                

.subject-tag {

    display: inline-block;                        if (subject.includes(searchTerm) || title.includes(searchTerm)) {

    background: rgba(255, 255, 255, 0.2);

    padding: 0.3rem 1rem;        searchBar.addEventListener('input', (e) => {                    card.style.display = 'block';

    border-radius: 20px;

    font-size: clamp(0.75rem, 2vw, 0.9rem);            const searchTerm = e.target.value.toLowerCase();                } else {

    word-wrap: break-word;

}                                card.style.display = 'none';



main {            noteCards.forEach(card => {                }

    padding: 1.5rem 0;

    width: 100%;                const subject = card.dataset.subject;            });

}

                const title = card.dataset.title;        });

.note-content {

    background: var(--card);                    </script>

    padding: 2rem 1.5rem;

    border-radius: 12px;                if (subject.includes(searchTerm) || title.includes(searchTerm)) {</body>

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    border: 1px solid var(--border);                    card.style.display = 'block';</html>`;

    width: 100%;

    overflow-x: hidden;                } else {

}

                    card.style.display = 'none';fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);

@media (min-width: 768px) {

    .note-content {                }

        padding: 3rem;

    }            });// Copy CSS files

}

        });const styleCSS = `/* Modern styling for the notes hub */

.note-content h1 {

    font-size: 2rem;    </script>:root {

    margin: 2rem 0 1rem;

    color: var(--text);</body>    --primary: #0366d6;

    border-bottom: 3px solid var(--primary);

    padding-bottom: 0.5rem;</html>`;    --primary-dark: #0256b8;

}

    --secondary: #38bdf8;

.note-content h2 {

    font-size: 1.6rem;    fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);    --bg: #f8fafc;

    margin: 1.5rem 0 1rem;

    color: var(--text);    --card: #ffffff;

}

    // Copy CSS files    --text: #0f172a;

.note-content h3 {

    font-size: 1.3rem;    generateCSS();    --text-muted: #64748b;

    margin: 1.25rem 0 0.75rem;

    color: var(--text);    --border: #e2e8f0;

}

    console.log('\n✅ Site generated successfully!');    --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

.note-content p {

    margin-bottom: 1rem;    console.log(`📝 Generated ${allCards.length} note page(s):`);    --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);

    color: var(--text);

}    console.log(`   - ${noteCards.length} Markdown`);}



.note-content ul, .note-content ol {    console.log(`   - ${pdfCards.length} PDF`);

    margin: 1rem 0 1rem 2rem;

}    console.log(`   - ${docxCards.length} DOCX`);* {



.note-content li {    console.log(`📁 Output directory: ${distDir}`);    margin: 0;

    margin-bottom: 0.5rem;

}}    padding: 0;



.note-content code {    box-sizing: border-box;

    background: var(--code-bg);

    padding: 0.2rem 0.4rem;function generateCSS() {}

    border-radius: 4px;

    font-family: 'Courier New', monospace;    // Main style.css

    font-size: clamp(0.75rem, 2vw, 0.9em);

    word-wrap: break-word;    const styleCSS = `/* Modern styling for the notes hub */html {

}

:root {    overflow-x: hidden;

.note-content pre {

    background: var(--code-bg);    --primary: #0366d6;    width: 100%;

    padding: 1rem;

    border-radius: 8px;    --primary-dark: #0256b8;}

    overflow-x: auto;

    margin: 1rem 0;    --secondary: #38bdf8;

    border: 1px solid var(--border);

    max-width: 100%;    --bg: #f8fafc;body {

}

    --card: #ffffff;    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;

.note-content pre code {

    background: none;    --text: #0f172a;    background: var(--bg);

    padding: 0;

    font-size: clamp(0.7rem, 1.8vw, 0.85em);    --text-muted: #64748b;    color: var(--text);

}

    --border: #e2e8f0;    line-height: 1.6;

.note-content table {

    width: 100%;    --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);    overflow-x: hidden;

    border-collapse: collapse;

    margin: 1.5rem 0;    --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);    width: 100%;

    display: block;

    overflow-x: auto;}    max-width: 100vw;

    max-width: 100%;

}}



.note-content th, .note-content td {* {

    border: 1px solid var(--border);

    padding: 0.75rem;    margin: 0;.container {

    text-align: left;

    font-size: clamp(0.8rem, 2vw, 0.95rem);    padding: 0;    max-width: 1200px;

    word-wrap: break-word;

}    box-sizing: border-box;    width: 100%;



.note-content th {}    margin: 0 auto;

    background: var(--code-bg);

    font-weight: 600;    padding: 0 1rem;

}

html {}

.note-content blockquote {

    border-left: 4px solid var(--primary);    overflow-x: hidden;

    padding-left: 1rem;

    margin: 1rem 0;    width: 100%;@media (min-width: 768px) {

    color: var(--text-muted);

    font-style: italic;}    .container {

}

        padding: 0 2rem;

.note-content a {

    color: var(--primary);body {    }

    text-decoration: none;

    border-bottom: 1px solid transparent;    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;}

    transition: border-color 0.3s ease;

}    background: var(--bg);



.note-content a:hover {    color: var(--text);/* Header */

    border-bottom-color: var(--primary);

}    line-height: 1.6;header {



.note-content img {    overflow-x: hidden;    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);

    max-width: 100%;

    height: auto;    width: 100%;    color: white;

    border-radius: 8px;

    margin: 1rem 0;    max-width: 100vw;    padding: 2rem 0;

}

}    text-align: center;

footer {

    text-align: center;    box-shadow: var(--shadow-lg);

    padding: 2rem 0;

    color: var(--text-muted);.container {    width: 100%;

    border-top: 1px solid var(--border);

    margin-top: 3rem;    max-width: 1200px;}

}

    width: 100%;

@media (max-width: 768px) {

    .note-content {    margin: 0 auto;.header-content h1 {

        padding: 1.25rem;

    }    padding: 0 1rem;    font-size: clamp(1.5rem, 5vw, 2.5rem);

    

    .note-content h1 {}    margin-bottom: 0.5rem;

        font-size: 1.5rem;

    }    font-weight: 700;

    

    .note-content h2 {@media (min-width: 768px) {    padding: 0 1rem;

        font-size: 1.3rem;

    }    .container {    word-wrap: break-word;

    

    .note-content h3 {        padding: 0 2rem;}

        font-size: 1.1rem;

    }    }

    

    .note-content ul, .note-content ol {}.subtitle {

        margin-left: 1.5rem;

    }    font-size: clamp(0.9rem, 3vw, 1.2rem);

}

`;header {    opacity: 0.95;



    fs.writeFileSync(path.join(distDir, 'style.css'), styleCSS);    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);    padding: 0 1rem;

    fs.writeFileSync(path.join(distDir, 'note-style.css'), noteStyleCSS);

}    color: white;}



// Run the site generation    padding: 2rem 0;

generateSite().catch(error => {

    console.error('❌ Error generating site:', error);    text-align: center;/* Search Section */

    process.exit(1);

});    box-shadow: var(--shadow-lg);.search-section {


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
