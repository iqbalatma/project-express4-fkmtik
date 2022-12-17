import BaseRoutes from "./BaseRouter";

// Controllers
import OrganizationController from "../controllers/OrganizationController";

class OrganizationRoutes extends BaseRoutes {
	public routes(): void {
		this.router.get("/", OrganizationController.index);
		this.router.post("/", OrganizationController.store);
		this.router.get("/:id", OrganizationController.show);
		this.router.post("/:id", OrganizationController.update);
		this.router.post("/:id", OrganizationController.delete);
	}
}

export default new OrganizationRoutes().router;
