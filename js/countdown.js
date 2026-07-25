function updateCountdown(){

    // Update this when official NEET 2027 date is announced
    const examDate = new Date("2027-05-02T09:00:00");

    const today = new Date();

    const diff = examDate - today;

    const days = Math.ceil(diff/(1000*60*60*24));

    document.getElementById("countdown").textContent =
        days + " Days Left";

}

updateCountdown();
