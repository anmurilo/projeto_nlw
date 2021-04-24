import { response, Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();
const settingsController = new SettingsController();

routes.get("", async (request, response) => {
    return response.json({
        "message": "root"
    });
});

routes.post("/settings", settingsController.create);

export { routes };

/**
 * Tipos de params:
 *  route params => parametros de rotas => http://localhost:3333/settings/1
 *  query params => filtros e buscas => http://localhost:3333/settings/1?search=filtro1&
 *  body params => parametros no corpo da requisição => { json }
 */