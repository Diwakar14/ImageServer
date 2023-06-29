import app from "./App";

app.expressApp.listen(4000, () => {
    console.log("Server listening on port 4000");
});