function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    var num4 = parseFloat(document.getElementById("num4").value);
    var num5 = parseFloat(document.getElementById("num5").value);
    var num6 = parseFloat(document.getElementById("num6").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5) || isNaN(num6)) {
        Swal.fire("Error", "Please enter valid numbers in all fields", "error");
        return;
    }

    var sumOfFirstThree = num1 + num2 + num3;
    var quotientOfNextThree = (num4 + num5 + num6) / 3;

    var result1 = (sumOfFirstThree - quotientOfNextThree).toFixed(2);
    var result2 = (sumOfFirstThree + quotientOfNextThree).toFixed(2);


    Swal.fire({
        title: 'Result',
        html: `Result 1: ${result1}<br>Result 2: ${result2}`,
        icon: 'success',
        timer: 4000
    });

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
    document.getElementById("num4").value = "";
    document.getElementById("num5").value = "";
    document.getElementById("num6").value = "";
}
document.getElementById("calculate").addEventListener("click", calculate);
