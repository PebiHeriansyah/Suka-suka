function nextPage() {
    window.location.href = "yes.html"; 
}

function moveButton() {
    let noButton = document.getElementById("noButton");
    
    // Mendapatkan ukuran jendela browser
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    // Menghasilkan posisi acak dalam batas layar
    let newX = Math.random() * (windowWidth - noButton.clientWidth);
    let newY = Math.random() * (windowHeight - noButton.clientHeight);

    // Mengubah posisi tombol
    noButton.style.position = "absolute";
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}
