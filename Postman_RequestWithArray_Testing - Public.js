//=- PRE-SCRIPT TAB -=//

const dataArray = [ //Array of variables to replace in Body or URI
    "XXXXXXXXXXXXX@wa.gw.msging.net",
    "XXXXXXXXXXXXX@wa.gw.msging.net",
    "XXXXXXXXXXXXX@wa.gw.msging.net",
    "XXXXXXXXXXXXX@wa.gw.msging.net",
    "XXXXXXXXXXXXX@wa.gw.msging.net",
    "XXXXXXXXXXXXX@wa.gw.msging.net",
    "XXXXXXXXXXXXX@wa.gw.msging.net",
    "XXXXXXXXXXXXX@wa.gw.msging.net",
    "XXXXXXXXXXXXX@wa.gw.msging.net",
    "XXXXXXXXXXXXX@wa.gw.msging.net",
    "XXXXXXXXXXXXX@wa.gw.msging.net",
];
let item = pm.environment.get("itemOfArray");
pm.environment.set("identity", dataArray[item]);



//-= Tests Tab -=//


let item = pm.environment.get("itemOfArray");

pm.environment.set("itemOfArray", Number(item) + 1);
console.log("Number Array:" +item)

let jsonData = pm.response.json();

let stringDataResource = JSON.stringify(jsonData.resource)

if(jsonData.drConsultaErrorMessage != null){
    let stringdrConsultaErrorMessage = JSON.stringify(jsonData.drConsultaErrorMessage)

pm.test("Variable Found:"+stringdrConsultaErrorMessage, function () {
    pm.response.to.have.status(200);
});
}
else{
pm.test("Variable Found:"+stringDataResource, function () {
    pm.response.to.have.status(200);
});
}

console.log(jsonData)
