import {environment} from '../../cypress.env.json'


export const baseUrl = `https://apichallenges.eviltester.com`
export const routes = {
    env: {
      mirror_raw: "/mirror/raw",
      todos: "/todos",
      todos_id: "/todos/:id",
      challenger_guid: "/challenger/:guid",
      challenger: "/challenger",
      challenger_database_guid: "/challenger/database/:guid",
      challenges: "/challenges",
      heartbeat: "/heartbeat",
      secret_token: "/secret/token",
      secret_note: "/secret/note",
      mirror_request: "/mirror/request"
     
    }
  }

