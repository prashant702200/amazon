function calculateSum() {
    let n = document.getElementById("num").value;
    let sum = 0;

    if (n === "" || n < 1) {
        document.getElementById("result").innerText = "Please enter a valid number!";
        return;
    }

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    document.getElementById("result").innerText = "Sum of even numbers = " + sum;
}