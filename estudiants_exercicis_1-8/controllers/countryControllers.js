const Country = require('../models/country').CountryModel;

exports.getHomePage = (req, res) => {
    res.render('index');
}

exports.postSendData = async(req, res) => {
    //guardamos el objeto en la base de datos y lo mostramos en la vista
/*   const { conuntryName, population, urlFlag } = req.body;
    const country = new Country({ conuntryName, population, urlFlag});
   await country.save()
 */
    
    const fakeData = {
        conuntryName: "spain",
        population: 46438420,
        urlFlag: "https://restcountries.eu/data/esp.svg"
    }
    await fakeData.save()
    res.redirect('/');
}


