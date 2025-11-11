# 📚 Alex's Notes Hub - IGNOU Study Notes

This repository contains comprehensive study notes for IGNOU courses, automatically published to GitHub Pages.

## 🌟 Live Site
Visit: `https://kumarabhay1029.github.io/IGN_OL_CLASSNOTES/`

## 🚀 Features
- **Automatic Deployment**: Notes are automatically converted to HTML and published when you push to main branch
- **Search Functionality**: Easy search through all notes
- **Clean Design**: Modern, responsive interface
- **Easy to Update**: Just add markdown files and push!

## 📝 How to Add New Notes

1. Create a new markdown (.md) file in the root directory
2. Name it using the format: `subject_Topic-Name.md` (e.g., `mcs201_Data-Types.md`)
3. Write your notes in markdown format
4. Commit and push to the main branch
5. GitHub Actions will automatically build and deploy your site!

## 🔧 Manual Testing (Optional)

If you want to test the site locally before pushing:

```bash
# Install dependencies
npm install

# Generate the site
npm run build

# The generated site will be in the 'dist' folder
```

## 📂 Repository Structure
```
.
├── .github/workflows/deploy.yml  # GitHub Actions workflow
├── scripts/generate-site.js      # Site generator script
├── *.md                          # Your markdown notes
├── package.json                  # Dependencies
└── README.md                     # This file
```

## 💡 Tips
- Use clear, descriptive filenames for your notes
- Include proper markdown formatting (headings, lists, code blocks)
- The first line of each note will be used as the description
- Notes are automatically organized by subject code

## 🤝 Sharing with Friends
Simply share the live site URL with your friends. They can:
- Browse all notes
- Search for specific topics
- Read notes directly in their browser
- Access notes on any device

---
**Last Updated**: Auto-updated on every push
**Made with**: ❤️ for IGNOU students
