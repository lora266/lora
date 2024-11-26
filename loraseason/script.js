// "Buy Now" Butonu İşlevi
document.querySelector(".buy-btn").addEventListener("click", () => {
  window.location.href = "xxx"; // Geçici link
});

// "Share on X" Butonu İşlevi
document.querySelector(".share-btn").addEventListener("click", () => {
  window.open(
    "https://twitter.com/intent/tweet?text=Check+out+Loraseason!&url=https://x.com/lorasolanaa",
    "_blank"
  );
});
