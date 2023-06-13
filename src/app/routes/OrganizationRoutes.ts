import BaseRoutes from "./BaseRouter";
import { auth } from "../middlewares/AuthMiddleware";
// Controllers
import OrganizationController from "../controllers/OrganizationController";

class OrganizationRoutes extends BaseRoutes {
	public routes(): void {
		this.router.get("/", OrganizationController.index);
		this.router.post("/", OrganizationController.store);
		this.router.get("/:id", OrganizationController.show);
		this.router.put("/:id", OrganizationController.update);
		this.router.delete("/:id", OrganizationController.delete);
	}
}

export default new OrganizationRoutes().router;
