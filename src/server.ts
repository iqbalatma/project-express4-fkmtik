import App from ".";

const port: number = 8000;
const app = new App().app;
app.listen(port, () => {
	console.log("-----------------------------------------");
	console.log(`This application is running in port ${port}`);
	console.log("-----------------------------------------");
});
