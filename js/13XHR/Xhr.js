

/**
 * @param  {String} url
 * @param  {string} method
 * @param  {boolean} async
 */
export default class Xhr {
 
  constructor(url,success, fail, method = 'GET', async = true){
      this.url = url;
      this.method = method;
      this.async = async;

      this.req = new XMLHttpRequest();
      this.req.open(this.method, this.url, this.async);
      this.req.send(null);

      //asynchrone donc on donne la référence sans appel immédiat ()
      this.req.onload = () => {
        console.log(this);
        this.getData(event, success, fail);
      }
  }

  getData(event, success, fail){
    if(this.req.status === 200){
      try{
        const data = JSON.parse(this.req.responseText);
        console.log("contenus parsé : ", data);
        success(data);
      }catch(e){
        console.log("Syntaxe Error", e);
        fail(e.msg);
      }
      //console.log("contenu", this.responseText);
    }else{
      console.log("Statut actuel", this.req.status, this.req.statusText);
      console.log(this);
    }
  }
}