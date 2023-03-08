const Admin = require("../models/modelAdmin");

const verificateAdmin = {

    adminVerification: async (req, res)=>{
        // Je recupère via le req l'email et le password de la personne qui veux ce connecter
        const visitorEmail = req.body.email;
        const visitorPassword = req.body.password;
        
        // Je 
        
        next();
    }

};

module.exports = verificateAdmin;