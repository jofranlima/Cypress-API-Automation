
import toDos from "../pages/backend/todos"


beforeEach(() => {
    // RegistrationData.createSession();
    cy.clearAllCookies()
    // cy.clearLocalStorage()
  });
 

it.only('Get Todos', () => {
    toDos.GetToDos();
});

