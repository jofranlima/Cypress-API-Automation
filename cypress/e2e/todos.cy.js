
import toDos from "../pages/backend/todos"


beforeEach(() => {
    // RegistrationData.createSession();
    cy.clearAllCookies()
    // cy.clearLocalStorage()
  });
 

it('Get Todos', () => {
    toDos.GetToDos();
});
it.only('Put Todos', () => {
  toDos.putToDos();
});


