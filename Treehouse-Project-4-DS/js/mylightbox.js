var thumb;
var title;
var image;
var caption;
var lightbox;

var imageSlides = [
  {
    thumb : '01.jpg',
    image : '01.jpg',
    title : 'Hay Bales',
    caption : 'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'
  },
  {
    thumb : '02.jpg',
    image : '02.jpg',
    title : 'Lake',
    caption : 'The lake was so calm today. We had a great view of the snow on the mountains from here.'
  },
  {
    thumb : '03.jpg',
    image : '03.jpg',
    title : 'Canyon',
    caption : 'I hiked to the top of the mountain and got this picture of the canyon and trees below.'
  },
  {
    thumb : '04.jpg',
    image : '04.jpg',
    title : 'Iceberg',
    caption : 'It was amazing to see an iceberg up close, it was so cold but didn’t snow today.'
  },
  {
    thumb : '05.jpg',
    image : '05.jpg',
    title : 'Desert',
    caption : 'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.'
  },
  {
    thumb : '06.jpg',
    image : '06.jpg',
    title : 'Fall',
    caption : 'Fall is coming, I love when the leaves on the trees start to change color.'
  },
  {
    thumb : '07.jpg',
    image : '07.jpg',
    title : 'Plantation',
    caption : 'I drove past this plantation yesterday, everything is so green!'
  },
  {
    thumb : '08.jpg',
    image : '08.jpg',
    title : 'Dunes',
    caption : 'My summer vacation to the Oregon Coast. I love the sandy dunes!'
  },
  {
    thumb : '09.jpg',
    image : '09.jpg',
    title : 'Countryside Lane',
    caption : 'We enjoyed a quiet stroll down this countryside lane.'
  },
  {
    thumb : '10.jpg',
    image : '10.jpg',
    title : 'Sunset',
    caption : 'Sunset at the coast! The sky turned a lovely shade of orange.'
  },
  {
    thumb : '11.jpg',
    image : '11.jpg',
    title : 'Cave',
    caption : 'I did a tour of a cave today and the view of the landscape below was breathtaking.'
  },
  {
    thumb : '12.jpg',
    image : '12.jpg',
    title : 'Bluebells',
    caption : 'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.'
  }
];


function print(message) {

  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

var html = '';
var customHTML = '';


for (var i = 0; i < imageSlides.length; i += 1) {
  thumb = imageSlides[i].thumb;
  image = imageSlides[i].image;
  title = imageSlides[i].title;
  caption = imageSlides[i].caption;

  html = '<div id="slide"><a href="img/photos/' +
          image +
          '" data-lightbox="gallery" data-title="' +
          caption +
          '" data-alt="' +
          title +
          '"><img src="img/photos/thumbnails/' +
          thumb +
          '" alt="' +
          title +
          '" /></a></div><!-- slide -->';

  customHTML += html;

  print('<div class="slides">' + customHTML + '</div>');
}


lightbox.option({
  'alwaysShowNavOnTouchDevices': true,
});



$(document).ready(function () {

    $("#searchfor").keyup(function(){


        var filter = $(this).val();


        $("#slide a").each(function(){


            var title = $(this).attr('data-title').search(new RegExp(filter, "i"));
            var alt = $(this).attr('data-alt').search(new RegExp(filter, "i"));
            if ( alt + title < 0) {
                $(this).parent().fadeOut();


            } else {
                $(this).parent().show();
            }
        });
     });
 });
