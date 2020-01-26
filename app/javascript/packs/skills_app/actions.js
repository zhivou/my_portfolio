console.log("Actions successfuly loaded!")

export let getMessage = () => console.log('Hello World');

export let initScrollMagick = (id) => {
  // init controller
  var controller = new ScrollMagic.Controller();

  // create a scene
  new ScrollMagic.Scene({
  		duration: 100,	// the scene should last for a scroll distance of 100px
  		offset: 50	// start this scene after scrolling for 50px
  	})
  	.setPin(`#${id}`) // pins the element for the the scene's duration
  	.addTo(controller); // assign the scene to the controller
}
