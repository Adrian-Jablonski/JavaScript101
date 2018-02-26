var billAmount;
var serviceLevel;

$("#submit").on("click", function() {
    var tipPerc;
    billAmount = document.getElementById("bill_amount").value;
    serviceLevel = (document.getElementById("service_level").value).toLowerCase();
    
    if (serviceLevel === "good") {
        tipPerc = .20;
    }
    else if (serviceLevel === "fair") {
        tipPerc = .15;
    }
    else if (serviceLevel === "bad") {
        tipPerc = .10;
    }    
    else {
        tipPerc = "Invalid"
    };
    
    var totalBill = billAmount * (1 + tipPerc);
    
    var tipAmount = tipPerc * billAmount;
    
    if (tipPerc === "Invalid") {
        $("#tip_amount").text("Invalid service entry. Enter Good, fair, or bad");
    }
    else {
        $("#tip_amount").text("Tip Amount: $" + tipAmount);
        $("#total_bill").text("Total Bill: $" + totalBill);
    }
        
});
    


