const pageController = {
  
    // méthode pour la page d'accueil
    homePage: async function (req, res) {
    res.render('index');
    },

    schedule: async function (req, res){
        res.render('schedule')
    }
}

module.exports = pageController;