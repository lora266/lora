// "Buy Now" Butonu
document.getElementById("buy-button").addEventListener("click", () => {
  window.location.href = "xxx"; // Geçici bağlantı
});

// "Share on X" Butonu
document.getElementById("share-button").addEventListener("click", () => {
  window.open(
    "https://twitter.com/intent/tweet?text=Check+out+Loraseason!&url=https://x.com/lorasolanaa",
    "_blank"
  );
});
