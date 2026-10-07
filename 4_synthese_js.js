async function analyserArticle() {

    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        const userTitle = data.filter(data => data.userId === 1).map(data => data.title);
        const count = userTitle.length;

        console.log(`Il y a ${count} articles, les voici : ${userTitle}`);
        
    } catch (err) {
        console.log(err);
        
    }
}
analyserArticle();