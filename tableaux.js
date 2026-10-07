// 01_tableaux.js - Manipulation de données modernes

const equipe = [
  { nom: 'Alice', role: 'dev', salaire: 4500 },
  { nom: 'Bob', role: 'devops', salaire: 6000 },
  { nom: 'Charlie', role: 'dev', salaire: 5200 },
  { nom: 'Damien', role: 'cloud_engineer', salaire: 7000 }
] ;

// 1. .filter() : Sélectionne uniquement les éléments qui vérifient une condition
const devs = equipe.filter(membre => membre.role === 'dev') ;

// 2. .map() : Transforme chaque élément du tableau (ex: extraire uniquement le nom)
const nomsDevs = devs.map(membre => membre.nom) ;

console.log('Liste des devs :', nomsDevs) ;

const riches = equipe.filter(membre => membre.salaire > 5000) ;


const autres = equipe
  .filter(({ role }) => role !== 'dev')
  .map(({ salaire }) => salaire) ;
  
const masseSalariale = equipe.reduce((tirelire, equipe) => tirelire + equipe.salaire, 0)

//

const notes = [12, 14, 18, 16] ;

const moyenne = notes.reduce((tir, terme) => tir + terme, 0) / notes.length

console.log(moyenne);


// final step

const commandes = [
  { id: 1, client: 'Alice', montant: 120, livre: true },
  { id: 2, client: 'Bob', montant: 50, livre: false },
  { id: 3, client: 'Charlie', montant: 300, livre: true },
  { id: 4, client: 'Damien', montant: 80, livre: true }
] ;

const chiffreaffaire = commandes.filter(client => client.livre === true).map(client => client.montant).reduce((acc, montant) => acc + montant, 0)

console.log(chiffreaffaire)

