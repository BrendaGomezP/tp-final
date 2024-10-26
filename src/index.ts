import "./utils/env"
import "./database/db"
import "./models/auth"
import "./models/users"
import "./models/index"
import app from "./app";

const PORT = process.env.PORT

app.listen(PORT, () => console.log("Server listening on PORT:", PORT))