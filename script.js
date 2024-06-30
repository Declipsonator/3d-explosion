function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  await sleep(3200)


  var sceneEl = document.querySelector('a-scene');
  var els = sceneEl.querySelectorAll('*');
  var explosion = els[1]

  for (var i = 0; i < 1000; i++) {
    var els = sceneEl.querySelectorAll('*');

    //remove spheres that don't have any scale
    for (var j = 0; j < els.length; j++)
      {
        if (els[j].hasAttribute('scale'))
        {
          if (els[j].getAttribute('scale').x == 0 && els[j].getAttribute('scale').y == 0 && els[j].getAttribute('scale').z == 0)
          {
            els[j].remove();
          }
        }
      }

    // add smoke around circle

    var smoke = document.createElement('a-sphere');

    // scale based on size of explosion
    var scale = explosion.getAttribute('scale');
    var scaleX = scale.x * 0.3 * random(0.3, 0.8);
    var scaleY = scale.y * 0.3 * Math.random();
    var scaleZ = scale.z * 0.3 * Math.random();

    // position based on size of explosion
    var position = explosion.getAttribute('position');
    var positionOnSphere = RandomPointOnSphere(position.x, position.y, position.z, scale.x)

    // random grayscale color
    var color = randomGreyHex();
    smoke.object3D.position.set(positionOnSphere.x, positionOnSphere.y, positionOnSphere.z)
    smoke.object3D.scale.set(scaleX, scaleX, scaleX)
    smoke.setAttribute('material', 'src', 'smoke.mp4')
    smoke.setAttribute('animation', 'property: scale; to: 0 0 0; dur: 1000; easing: ')
    smoke.object3D.visible = true;
    sceneEl.appendChild(smoke);

    await sleep(100)

  }
}



function randomGreyHex() {
  var v = (Math.random() * (256) | 0).toString(16);//bitwise OR. Gives value in the range 0-255 which is then converted to base 16 (hex).
  return "#" + v + v + v;
}



function random(min, max) {
    return Math.random() * (max - min) + min;
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function RandomPointOnSphere(centerX, centerY, centerZ, radius) {
    var phi = 2.0 * Math.PI * Math.random();
    var csth = 1.0 - 2.0 * Math.random();
    var snth = Math.sqrt(1.0 - csth * csth);

    var dx = radius * snth * Math.cos(phi);
    var dy = radius * snth * Math.sin(phi);
    var dz = radius * csth;

    return {
        x: centerX + dx,
        y: centerY + dy,
        z: centerZ + dz
    };
}





run()