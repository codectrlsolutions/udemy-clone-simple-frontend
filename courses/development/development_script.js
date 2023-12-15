let rating_count = 0;
let video_duration = 0;

showMostPopular();
showHideRating();
showHideVideoDuration();

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
    } else if(current_text == 'Hot & new'){
      paragraph.style.backgroundColor = '#fcbca0'; 
    }
    else if(current_text == 'Hot & new'){
        paragraph.style.backgroundColor = '#fcbca0'; 
      }
      else{
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

  function showHideRating(){
    if(rating_count == 0){
      document.getElementById('rating-up').style.display = "none";
      document.getElementById('rating-down').style.display = "block";
      document.getElementById('rating-toggle-container').style.display = "none";
      rating_count = 1;
    }
    else{
      document.getElementById('rating-up').style.display = "block";
      document.getElementById('rating-down').style.display = "none";
      document.getElementById('rating-toggle-container').style.display = "block";
      rating_count = 0;
    }
  }

  // showHideVideoDuration
  function showHideVideoDuration(){
    if(video_duration == 0){
      document.getElementById('video-duration-up').style.display = "none";
      document.getElementById('video-duration-down').style.display = "block";
      document.getElementById('video-duration-toggle-container').style.display = "none";
      video_duration = 1;
    }
    else{
      document.getElementById('video-duration-up').style.display = "block";
      document.getElementById('video-duration-down').style.display = "none";
      document.getElementById('video-duration-toggle-container').style.display = "block";
      video_duration = 0;
    }
  }