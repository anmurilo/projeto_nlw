import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UsersController {
    async create(request: Request, response: Response): Promise<Response> {
        try {
            const { email } = request.body;
            const service = new UsersService();
            const user = await service.create(email);

            return response.json(user);
        }
        catch (error) {
            return response.status(400).json({
                message: error.messag
            })
        }
    }
}

export { UsersController }