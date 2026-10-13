const fs = require('fs/promises');
const path = require('path');

async function readLogs() {
    try {

        const fileName = process.argv[2];

        if (!fileName) {
            console.log(`Veuillez retenter en renseignant un fichier à analyser`);
            return
        }           

        const way = path.join(__dirname, fileName);
        const logs_brut = await fs.readFile(way, 'utf-8');
        const lignes = logs_brut.split('\n');
      
        const warnings = lignes.filter(data => data.startsWith('[ERROR]'))

        await fs.writeFile('error-report.txt', warnings)
        console.log(`FICHIER MIS A JOUR AVEC SUCCES`);

    } catch (e) {
    console.log(e);
    
   }
}

readLogs();