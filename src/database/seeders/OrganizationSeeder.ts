import { db } from "../../utils/db.server";

type Organization = {
	name: string;
	shortname: string;
	linkInstagram?: string;
	linkWebsite?: string;
};

function getOrganizationsData(): Array<Organization> {
	return [
		{
			name: "Hima IF",
			shortname: "HMIF",
		},
		{
			name: "Hima IK",
			shortname: "HMIK",
		},
	];
}

export async function seed() {
	await db.organization.createMany({
		data: getOrganizationsData(),
	});
}
