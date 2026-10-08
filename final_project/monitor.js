const fs = require('fs/promises');
const path = require('path');

async function writeMessage() {

    try {

        const way = path.join(__dirname, 'health.log')
        const date = new Date();
        const message = `[STATUS] Serveur opérationnel - Date : ${date}`

        console.log(message);
        
        await fs.writeFile(way, message);
        console.log('Rapport de santé généré avec succès !');
        

    } catch (e) {
        console.log(`Oops, une erreur est apparue :/\n\n)`, e);
        
    }
}

writeMessage();