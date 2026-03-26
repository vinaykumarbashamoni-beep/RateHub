function submitReview() {
    const place = document.getElementById("place").value;

    const review = {
        food: Number(document.getElementById("food").value),
        clean: Number(document.getElementById("clean").value),
        water: Number(document.getElementById("water").value),
        wifi: Number(document.getElementById("wifi").value),
        text: document.getElementById("review").value
    };

    let reviews = JSON.parse(localStorage.getItem(place)) || [];
    reviews.push(review);
    localStorage.setItem(place, JSON.stringify(reviews));

    alert("Review submitted!");
}

function getReviews() {
    const place = document.getElementById("searchPlace").value;
    let reviews = JSON.parse(localStorage.getItem(place)) || [];

    const div = document.getElementById("reviews");
    div.innerHTML = "";

    reviews.forEach(r => {
        let overall = (r.food + r.clean + r.water + r.wifi) / 4;

        div.innerHTML += `
            <div class="card">
                <h3>${place}</h3>
                <p>⭐ Overall: ${overall.toFixed(1)}</p>
                <p>Food: ${r.food} | Clean: ${r.clean} | Water: ${r.water} | WiFi: ${r.wifi}</p>
                <p>${r.text}</p>
                <p><b>Anonymous</b></p>
            </div>
        `;
    });
}
