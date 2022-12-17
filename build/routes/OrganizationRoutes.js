"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./BaseRouter"));
// Controllers
const OrganizationController_1 = __importDefault(require("../controllers/OrganizationController"));
class OrganizationRoutes extends BaseRouter_1.default {
    routes() {
        this.router.get("/", OrganizationController_1.default.index);
        this.router.post("/", OrganizationController_1.default.store);
        this.router.get("/:id", OrganizationController_1.default.show);
        this.router.post("/:id", OrganizationController_1.default.update);
        this.router.post("/:id", OrganizationController_1.default.delete);
    }
}
exports.default = new OrganizationRoutes().router;
