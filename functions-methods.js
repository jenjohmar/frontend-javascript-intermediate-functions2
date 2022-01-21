// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com
function getEmailDomain(emailAddress) {
    if (!emailAddress.includes("@")) {
        console.log("Enter a valid e-mail address!")
    } else {
        return emailAddress.substring(emailAddress.indexOf("@") + 1);
    }
}

console.log(getEmailDomain("jennifer@novi.nl"));
console.log(getEmailDomain("jennifer@novi-education.com"));
console.log(getEmailDomain("jjm.bakx@outlook.com"));



/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
function typeOfEmail(emailAddress) {
    if (emailAddress.includes("novi.")) {
        return "Medewerker";
    } else if(emailAddress.includes("novi-")) {
        return "Student";
    } else {
        return "Extern";
    }
}

console.log(typeOfEmail("tessa@novi.nl"));
console.log(typeOfEmail("tessa@novi-education.nl"));
console.log(typeOfEmail("tessa@outlook.com"));


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity(emailAddress) {
    let emailValid = true;
    if (!emailAddress.includes("@") || emailAddress.includes(",")) {
        emailValid = false;
        // als de waarde van de laatste index gelijk is aan "." dan emailValid = false
    } else if(emailAddress.charAt(emailAddress.length - 1) === ".") {
        emailValid = false
    }

    return emailValid;
}

console.log(checkEmailValidity("jennifer@koekje,nl"));
console.log(checkEmailValidity("jenniferkoekje.nl"));
console.log(checkEmailValidity("jennifer@koekjenl."));
console.log(checkEmailValidity("jennifer@koekje.nl"));