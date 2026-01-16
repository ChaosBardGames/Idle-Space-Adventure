function LoadingScript() {
document.getElementByClass("Start").style.display = "block";
document.getElementByClass("Money").style.display = "none";
let $Money = 1000000.00;
let $TaxRate = 25;
document.getElementById("Money Counter").innerHTML = `${Money} Empiris`;
document.getElementByClass("Tax Rate").innerHTML = `${TaxRate} percent`;
}
