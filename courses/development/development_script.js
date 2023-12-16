let rating_count = 0;
let video_duration_count = 0;
let topic_count = 0;
let sub_category_count = 0;
let level_count = 0;
let language_count = 0;
let price_count = 0;
let features_count = 0;
let subtitles_count = 0;


showMostPopular();
showHideRatings();
showHideVideoDuration();
showHideTopic();
showHideSubcategory();
showHideLevel();
showHideLanguage();
showHidePrice();
showHideFeatures();
showHideSubtitles();

// showMostPopular() 
function showMostPopular() {
  document.getElementById('most_popular_container').style.display = "block";
  document.getElementById('new_container').style.display = "none";
  document.getElementById('trending_container').style.display = "none";

  document.getElementById('most_popular').style.cursor = "default";
  document.getElementById('new').style.cursor = "pointer";
  document.getElementById('trending').style.cursor = "pointer";

  document.getElementById('most_popular').style.borderBottom = "2px solid black";
  document.getElementById('new').style.borderBottom = "none";
  document.getElementById('trending').style.borderBottom = "none";
}

// showNew() 
function showNew() {
  document.getElementById('most_popular_container').style.display = "none";
  document.getElementById('new_container').style.display = "block";
  document.getElementById('trending_container').style.display = "none";

  document.getElementById('most_popular').style.cursor = "pointer";
  document.getElementById('new').style.cursor = "default";
  document.getElementById('trending').style.cursor = "pointer";

  document.getElementById('most_popular').style.borderBottom = "none";
  document.getElementById('new').style.borderBottom = "2px solid black";
  document.getElementById('trending').style.borderBottom = "none";
}

// showTrending() 
function showTrending() {
  document.getElementById('most_popular_container').style.display = "none";
  document.getElementById('new_container').style.display = "none";
  document.getElementById('trending_container').style.display = "block";

  document.getElementById('most_popular').style.cursor = "pointer";
  document.getElementById('new').style.cursor = "pointer";
  document.getElementById('trending').style.cursor = "default";

  document.getElementById('most_popular').style.borderBottom = "none";
  document.getElementById('new').style.borderBottom = "none";
  document.getElementById('trending').style.borderBottom = "2px solid black";
}

const badge_text = document.querySelectorAll('.course-badge');

// Step 2: Iterate through the selected paragraphs
badge_text.forEach(paragraph => {
  // Step 3: assigning each paragraph's text content
  const current_text = paragraph.textContent;

  // Step 4: Modify each paragraph based on the text
  if (current_text == 'Best seller') {
    paragraph.style.backgroundColor = '#eceb98';
  } else if (current_text == 'Highest rated') {
    paragraph.style.backgroundColor = '#f3ca8c';
  } else if (current_text == 'Hot & new') {
    paragraph.style.backgroundColor = '#fcbca0';
  }
  else if (current_text == 'Hot & new') {
    paragraph.style.backgroundColor = '#fcbca0';
  }
  else {
    paragraph.style.display = 'none';
  }
});

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

// showHideRating()

function showHideRatings() {
  if (rating_count == 0) {
    document.getElementById('ratings-up').style.display = "none";
    document.getElementById('ratings-down').style.display = "block";
    document.getElementById('ratings-toggle-container').style.display = "none";
    rating_count = 1;
  }
  else {
    document.getElementById('ratings-up').style.display = "block";
    document.getElementById('ratings-down').style.display = "none";
    document.getElementById('ratings-toggle-container').style.display = "block";
    rating_count = 0;
  }
}

// showHideVideoDuration
function showHideVideoDuration() {
  if (video_duration_count == 0) {
    document.getElementById('video-duration-up').style.display = "none";
    document.getElementById('video-duration-down').style.display = "block";
    document.getElementById('video-duration-toggle-container').style.display = "none";
    video_duration_count = 1;
  }
  else {
    document.getElementById('video-duration-up').style.display = "block";
    document.getElementById('video-duration-down').style.display = "none";
    document.getElementById('video-duration-toggle-container').style.display = "block";
    video_duration_count = 0;
  }
}

// showHideTopic
function showHideTopic() {
  if (topic_count == 0) {
    document.getElementById('topic-up').style.display = "none";
    document.getElementById('topic-down').style.display = "block";
    document.getElementById('topic-toggle-container').style.display = "none";
    topic_count = 1;
  }
  else {
    document.getElementById('topic-up').style.display = "block";
    document.getElementById('topic-down').style.display = "none";
    document.getElementById('topic-toggle-container').style.display = "block";
    topic_count = 0;
  }
}

// showHideSubcategory()
function showHideSubcategory() {
  if (sub_category_count == 0) {
    document.getElementById('sub-category-up').style.display = "none";
    document.getElementById('sub-category-down').style.display = "block";
    document.getElementById('sub-category-toggle-container').style.display = "none";
    sub_category_count = 1;
  }
  else {
    document.getElementById('sub-category-up').style.display = "block";
    document.getElementById('sub-category-down').style.display = "none";
    document.getElementById('sub-category-toggle-container').style.display = "block";
    sub_category_count = 0;
  }
}

// showHideLevel()
function showHideLevel() {
  if (level_count == 0) {
    document.getElementById('level-up').style.display = "none";
    document.getElementById('level-down').style.display = "block";
    document.getElementById('level-toggle-container').style.display = "none";
    level_count = 1;
  }
  else {
    document.getElementById('level-up').style.display = "block";
    document.getElementById('level-down').style.display = "none";
    document.getElementById('level-toggle-container').style.display = "block";
    level_count = 0;
  }
}

// showHideLanguage()
function showHideLanguage() {
  if (language_count == 0) {
    document.getElementById('language-up').style.display = "none";
    document.getElementById('language-down').style.display = "block";
    document.getElementById('language-toggle-container').style.display = "none";
    language_count = 1;
  }
  else {
    document.getElementById('language-up').style.display = "block";
    document.getElementById('language-down').style.display = "none";
    document.getElementById('language-toggle-container').style.display = "block";
    language_count = 0;
  }
}
// showHidePrice()
function showHidePrice() {
  if (price_count == 0) {
    document.getElementById('price-up').style.display = "none";
    document.getElementById('price-down').style.display = "block";
    document.getElementById('price-toggle-container').style.display = "none";
    price_count = 1;
  }
  else {
    document.getElementById('price-up').style.display = "block";
    document.getElementById('price-down').style.display = "none";
    document.getElementById('price-toggle-container').style.display = "block";
    price_count = 0;
  }
}
// showHideFeatures()
function showHideFeatures() {
  if (features_count == 0) {
    document.getElementById('features-up').style.display = "none";
    document.getElementById('features-down').style.display = "block";
    document.getElementById('features-toggle-container').style.display = "none";
    features_count = 1;
  }
  else {
    document.getElementById('features-up').style.display = "block";
    document.getElementById('features-down').style.display = "none";
    document.getElementById('features-toggle-container').style.display = "block";
    features_count = 0;
  }
}
// showHideSubtitles()
function showHideSubtitles() {
  if (subtitles_count == 0) {
    document.getElementById('subtitles-up').style.display = "none";
    document.getElementById('subtitles-down').style.display = "block";
    document.getElementById('subtitles-toggle-container').style.display = "none";
    subtitles_count = 1;
  }
  else {
    document.getElementById('subtitles-up').style.display = "block";
    document.getElementById('subtitles-down').style.display = "none";
    document.getElementById('subtitles-toggle-container').style.display = "block";
    subtitles_count = 0;
  }
}