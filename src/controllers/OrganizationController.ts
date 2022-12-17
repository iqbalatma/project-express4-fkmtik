import { Request, Response } from "express";
import IController from "./ControllerInterface";

class OrganizationController implements IController {
	index(req: Request, res: Response): Response {
		return res.send("ini adalah endpoint index");
	}
	show(req: Request, res: Response): Response {
		throw new Error("Method not implemented.");
	}
	store(req: Request, res: Response): Response {
		throw new Error("Method not implemented.");
	}
	update(req: Request, res: Response): Response {
		throw new Error("Method not implemented.");
	}
	delete(req: Request, res: Response): Response {
		throw new Error("Method not implemented.");
	}
}

export default new OrganizationController();
