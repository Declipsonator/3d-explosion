// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }


// sleep(3200)


// var sceneEl = document.querySelector('a-scene');
// var els = sceneEl.querySelectorAll('*');
// var explosion = els[1]

// for (var i = 0; i < 1000; i++) {
//   // add smoke around circle

//   var smoke = document.createElement('a-sphere');

//   // scale based on size of explosion
//   var scale = explosion.getAttribute('scale');
//   var scaleX = scale.x * 0.1;
//   var scaleY = scale.y * 0.1;
//   var scaleZ = scale.z * 0.1;
 
//   // position based on size of explosion
//   var position = explosion.getAttribute('position');
//   var positionX = position.x + (Math.random() * scaleX * 10);
//   var positionY = position.y + (Math.random() * scaleY * 10);
//   var positionZ = position.z + (Math.random() * scaleZ * 10);

//   // random grayscale color
//   var color = randomGreyHex();
//   smoke.setAttribute('position.x', positionX);
//   smoke.setAttribute('position.y', positionY);
//   smoke.setAttribute('position.z', positionZ);
//   smoke.setAttribute('scale.x', 2)
//   smoke.setAttribute('scale.y', 2)
//   smoke.setAttribute('scale.z', 2)
//   smoke.setAttribute('color', color);
//   smoke.setAttribute('animation', 'property: scale; to: 0 0 0; dur: 3000; easing: easeOutElastic')
//   console.log(smoke)
//   sceneEl.appendChild(smoke);

//   sleep(1000)

// }




// function randomGreyHex() {
//   var v = (Math.random()*(256)|0).toString(16);//bitwise OR. Gives value in the range 0-255 which is then converted to base 16 (hex).
//   return "#" + v + v + v;
// }