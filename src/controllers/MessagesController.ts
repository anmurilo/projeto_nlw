import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController {
    async create(request: Request, response: Response): Promise<Response> {
        try {
            const { admin_id, user_id, text } = request.body;
            const service = new MessagesService();
            const message = service.create({ admin_id, user_id, text });

            return response.json(message);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message
            })
        }
    }
}

export { MessagesController }