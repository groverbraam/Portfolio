//////////// Day Night Mode
$(() => {
  $( "#dayNight-outline" ).on("click", () => {
      if( $("body").hasClass("dark-mode")) {
        $("body").removeClass("dark-mode");
        $("#dayNight-outline").removeAttr("name");
        $("#dayNight-outline").attr("name", "moon-outline");
      } else {
          $("body").addClass("dark-mode");
          $("#dayNight-outline").removeAttr("name");
          $("#dayNight-outline").attr("name", "sunny-outline");
        }
  });
////////////// Carousel
  currentImgIndex = 0;
  numOfImages = $('.carousel-images').children().length - 1
  $('.next').on('click', () => {
      $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');
      if(currentImgIndex < numOfImages) {
        currentImgIndex++
      } else {
        currentImgIndex = 0
      }
      $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
      })

      $('.previous').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');
        if(currentImgIndex > 0) {
          currentImgIndex--
        } else {
          currentImgIndex = numOfImages
        }
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block');
  })
////////////// Alert
  const $open = $('#submit')
  const $alert = $('#alert')
  const $close = $('#close')

  const openModal = () => {
    $alert.css('display', 'flex')
  }

  const closeModal = () => {
    $alert.css('display', 'none');
    location.reload();
  }

  $open.on('click', openModal)
  $close.on('click', closeModal)



});
