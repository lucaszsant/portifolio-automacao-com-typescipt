const BASE_URL='https://jsonplaceholder.typicode.com';
// Definir contratos de tipo 
type Post= {
    userID:number;
    id?: number; //campo opcional
    title: string;
    body: string;
};
type Coment={
   postID: number;
   id: number;
   name: string;
   email: string;
   body: string;
};

//GET /posts
async function listarPost(){
    console.log(`---1. GET/ post---`)
    const res= await fetch(`${BASE_URL}/posts`)
    const dados: Post[]= await res.json();
    console.log(`Status: ${res.status}` );
    console.log(`Lidos ${dados.length} posts.
           Exemplo: do primeiro:`, dados[0].title)
}

//GET /posts/1

async function buscarPorID(id:number){
    console.log(`---2. GET/ posts/1---`)
    const res= await fetch(`${BASE_URL}/posts/${id}`)
    const dados: Post= await res.json();
    console.log(`Status: ${res.status}` );
    console.log(`Título do post ${id}:`, dados.title)
}
//GET /ppst/1/ comment
async function listarComent(postID:number) {
    console.log(`---3. GET/ posts/1/comment---`)
    const res= await fetch(`${BASE_URL}/posts/${postID}/Comments`)
    const dados: Coment[]= await res.json();
    console.log(`Status: ${res.status}` );
    console.log(`O post ${postID} tem ${dados.length} comentários.
        EX: Email do primeiro comentário`, dados[0].email);
}
async function chamarReqs(){
    listarPost();
    buscarPorID(3);
    listarComent(3)
}

chamarReqs();


