let arrObj = [
    {
        "person": "Mark",
        "age": 25,
        "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=UpDown&mouthType=Sad&skinColor=Black"
    },
    {
        "person": "Bill",
        "age": 65,
        "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Wayfarers&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Light"
    },
    {
        "person": "Spencer",
        "age": 34,
        "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Sad&skinColor=Yellow"
    }
];

document.body.style.textAlign = "center";


let image = document.getElementById('image')
let contenue = document.getElementById('contenue');
let precedent = document.getElementById('precedent');
let suivant = document.getElementById('suivant');

precedent.style.margin = "50px";
suivant.style.margin = "50px";
precedent.style.fontSize = "20px";
suivant.style.fontSize = "20px";
precedent.style.fontWeight = "bolder";
suivant.style.fontWeight = "bolder";


//Methode js native pour parcourir un tableau d'objets ( avec for...in )
for (let i in arrObj) {
    image.src = arrObj[i].avatar;
    contenue.innerHTML = arrObj[i].person + " (" + arrObj[i].age + ")";

    precedent.addEventListener('click', function () {
        i--;
        image.src = arrObj[i].avatar;
        contenue.innerHTML = arrObj[i].person + " (" + arrObj[i].age + ")";
    })

    suivant.addEventListener('click', function () {
        i++;
        image.src = arrObj[i].avatar;
        contenue.innerHTML = arrObj[i].person + " (" + arrObj[i].age + ")";
    })
}


