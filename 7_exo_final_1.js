const fs = require('fs/promises');
const path = require('path');

const way = path.join(__dirname, 'titres.json');

async function exerciceFunction() {
    try {

    const data = await fs.readFile(way, 'utf-8');
    const titres = await JSON.parse(data)

    const shortTitle = titres.filter(post => post.length < 30);

    const newTable = JSON.stringify(shortTitle, null, 2);
    await fs.writeFile('titres_courts.json', newTable)

    const newWay = path.join(__dirname, 'titres_cours.json')
    console.log(`Voici chemin d'accès de ce nouveau fichier !`, newWay);
    

    } catch (e) {
        console.log(e);
        
    }
}

exerciceFunction()