const express = require("express");

const app = express();
app.use(express.static("public"));
app.use(express.json());

app.get("/*", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.server;
if (require.main == module) {
	app.listen(process.env.PORT || 8083, () => console.log("running"));
}
