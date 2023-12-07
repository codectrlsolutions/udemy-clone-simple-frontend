const swiper = new Swiper('.swiper',
  {
    // Optional parameters
    // direction: 'vertical',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

showPython();

// showPython() 
function showPython() {
  document.getElementById('python-section').style.display = "block";
  document.getElementById('excel-section').style.display = "none";
  document.getElementById('web-development-section').style.display = "none";
  document.getElementById('javascript-section').style.display = "none";
  document.getElementById('data-science-section').style.display = "none";
  document.getElementById('amazon-aws-section').style.display = "none";
  document.getElementById('drawing-section').style.display = "none";

  document.getElementById('python').style.cursor = "default";
  document.getElementById('excel').style.cursor = "pointer";
  document.getElementById('web-development').style.cursor = "pointer";
  document.getElementById('javascript').style.cursor = "pointer";
  document.getElementById('data-science').style.cursor = "pointer";
  document.getElementById('amazon-aws').style.cursor = "pointer";
  document.getElementById('drawing').style.cursor = "pointer";
}

// showExcel() 
function showExcel() {
  document.getElementById('python-section').style.display = "none";
  document.getElementById('excel-section').style.display = "block";
  document.getElementById('web-development-section').style.display = "none";
  document.getElementById('javascript-section').style.display = "none";
  document.getElementById('data-science-section').style.display = "none";
  document.getElementById('amazon-aws-section').style.display = "none";
  document.getElementById('drawing-section').style.display = "none";

  document.getElementById('python').style.cursor = "pointer";
  document.getElementById('excel').style.cursor = "default";
  document.getElementById('web-development').style.cursor = "pointer";
  document.getElementById('javascript').style.cursor = "pointer";
  document.getElementById('data-science').style.cursor = "pointer";
  document.getElementById('amazon-aws').style.cursor = "pointer";
  document.getElementById('drawing').style.cursor = "pointer";

}

// showWebDevelopment() 
function showWebDevelopment() {
  document.getElementById('python-section').style.display = "none";
  document.getElementById('excel-section').style.display = "none";
  document.getElementById('web-development-section').style.display = "block";
  document.getElementById('javascript-section').style.display = "none";
  document.getElementById('data-science-section').style.display = "none";
  document.getElementById('amazon-aws-section').style.display = "none";
  document.getElementById('drawing-section').style.display = "none";

  document.getElementById('python').style.cursor = "pointer";
  document.getElementById('excel').style.cursor = "pointer";
  document.getElementById('web-development').style.cursor = "default";
  document.getElementById('javascript').style.cursor = "pointer";
  document.getElementById('data-science').style.cursor = "pointer";
  document.getElementById('amazon-aws').style.cursor = "pointer";
  document.getElementById('drawing').style.cursor = "pointer";

}

// showJavaScript() 
function showJavaScript() {
  document.getElementById('python-section').style.display = "none";
  document.getElementById('excel-section').style.display = "none";
  document.getElementById('web-development-section').style.display = "none";
  document.getElementById('javascript-section').style.display = "block";
  document.getElementById('data-science-section').style.display = "none";
  document.getElementById('amazon-aws-section').style.display = "none";
  document.getElementById('drawing-section').style.display = "none";

  document.getElementById('python').style.cursor = "pointer";
  document.getElementById('excel').style.cursor = "pointer";
  document.getElementById('web-development').style.cursor = "pointer";
  document.getElementById('javascript').style.cursor = "default";
  document.getElementById('data-science').style.cursor = "pointer";
  document.getElementById('amazon-aws').style.cursor = "pointer";
  document.getElementById('drawing').style.cursor = "pointer";
}

// showDataScience() 
function showDataScience() {
  document.getElementById('python-section').style.display = "none";
  document.getElementById('excel-section').style.display = "none";
  document.getElementById('web-development-section').style.display = "none";
  document.getElementById('javascript-section').style.display = "none";
  document.getElementById('data-science-section').style.display = "block";
  document.getElementById('amazon-aws-section').style.display = "none";
  document.getElementById('drawing-section').style.display = "none";

  document.getElementById('python').style.cursor = "pointer";
  document.getElementById('excel').style.cursor = "pointer";
  document.getElementById('web-development').style.cursor = "pointer";
  document.getElementById('javascript').style.cursor = "pointer";
  document.getElementById('data-science').style.cursor = "default";
  document.getElementById('amazon-aws').style.cursor = "pointer";
  document.getElementById('drawing').style.cursor = "pointer";
}

// showAmazonAWS() 
function showAmazonAWS() {
  document.getElementById('python-section').style.display = "none";
  document.getElementById('excel-section').style.display = "none";
  document.getElementById('web-development-section').style.display = "none";
  document.getElementById('javascript-section').style.display = "none";
  document.getElementById('data-science-section').style.display = "none";
  document.getElementById('amazon-aws-section').style.display = "block";
  document.getElementById('drawing-section').style.display = "none";

  document.getElementById('python').style.cursor = "pointer";
  document.getElementById('excel').style.cursor = "pointer";
  document.getElementById('web-development').style.cursor = "pointer";
  document.getElementById('javascript').style.cursor = "pointer";
  document.getElementById('data-science').style.cursor = "pointer";
  document.getElementById('amazon-aws').style.cursor = "default";
  document.getElementById('drawing').style.cursor = "pointer";
}

// showDrawing() 
function showDrawing() {
  document.getElementById('python-section').style.display = "none";
  document.getElementById('excel-section').style.display = "none";
  document.getElementById('web-development-section').style.display = "none";
  document.getElementById('javascript-section').style.display = "none";
  document.getElementById('data-science-section').style.display = "none";
  document.getElementById('amazon-aws-section').style.display = "none";
  document.getElementById('drawing-section').style.display = "block";

  document.getElementById('python').style.cursor = "pointer";
  document.getElementById('excel').style.cursor = "pointer";
  document.getElementById('web-development').style.cursor = "pointer";
  document.getElementById('javascript').style.cursor = "pointer";
  document.getElementById('data-science').style.cursor = "pointer";
  document.getElementById('amazon-aws').style.cursor = "pointer";
  document.getElementById('drawing').style.cursor = "default";
}