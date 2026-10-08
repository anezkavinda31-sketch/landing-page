// lp.js

document.addEventListener("DOMContentLoaded", function () {
    const btnPesan = document.getElementById("btnPesan");

    if (btnPesan) {
        btnPesan.addEventListener("click", function () {
            alert("Yeay! Silakan masuk (login) terlebih dahulu untuk mulai memesan milkshake favoritmu! 🥤");
        });
    }
});