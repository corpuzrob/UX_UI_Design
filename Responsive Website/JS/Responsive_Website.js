// anime({
//     targets: '.Ruthless',
//     opacity: [1, 0],
//     easing: 'easeInExpo',
//     duration: 2000,
//     delay: 0
// });

anime({
    targets: '.Ruthless',
    opacity: {
        value: 0,
        delay: -1000,
        duration: 2000
        // easing: 'easeOutExpo'
    }
});

anime({
    targets: '.Ruthless',
    opacity: {
        value: 1,
        delay: 1000,
        duration: 1500,
        easing: 'easeOutExpo'
    }
});

anime({
    targets: '.RuthMORE',
    translateX: {
        value: -2000,
        delay: 0
    },
    duration: 0,
    easing: 'easeInOutSine',
});

anime({
    targets: '.RuthMORE',
    translateX: {
        value: 00,
        delay: 2000 
    },
    duration: 1000,
    easing: 'spring(1, 100, 15, 0)',
});

// anime({
//     targets: '.RuthMORE',
//     opacity: {
//         value: 0,
//         delay: 0
//     }
// });

// anime({
//     targets: '.RuthMORE',
//     opacity: {
//         value: 100,
//         delay: 1000
//     }
// });

var title = document.querySelector('.RuthMORE');

var mouseHoverAnimation = () => {
    anime({
        targets: title,
        translateX: {
            value: 50,
            delay: 500
        },
        scale: {
            delay: 500,
            value: 1.1
        },
        // color: "#D94C92",
        duration: 500
    })
}

var mouseOutAnimation = () => {
    anime({
        targets: title,
        translateX: {
            value: 0,
            delay: 500
        },
        scale: {
            delay: 500,
            value: 1
        },
        duration: 500
    })
}

title.addEventListener('mouseover', mouseHoverAnimation)
title.addEventListener('mouseout', mouseOutAnimation)

anime({
    targets: '.get-started',
    translateX: {
        value: -2000,
        delay: 0
    },
    duration: 0,
    easing: 'easeInOutSine',
});

anime({
    targets: '.get-started',
    translateX: {
        value: 00,
        delay: 3000,
    },
    duration: 1000,
    easing: 'spring(1, 100, 15, 0)',
});

anime({
    targets: '.col-anime',
    translateX: {
        value: -2000,
        delay: 0
    },
    duration: 0,
    easing: 'easeInOutSine',
});

anime({
    targets: '.col-anime',
    translateX: {
        value: 00,
        delay: anime.stagger(100, {start: 3000})
    },
    duration: 1000,
    easing: 'spring(1, 100, 15, 0)',
});

// anime({
//     targets: '.banner',
//     height: '100%',
//     // delay: 0
//     duration: 1000
// })

// anime({
//     targets: '.banner',
//     height: '75%',
//     delay: 3000,
//     duration: 100,
//     // easing: 'easeInOutSine'
// })
