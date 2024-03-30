const nakshatraObjectForTarabalam =
[
    {
        id:1,
        value:"అశ్విని,మఖ,మూల"
    },
    {
        id:2,
        value:"భరణి,పుబ్బ,పుర్వాషాఢ"
    },
    {
        id:3,
        value:"కృత్తిక,ఉత్తర,ఉత్తరాషాఢ"
    },
    {
        id:4,
        value:"రోహిణి,హస్త,శ్రవణం"
    },
    {
        id:5,
        value:"మృగశిర,చిత్త,ధనిష్ఠ"
    },
    {
        id:6,
        value:"ఆరుద్ర,స్వాతి,శతభిషం"
    },
    {
        id:7,
        value:"పునర్వసు,విశాఖ,పూర్వాభాద్రా"
    },
    {
        id:8,
        value:"పుష్యమీ,అనూరాధ,ఉత్తరాభాద్రా"
    },
    {
        id:9,
        value:"ఆశ్లేష,జ్యేష్ఠ,రేవతి"
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
const cantUseNakshatras=[
    "భరణి","కృత్తిక","ఆరుద్ర","ఆశ్లేష","పుబ్బ","జ్యేష్ఠ","పుర్వాషాఢ",
    "పూర్వాభాద్రా"
]
const myDropdown = document.getElementsByClassName("my-dropdown");
console.log(myDropdown);

var selectElements = document.getElementsByClassName("dropdown-select");
console.log(selectElements);
for(let i=0;i<selectElements.length;i++){
    let currentList = selectElements[i];
    console.log(selectElements[i]);
    console.log(currentList);
    nakshatraObjectForTarabalam.forEach(element => {
    var newOption = document.createElement("option");
    console.log(element)
    newOption.value = element.id;
    newOption.text = element.value;
    currentList.appendChild(newOption)
});
}

let submitButton = document.getElementById("submit")
console.log(submitButton);

submitButton.addEventListener("click",ShowMatches)
function ShowMatches(){
    let opt1 = document.getElementById("mydropdownSelect1")
    console.log(opt1.value);

    let opt2 = document.getElementById("mydropdownSelect2")
    console.log(opt2.value);

    const matches1 = [];
    const matches2 = [];
    let result = [];
    for(let j=1;j<=9;j++){
        var m=j-opt1.value+1;
        if(m<=0){
            m=m+9;
        }
        var n=j-opt2.value+1;
        if(n<=0){
            n=n+9;
        }
        console.log(m)
        if(m%2===0 || m===9){
            console.log(nakshatraObjectForTarabalam.find(ele=>ele.id === j));
            matches1.push(nakshatraObjectForTarabalam.find(ele=>ele.id === j));
            console.log(matches1);
        }
        if(n%2===0 || n===9){
            matches2.push(nakshatraObjectForTarabalam.find(ele=>ele.id === j));
            console.log(matches2);
        }
    }
    result = matches1.filter(value => matches2.includes(value)).filter(val=>val!=undefined);
    console.log(result);
    result = result.map(str=>str.value.split(','));
    result = result.reduce((acc, curr) => {
        curr.forEach((value, index) => {
            if (acc[index] === undefined) {
                acc[index] = [];
            }
            acc[index].push(value);
        });
        return acc;
    }, []).flat()
    //result = result.filter(value => !cantUseNakshatras.includes(value))
    let innerHTMLString = "";
    result.forEach(item => {
        if(cantUseNakshatras.includes(item)){
            innerHTMLString += `<div class="color-red">${item}</div>`;
        }else{

            innerHTMLString += `<div>${item}</div>`;
        }
    });
    document.getElementById("result").innerHTML = innerHTMLString;
}