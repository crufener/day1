console.log("hello world");
function fizz(num) {
    return (num % 3 === 0);
}
function buzz(num) {
    return (num % 5 === 0);
}
function fizzAndBuzz(num) {
    return (num % 5 === 0 && num % 3 === 0);
}
function bizzBuzz(num) {
    var result = "";
    for (var i = 1; i <= num; i++) {
        if (fizz(i))
            result += "fizz, ";
        else if (buzz(i))
            result += "buzz, ";
        else if (fizzAndBuzz(i))
            result += "fizzBuzz, ";
        else {
            result += i.toString() + ", ";
        }
    }
    console.log(result);
    return result;
}
;
console.log(bizzBuzz(100));
var priceAsString = "10.15abc";
var priceAsNumber = parseFloat(priceAsString);
console.log("String to a number using '+' operator: " + typeof priceAsNumber);
var dogAge;
dogAge = 2.5;
var dogName = "Haboc";
console.log(dogName);
console.log("The dog " + dogName + " is " + dogAge + " years old!");
var number1 = 1;
var number2 = 2;
console.log(number1 + number2);
var ProductStatus;
(function (ProductStatus) {
    ProductStatus[ProductStatus["InStock"] = 0] = "InStock";
    ProductStatus[ProductStatus["OutOfStock"] = 1] = "OutOfStock";
    ProductStatus[ProductStatus["UnKnown"] = 2] = "UnKnown";
})(ProductStatus || (ProductStatus = {}));
var available = ProductStatus.OutOfStock;
console.log(available);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG9Xb3JsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlbGxvV29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUszQixjQUFjLEdBQUc7SUFDaEIsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUV0QixDQUFDO0FBRUQsY0FBYyxHQUFHO0lBQ2hCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUU7QUFDdkIsQ0FBQztBQUVELHFCQUFxQixHQUFHO0lBQ3ZCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUU7QUFDdEMsQ0FBQztBQUVELGtCQUFrQixHQUFHO0lBQ3BCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNoQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQy9CLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sSUFBRyxRQUFRLENBQUM7UUFDOUIsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sSUFBRSxRQUFRLENBQUM7UUFDbEMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sSUFBRSxZQUFZLENBQUM7UUFDN0MsSUFBSSxDQUFBLENBQUM7WUFBQyxNQUFNLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztRQUFBLENBQUM7SUFDdEMsQ0FBQztJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNmLENBQUM7QUFBQSxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMzQixJQUFJLGFBQWEsR0FBRyxVQUFVLENBQUM7QUFDL0IsSUFBSSxhQUFhLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQTBDLE9BQU8sYUFBZSxDQUFDLENBQUM7QUFHOUUsSUFBSSxNQUFNLENBQUM7QUFDWCxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBRWIsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFXLE9BQU8sWUFBTyxNQUFNLGdCQUFhLENBQUMsQ0FBQztBQUcxRCxJQUFJLE9BQU8sR0FBVSxDQUFDLENBQUM7QUFDdkIsSUFBSSxPQUFPLEdBQVcsQ0FBQyxDQUFDO0FBQ3hCLE9BQU8sQ0FBRSxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBSWhDLElBQUssYUFFSjtBQUZELFdBQUssYUFBYTtJQUNqQix1REFBTyxDQUFBO0lBQUUsNkRBQVUsQ0FBQTtJQUFFLHVEQUFPLENBQUE7QUFDN0IsQ0FBQyxFQUZJLGFBQWEsS0FBYixhQUFhLFFBRWpCO0FBRUQsSUFBSSxTQUFTLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQztBQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZFwiKTtcclxuXHJcbi8vVGhpcyBpcyBhIGRlYnVnZ2VyIHN0YXRlbWVudC4gIEl0cyBsaWtlIGEgYnJlYWsgcG9pbnQuXHJcbi8vZGVidWdnZXI7XHJcblxyXG5mdW5jdGlvbiBmaXp6KG51bSkge1xyXG5cdHJldHVybiAobnVtJTMgPT09IDApO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gYnV6eihudW0pIHtcclxuXHRyZXR1cm4gKG51bSU1ID09PSAwKSA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpenpBbmRCdXp6KG51bSkge1xyXG5cdHJldHVybiAobnVtJTUgPT09IDAgJiYgbnVtJTMgPT09IDApIDtcclxufVxyXG5cclxuZnVuY3Rpb24gYml6ekJ1enoobnVtKSB7XHJcblx0dmFyIHJlc3VsdCA9IFwiXCI7XHJcblx0Zm9yICh2YXIgaSA9IDE7IGkgPD0gbnVtOyBpKyspIHtcclxuXHRcdGlmKGZpenooaSkpIHJlc3VsdCArPVwiZml6eiwgXCI7XHJcblx0XHRlbHNlIGlmKGJ1enooaSkpIHJlc3VsdCs9XCJidXp6LCBcIjtcclxuXHRcdGVsc2UgaWYoZml6ekFuZEJ1enooaSkpIHJlc3VsdCs9XCJmaXp6QnV6eiwgXCI7XHJcblx0XHRlbHNleyByZXN1bHQgKz0gaS50b1N0cmluZygpICsgXCIsIFwiO31cclxuXHR9XHJcblx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuY29uc29sZS5sb2coYml6ekJ1enooMTAwKSk7XHJcbmxldCBwcmljZUFzU3RyaW5nID0gXCIxMC4xNWFiY1wiO1xyXG5sZXQgcHJpY2VBc051bWJlciA9IHBhcnNlRmxvYXQocHJpY2VBc1N0cmluZyk7XHJcbmNvbnNvbGUubG9nKGBTdHJpbmcgdG8gYSBudW1iZXIgdXNpbmcgJysnIG9wZXJhdG9yOiAke3R5cGVvZiBwcmljZUFzTnVtYmVyfWApO1xyXG5cclxuLy9FUzIwMTUgQU5EIFRZUEVTQ1JJUFRcclxubGV0IGRvZ0FnZTtcclxuZG9nQWdlID0gMi41O1xyXG5cclxubGV0IGRvZ05hbWUgPSBcIkhhYm9jXCI7XHJcbmNvbnNvbGUubG9nKGRvZ05hbWUpO1xyXG5jb25zb2xlLmxvZyhgVGhlIGRvZyAke2RvZ05hbWV9IGlzICR7ZG9nQWdlfSB5ZWFycyBvbGQhYCk7XHJcblxyXG5cclxubGV0IG51bWJlcjE6bnVtYmVyID0gMTtcclxubGV0IG51bWJlcjI6IG51bWJlciA9IDI7XHJcbmNvbnNvbGVcdC5sb2cobnVtYmVyMSArIG51bWJlcjIpO1xyXG5cclxuXHJcbi8vZW51bSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuZW51bSBQcm9kdWN0U3RhdHVzIHtcclxuXHRJblN0b2NrLCBPdXRPZlN0b2NrLCBVbktub3duXHJcbn1cclxuXHJcbmxldCBhdmFpbGFibGUgPSBQcm9kdWN0U3RhdHVzLk91dE9mU3RvY2s7XHJcbmNvbnNvbGUubG9nKGF2YWlsYWJsZSk7XHJcblxyXG5cclxuLy8gdmFyIG15RmFsc2UgPSBmYWxzZTtcclxuLy8gdmFyIG15VHJ1ZSA9IHRydWU7XHJcbi8vIGZ1bmN0aW9uIHRvVGVuKCkge1xyXG4vLyBcdGlmIChteVRydWUpe1xyXG4vLyBcdFx0Y29uc29sZS5sb2coMSk7XHJcbi8vIFx0fVxyXG4vLyB9XHJcbiJdfQ==