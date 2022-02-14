
// anime({
//     targets: '.go_deep',
//     opacity: {
//         value: 0,
//         delay: -1000,
//         duration: 2000
//     }
// });

// anime({
//     targets: '.go_deep',
//     opacity: {
//         value: 1,
//         delay: 1000,
//         duration: 1500,
//         easing: 'easeOutExpo'
//     }
// });

anime({
    targets: '.go_deep',
    translateY: {
        value: -2000,
        delay: -1000,
    },
    duration: 0,
    easing: 'easeInOutSine',
});

anime({
    targets: '.go_deep',
    translateY: {
        value: 00,
        delay: 500,
},
    duration: 1000,
    easing: 'spring(1, 100, 15, 0)',
});

anime({
    targets: '.go_grand',
    translateX: {
        value: -3000,
        delay: 0
    },
    duration: 0,
    easing: 'easeInOutSine',
});

anime({
    targets: '.go_grand',
    translateX: {
        value: 00,
        delay: 1500 
    },
    duration: 1000,
    easing: 'spring(1, 100, 15, 0)',
});

anime({
    targets: '.navbar',
    translateY: {
        value: -2000,
        delay: 0
    },
    duration: 0,
    easing: 'easeInOutSine',
});

anime({
    targets: '.navbar',
    translateY: {
        value: 00,
        delay: 2500,
    },
    duration: 1000,
    easing: 'spring(1, 100, 15, 0)',
});

anime({
    targets: '.next-step',
    translateY: {
        value: 2000,
        delay: 0
    },
    duration: 0,
    easing: 'easeInOutSine',
});

anime({
    targets: '.next-step',
    translateY: {
        value: 00,
        delay: 2500,
    },
    duration: 1000,
    easing: 'spring(1, 100, 15, 0)',
});

var x = document.getElementById("myAudio"); 
var myimgobj = document.images["jsbutton"];

function playAudio() { 
  x.play(); 
} 
// function playAudio() { 
//   x.play(); 
// } 

// function pauseAudio() { 
//   x.pause(); 
// } 

// function myFunction() {
//     alert("Hello! I am an alert box!");
//   }

//   function playMyAudio(){
//     document.getElementsByClassName("btn").play();
//   }



//   function play() {
//     var audio = document.getElementById("audio");
//     audio.play();
//   }


{/* <input type="button" value="PLAY" onclick="play()">
<audio id="audio" src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"></audio> */}

// function play(){
//     var audio = document.getElementById("audio");
//     // audio.setAttribute('src', sound);
//     audio.play();
// }


// anime({
//     targets: '.bg-light',
//     opacity: {
//         value: 0,
//         delay: -1000,
//         duration: 2000
//     }
// });

// anime({
//     targets: '.navbar.background-color',
//     opacity: {
//         value: 0,
//         delay: 4000,
//         duration: 1500,
//         easing: 'easeOutExpo'
//     }
// });

// anime({
//     targets: '.css-prop-demo .bg-light',
//     backgroundColor: '#FFF',
//     easing: 'easeInOutQuad'
//   });


// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.opacity = "100%";
//   } else {
//     document.getElementById("navbar").style.color = "green";
//   }
// }