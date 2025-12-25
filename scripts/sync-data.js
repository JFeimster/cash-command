const fs = require('fs');
const path = require('path');

/**
 * Sync Data Script
 * Copies the 'shared/data' folder into 'static/data' and 'nextjs/public/data'
 * This ensures both apps always have the latest "Single Source of Truth".
 */

const SOURCE_DIR = path.join(__dirname, '../shared/data');
const TARGET_STATIC = path.join(__dirname, '../static/data');
const TARGET_NEXT = path.join(__dirname, '../nextjs/public/data'); // Next.js reads from public/ for runtime fetch

function copyDir(src, dest) {
    // Create dest folder if it doesn't exist
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
            console.log(`✓ Copied ${entry.name} to ${dest}`);
        }
    }
}

try {
    console.log('🔄 Syncing Shared Data...');
    
    // 1. Sync to Static Site
    copyDir(SOURCE_DIR, TARGET_STATIC);
    
    // 2. Sync to Next.js App
    // Note: Next.js needs data in 'public' to be accessible via fetch('/data/providers.json')
    copyDir(SOURCE_DIR, TARGET_NEXT);

    console.log('✅ Data Sync Complete.');
} catch (err) {
    console.error('❌ Data Sync Failed:', err);
    process.exit(1);
}