@echo off
echo 🚀 Moonshine Capital - Initializing Folder Structure...

:: 1. Root Configuration
echo Creating Root...
type nul > .env.example
type nul > .gitignore
type nul > README.md
type nul > package.json

:: 2. Shared Core
echo Creating Shared Data Layer...
mkdir shared\config 2>nul
mkdir shared\data 2>nul
mkdir shared\images 2>nul
type nul > shared\data\providers.json
type nul > shared\data\categories.json
type nul > shared\data\filters.json
type nul > shared\config\site.js

:: 3. Static Site
echo Creating Static Site Structure...
mkdir static\css 2>nul
mkdir static\js 2>nul
mkdir static\data 2>nul
mkdir static\images\providers 2>nul
mkdir static\images\icons 2>nul
type nul > static\index.html
type nul > static\directory.html
type nul > static\provider-detail.html
type nul > static\compare.html
type nul > static\css\main.css
type nul > static\css\components.css
type nul > static\js\main.js
type nul > static\js\filters.js
type nul > static\js\search.js

:: 4. Next.js App
echo Creating Next.js Structure...
mkdir nextjs\components 2>nul
mkdir nextjs\context 2>nul
mkdir nextjs\hooks 2>nul
mkdir nextjs\lib 2>nul
mkdir nextjs\pages\api\webhook 2>nul
mkdir nextjs\pages\blog 2>nul
mkdir nextjs\pages\directory 2>nul
mkdir nextjs\pages\provider 2>nul
mkdir nextjs\public\images 2>nul
mkdir nextjs\styles 2>nul
mkdir nextjs\utils 2>nul

:: Create Next.js Base Files
type nul > nextjs\package.json
type nul > nextjs\next.config.js
type nul > nextjs\tailwind.config.js
type nul > nextjs\pages\index.js
type nul > nextjs\pages\_app.js
type nul > nextjs\pages\about.js
type nul > nextjs\pages\contact.js

echo.
echo ✅ ALL DONE! Folder structure created successfully.
echo 📂 You can now open these files in VS Code and paste the code.
pause