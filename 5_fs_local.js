const fs = require('fs/promises')

async function writeData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()

        const dataTitle = data.filter(post => post.userId === 1).map(post => post.title)
        const jsonFile = JSON.stringify(dataTitle, null, 2)

        await fs.writeFile('titres.json', jsonFile)

    } catch (e) {
        console.log(`Une erreur est apparue durant l'écriture`, e);
        
    }
}


async function readData() {

    try {

        const file = await fs.readFile('titres.json', 'utf-8')
        const data = JSON.parse(file)

        const firstTitle = data[0]

        console.log(firstTitle);
        
    } catch (e) {

        console.log(e);
        

    }
}

readData();
/*
node 5_fs_local.js
*/