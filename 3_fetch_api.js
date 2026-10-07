/* 
node 3_fetch_api

*/

async function loadTask() {
    try {
    const reponse = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data = await reponse.json()
    
    const name = data.company?.name
    const slogan = data.company?.catchPhrase

    console.log(`Entreprise : ${name}, slogan : ${slogan}`);
    
    } catch (err) {
        console.log('Erreur :', err);
        
    }
}

loadTask()