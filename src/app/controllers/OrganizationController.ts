import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { json } from "stream/consumers";
import IController from "./ControllerInterface";

class OrganizationController implements IController {
	async index(req: Request, res: Response) {
		console.log("ini adalah index");
		return res.send("tes tok");
	}
	show(req: Request, res: Response): Response {
		throw new Error("Method not implemented.");
	}
	store(req: Request, res: Response): Response {
		return res.send(req.body);
	}
	update(req: Request, res: Response): Response {
		throw new Error("Method not implemented.");
	}
	delete(req: Request, res: Response): Response {
		throw new Error("Method not implemented.");
	}
}

export default new OrganizationController();
