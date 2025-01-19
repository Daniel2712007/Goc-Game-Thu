document.addEventListener("DOMContentLoaded", function () {
  // Lấy tất cả các phần tử có lớp .set-bg
  const setBgElements = document.querySelectorAll(".set-bg");
  setBgElements.forEach((element) => {
    const bg = element.getAttribute("data-setbg");
    if (bg) {
      // Đặt ảnh nền từ thuộc tính data-setbg
      element.style.backgroundImage = `url(${bg})`;
      element.style.backgroundSize = "cover"; // Ảnh lấp đầy phần tử
      element.style.backgroundPosition = "center"; // Hiển thị chính giữa
      element.style.backgroundRepeat = "no-repeat"; // Không lặp ảnh
    }
  });
});
