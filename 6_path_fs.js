const fs = require('fs/promises')
const path = require('path')

const way = path.join(__dirname, 'logs.txt');

async function writeFile()  {

    try {

    const content = "System status: OK - " + new Date().toISOString()

    await fs.writeFile('logs.txt', content)
    await readFile()

    } catch (e) {
        console.log(e);
        
    }
}


async function readFile() {
    try {

        const text = await fs.readFile(way, 'utf-8');
        console.log(text);
        

    } catch (e) {
        
        console.log(e);
    }
}

writeFile()