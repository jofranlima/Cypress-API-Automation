import { routes } from "../../configs/routes.js";
import { baseUrl } from "../../configs/routes.js";

const basicAuthorization = `Basic ${Cypress.env('INTEGRATION_TOKEN')}`;
const sessionToken = window.localStorage.getItem('sessionToken');
console.log(sessionToken)

let uploadId

class toDos {

GetToDos(){
    cy.request({
      method: 'GET',
      url: `${baseUrl}${routes.env.path_todo}`,
      headers: {
        'Context-Type': 'application/json',
        'customer_ip': '192.168.0.1',
        'user_type': 'customer',
        'id': `111320`,
        'originador': `interface: Adiante`,
         'Authorization': `Bearer ${sessionToken}`,

      },
      
      body: { },
      failOnStatusCode: false,
    }).then(response => {
      expect(response.status).to.eq(201);

      console.log(getAllLocalStorage)
      const invoiceId = response.body.uploadRequestId;
      window.localStorage.setItem('invoiceId', invoiceId);
    
    })
    

  
    cy.getAllLocalStorage().then((result) => {
      const local = result;
      console.log(local);
    });
    
  }
  
  
}
  export default new toDos


  




