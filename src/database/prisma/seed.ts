import { seed as organizationSeeder } from "../seeders/OrganizationSeeder";
async function seed() {
	organizationSeeder();
}

seed();
