const path = require('path');
const fs = require('fs/promises');

async function lireJsonSecurise(nomFichier) {
        const way = path.join(__dirname, nomFichier);

    try {

        const data = await fs.readFile(way, 'utf-8');
        const content = JSON.parse(data)

        return console.log(content);


    } catch (e) {

        console.log(`Nous avons rencontré une erreur :/`, false);
        
    }
}

lireJsonSecurise('iconnu.js')