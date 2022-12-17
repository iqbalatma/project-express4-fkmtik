import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";

// ROUTES
import OrganizationRoutes from "./routes/OrganizationRoutes";

class App {
	public app: Application;

	constructor() {
		this.app = express();
		this.plugins();
		this.routes();
	}

	protected plugins(): void {
		this.app.use(bodyParser.json());
		this.app.use(morgan("dev"));
		this.app.use(compression());
		this.app.use(helmet());
		this.app.use(cors());
	}

	protected routes(): void {
		this.app.use("/api/v2/organizations", OrganizationRoutes);
	}
}

export default App;
