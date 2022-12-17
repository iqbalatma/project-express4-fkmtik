"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrganizationController {
    index(req, res) {
        return res.send("ini adalah endpoint index");
    }
    show(req, res) {
        throw new Error("Method not implemented.");
    }
    store(req, res) {
        throw new Error("Method not implemented.");
    }
    update(req, res) {
        throw new Error("Method not implemented.");
    }
    delete(req, res) {
        throw new Error("Method not implemented.");
    }
}
exports.default = new OrganizationController();
