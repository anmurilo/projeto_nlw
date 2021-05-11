import { response, Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();
const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.get("", async (request, response) => {
    return response.json({
        "message": "root"
    });
});
routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);
routes.post("/messages", messagesController.create);

export { routes };

/**
 * Tipos de params:
 *  route params => parametros de rotas => http://localhost:3333/settings/1
 *  query params => filtros e buscas => http://localhost:3333/settings/1?search=filtro1&
 *  body params => parametros no corpo da requisição => { json }
 */