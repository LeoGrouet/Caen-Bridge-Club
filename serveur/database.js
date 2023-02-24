require("dotenv").config();
// const { MongoClient } = require("mongodb");
const { default: mongoose } = require("mongoose");
// const client = new MongoClient(process.env.MONGO_URL);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);

  const Member = mongoose.model("Member", {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
  });

  const firstPerson = new Member({
    name: "Odile",
    lastName: "Foucher",
    role: "Secretaire",
    isAdmin: true,
  });

  const secondPerson = new Member({
    name: "Blandine",
    lastName: "De Panthou",
    role: "Présidente",
    isAdmin: false,
  });

  console.log(firstPerson, secondPerson);
  await firstPerson.save();
  await secondPerson.save();
}
