import express = require("express");
const { graphqlHTTP } = require("express-graphql");
import * as mongoose from "mongoose";
import * as schema from "./schema/schema";

const app: any = express();

//REMEMBER TO HIDE PASSWORD FROM THIS LINE!!
const mongo_URI: string =
  "mongodb+srv://admin:Codelabs2020@meetinggrounddb.7jfca.mongodb.net/MeetingGroundDB?retryWrites=true&w=majority";

mongoose
  .connect(mongo_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("👍🏻 Connected to MongoDB Atlas"))
  .catch((err) => console.log("Error: ", err.message));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4001, () => {
  console.log("🧩 Listening for requests on port 4001");
});