// O Link Resolver usa um documento Prismic como argumento
export default function(doc) {
    // Em seguida, ele executa uma mudança para determinar como tratar o item
    if (doc.type === "homepage") {
      // Se você tem um documento singleton 'homepage', você retorna a raiz
      return "/";
    }
    if (doc.type === "post") {
      //  Para uma 'postagem', você pode usar o ID exclusivo (UID) da postagem      
      return "/blog/" + doc.uid;
    }
    // Para outros tipos de documentos, basta usar o UID
    if (doc.uid) {
      return "/" + doc.uid;
    }
    // Caso contrário, retorne um 404
    return "/404";
  }