import { routes } from "../../configs/routes.js";
import { baseUrl } from "../../configs/routes.js";

const sessionToken = window.localStorage.getItem('sessionToken');
console.log(sessionToken)

// let uploadId

class toDos {

GetToDos(){
    cy.request({
      method: 'GET',
      url: `${baseUrl}${routes.env.todos}`,
      headers: {
        'Context-Type': 'application/json',
      },
      
      body: {

       },
   
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).not.to.be.null;

    //   console.log(getAllLocalStorage)
    //   const invoiceId = response.body.uploadRequestId;
    //   window.localStorage.setItem('invoiceId', invoiceId);
    
     })
  
    // cy.getAllLocalStorage().then((result) => {
    //   const local = result;
    //   console.log(local);
    // });
    
  }

putToDos(){
    cy.request({
      method: 'PUT',
      url: `${baseUrl}${routes.env.todos}`,
      headers: {
        'Context-Type': 'application/json',
      },
      
      body: {
        name:"status"

       },
       failOnStatusCode:false

    }).then(response => {
      expect(response.status).to.eq(405);
    //   console.log(getAllLocalStorage)
    //   const invoiceId = response.body.uploadRequestId;
    //   window.localStorage.setItem('invoiceId', invoiceId);
    
     })
  
    // cy.getAllLocalStorage().then((result) => {
    //   const local = result;
    //   console.log(local);
    // });
    
  }
  
  
}
  export default new toDos


  




