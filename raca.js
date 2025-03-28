// Hàm hiển thị popup sau 5 giây
window.onload = function () {
  setTimeout(function () {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }, 1000);
};

// Hàm đóng popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// Đóng popup khi click vào overlay (nền mờ)
document.getElementById("overlay").addEventListener("click", closePopup);
