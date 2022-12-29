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

let bloc = function () {
    let photo1 = document.createElement('img');
    photo1.src = arrObj[0].avatar;
    document.body.append(photo1);
    let div1 = document.createElement('div');
    div1.innerHTML = arrObj[0].person + " (" + arrObj[0].age + ")";
    document.body.append(div1);

    let photo2 = document.createElement('img');
    photo2.src = arrObj[1].avatar;
    document.body.append(photo2);
    let div2 = document.createElement('div');
    div2.innerHTML = arrObj[1].person + " (" + arrObj[1].age + ")";
    document.body.append(div2);

    let photo3 = document.createElement('img');
    photo3.src = arrObj[2].avatar;
    document.body.append(photo3);
    let div3 = document.createElement('div');
    div3.innerHTML = arrObj[2].person + " (" + arrObj[2].age + ")";
    document.body.append(div3);
}

bloc();