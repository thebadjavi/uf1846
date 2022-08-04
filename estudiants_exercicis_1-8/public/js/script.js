{
    async function getCountryDetails() {

     
        const country = document.getElementById("country").value;      
        const response = await fetch( `https://restcountries.eu/rest/v3.1/name/${country}`);         
        // original const response = await fetch(`https://restcountries.com/v3.1/name/`);

       

        const data = await response.json();
       

        return data;

    }

    /**
     * Exercici 5b. Haz que las opciones del array de objetos 'optionsValues' se carguen dinàmicamente cuando la pàgina se renderice en el navegador
     */
    function setDynamicOptions() {
        const optionsValues = [{
            value: 'spain',
            label: 'España'
        }, {
            value: 'venezuela',
            label: 'Venezuela',
        }, {
            value: 'peru',
            label: 'Perú'
        }
        ]
        const select = document.getElementById('country');

        optionsValues.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.innerText = option.label;
            select.appendChild(optionElement);
        }  
        );
      
    }
     
 

    setDynamicOptions();

    /** 
     * 
     * EJERCICIO 6
     */ 


     async function setCountryFlag(event) {
        let countryName = event.target.value;

        let countryData = await getCountryDetails(countryName);
        //pedimos a la api la bandera del pais seleccionado y la mostramos en el div
        let countryFlag = countryData[0].flag;
        let countryFlagElement = document.getElementById('countryFlag');
        countryFlagElement.innerHTML = `<img src="${countryFlag}" alt="Bandera de ${countryName}">`;
        console.log(countryFlag);
    

        // Descomenta la següent línia si no has aconseguit implementar la primera part de l'exercici. Comenta la línia anterior també.   
        //let countryData = await getCountryDetailsFake(countryName);

    }

    document.getElementById('country').addEventListener('change', setCountryFlag);



    function getCountryDetailsFake(countryName) {
        const data = {
            spain: "https://flagcdn.com/es.svg",
            france: "https://flagcdn.com/fr.svg",
            italy: "https://flagcdn.com/it.svg"
        }

        return data.countryName;
    }

    


    // Descomentar para probar el Ejercicio 6
     console.log("Información sobre España:", getCountryDetails('spain'));
       
    document.querySelector('.w3-select').onchange = setCountryFlag;

}
