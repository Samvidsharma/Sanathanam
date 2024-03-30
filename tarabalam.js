const nakshatraObjectForTarabalam =
    [
        {
            id: 1,
            value: ["అశ్విని", "మఖ", "మూల"]
        },
        {
            id: 2,
            value: ["భరణి", "పుబ్బ", "పుర్వాషాఢ"]
        },
        {
            id: 3,
            value: ["కృత్తిక", "ఉత్తర", "ఉత్తరాషాఢ"]
        },
        {
            id: 4,
            value: ["రోహిణి", "హస్త", "శ్రవణం"]
        },
        {
            id: 5,
            value: ["మృగశిర", "చిత్త", "ధనిష్ఠ"]
        },
        {
            id: 6,
            value: ["ఆరుద్ర", "స్వాతి", "శతభిషం"]
        },
        {
            id: 7,
            value: ["పునర్వసు", "విశాఖ", "పూర్వాభాద్రా"]
        },
        {
            id: 8,
            value: ["పుష్యమీ", "అనూరాధ", "ఉత్తరాభాద్రా"]
        },
        {
            id: 9,
            value: ["ఆశ్లేష", "జ్యేష్ఠ", "రేవతి"]
        }

    ]

// const cantUseNakshatras=[
//     {id:2,value:"భరణి"},
//     {id:3,value:"కృత్తిక"},
//     {id:6,value:"ఆరుద్ర"},
//     {id:9,value:"ఆశ్లేష"},
//     {id:11,value:"పుబ్బ"},
//     {id:18,value:"జ్యేష్ఠ"},
//     {id:20,value:"పుర్వాషాఢ"},
//     {id:25,value:"పూర్వాభాద్రా"}
// ]
const cantUseNakshatras = [
    "భరణి", "కృత్తిక", "ఆరుద్ర", "ఆశ్లేష", "పుబ్బ", "జ్యేష్ఠ", "పుర్వాషాఢ",
    "పూర్వాభాద్రా"
]
const myDropdown = document.getElementsByClassName("my-dropdown");
console.log(myDropdown);

var selectElements = document.getElementsByClassName("dropdown-select");
console.log(selectElements);
for (let i = 0; i < selectElements.length; i++) {
    let currentList = selectElements[i];
    console.log(currentList);
    for (let j = 0; j < 27; j++) {
        let k = Math.floor(j/9);
        var newOption = document.createElement("option");
        var element = nakshatraObjectForTarabalam[j%9];
        console.log(j+' '+element.value+' '+k)
        newOption.value = element.id;
        newOption.text = element.value[k];
        currentList.appendChild(newOption)
    }
}


let submitButton = document.getElementById("submit")
console.log(submitButton);

submitButton.addEventListener("click", ShowMatches)

function ShowMatches() {
    const opt1 = parseInt(document.getElementById("mydropdownSelect1").value);
    const opt2 = parseInt(document.getElementById("mydropdownSelect2").value);

    const matches1 = [];
    const matches2 = [];

    for (let j = 1; j <= 9; j++) {
        const m = (j - opt1 + 1 + 9) % 9 || 9;
        const n = (j - opt2 + 1 + 9) % 9 || 9;

        if (m % 2 === 0 || m === 9) {
            matches1.push(...nakshatraObjectForTarabalam.find(ele => ele.id === j).value);
        }
        if (n % 2 === 0 || n === 9) {
            matches2.push(...nakshatraObjectForTarabalam.find(ele => ele.id === j).value);
        }
    }

    const result = matches1.filter(value => matches2.includes(value)).filter(Boolean);
    
    const orangeValues = [];
    const greenValues = [];
    const redValues = [];

nakshatraObjectForTarabalam.forEach(({ value }) => {
    value.forEach(item => {
        if (cantUseNakshatras.includes(item) && result.includes(item)) {
            orangeValues.push(item);
        }
        else if (!cantUseNakshatras.includes(item) && result.includes(item)) {
            greenValues.push(item);
        } else {
            redValues.push(item);
        }
    });
});

// Function to generate HTML for each color
const generateHTMLForColor = (values, className) => {
    return values.map(item => `<div class="${className}">${item}</div>`).join('');
};

// Generate HTML for each color
const orangeHTML = generateHTMLForColor(orangeValues, 'color-orange');
const greenHTML = generateHTMLForColor(greenValues, 'color-green');
const redHTML = generateHTMLForColor(redValues, 'color-red');

// Combine the HTML for all colors into one string with three columns
const innerHTMLString = `<div class = d-flex>
    <div class="column">${orangeHTML}</div>
    <div class="column">${greenHTML}</div>
    <div class="column">${redHTML}</div>
    </div>
`;

document.getElementById("result").innerHTML = innerHTMLString;

    document.getElementById("result").innerHTML = innerHTMLString;
}
