async function startLiaison() {

    try {
        const liaison = await chercherServeurAWS()
        console.log(`« Connexion réussie à l'adresse IP : ${serveur.ip} »`);
        
    } catch (err) {
        console.log('Une erreur est survenur :' + err);
        
    }
}

startLiaison()