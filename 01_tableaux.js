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