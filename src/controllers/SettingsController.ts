import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
    async create(request: Request, response: Response): Promise<Response> {
        try {
            const { chat, username } = request.body;
            const service = new SettingsService();
            const settings = await service.create({ chat, username });

            return response.json(settings);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message
            })
        }
    }
}

export { SettingsController }