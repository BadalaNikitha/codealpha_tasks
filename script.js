function calculateAge() {

    let dobInput = document.getElementById("dob").value;
    let result = document.getElementById("result");

    if (dobInput === "") {
        result.innerHTML = "<span class='error'>Please select your Date of Birth.</span>";
        return;
    }

    let birthDate = new Date(dobInput);
    let today = new Date();

    if (birthDate > today) {
        result.innerHTML = "<span class='error'>Invalid Date of Birth.</span>";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `
        <h3>Your Age</h3>
        <p>${years} Years</p>
        <p>${months} Months</p>
        <p>${days} Days</p>
    `;
}