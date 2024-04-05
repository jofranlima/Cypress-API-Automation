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
      response.body.todos.forEach(todo => {
        expect(todo).to.have.property('title').that.is.not.null;
          })
    
     })
    
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

     })
  

  }
  
  
}
  export default new toDos


  




