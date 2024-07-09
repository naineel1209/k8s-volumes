const fs = require('fs');
const path = require('path');

const directoryPath = '/data';
const filePath = path.join(directoryPath, 'testfile.txt');

// Ensure the directory exists
if (!fs.existsSync(directoryPath)) {
    console.error(`Directory ${directoryPath} does not exist.`);
    process.exit(1);
}

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        process.exit(1);
    }

    files.forEach(file => {
        const filePath = path.join(directoryPath, file);

        fs.stat(filePath, (err, stats) => {
            if (err) {
                console.error('Error getting stats for file:', file, err);
                return;
            }

            console.log(`File: ${file}`);
            console.log(`- Size: ${stats.size} bytes`);
            console.log(`- Created: ${stats.birthtime}`);
            console.log(`- Modified: ${stats.mtime}`);
            console.log(`- Is File: ${stats.isFile()}`);
            console.log(`- Is Directory: ${stats.isDirectory()}`);
            console.log('----------------------');
        });
    });
});

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        process.exit(1);
    }
    console.log('File content:', data);
});
