/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import "controllers"

require("axios");
require("trix");
require("@rails/actiontext");
require("@rails/activestorage");
require("react-countdown-now");
require("react-infinite-scroller")
require("jquery-parallax.js")

$( document ).ready(function() {
  require("./other/nav_bar_actions");

  var controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
          triggerElement: "#secondSlide",
          offset: 50 // move trigger to center of element
        })
        .setClassToggle("#reveal1", "visible") // add class to reveal
        .reverse(false)
        .addTo(controller);

  var revealElements = document.getElementsByClassName("digit");
  for (var i=0; i<revealElements.length; i++) {
    new ScrollMagic.Scene({
              triggerElement: revealElements[i],
              offset: 50,
              triggerHook: 0.9,
            })
            .setClassToggle(revealElements[i], "visible")
            .reverse(false)
            .addTo(controller);
  };
});
