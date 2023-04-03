const adminControllers = require("../../serveur/controllers/adminController");
const Admin = require("../../serveur/models/modelAdmin");
const pageController = require("../controllers/pageController");
const memberControllers = require("../../serveur/controllers/memberController");
const bcrypt = require("bcrypt");

const verifyAdmin = {
  verif: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const matchAccount = await Admin.findOne({
        email,
        passwordHash: await bcrypt.hash(password, 10),
      });
      if (
        (password === matchAccount.password) &
        (email === matchAccount.email)
      ) {
        next();
      } else {
        console.log("Administrateur Refusé");
        res.status(200).redirect("/");
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la connexion à l'administrateur.");
    }
  },
};

module.exports = verifyAdmin;
