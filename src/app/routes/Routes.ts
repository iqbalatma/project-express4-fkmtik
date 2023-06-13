import { Router, Request, Response, Application } from "express";
import { auth } from "../middlewares/AuthMiddleware";
import OrganizationRoutes from "./OrganizationRoutes";

class Routes {
	public static handler(app: Application): void {
		app.use("/api/v2", auth);
		app.use("/api/v2/organizations", OrganizationRoutes);
	}
}

export default Routes.handler;
