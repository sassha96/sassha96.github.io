var clicks = 15;

let likeCounter = document.getElementById("clicks").innerHTML = clicks;

likeCounter.addEventListener('click', () => {
    clicks += 1;
    document.getElementById("clicks").innerHTML = this.clicks;
    like - counter.addClass('liked');
})
