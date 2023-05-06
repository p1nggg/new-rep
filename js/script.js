const images = document.querySelectorAll('.carusel__container .carusel__slide .carusel__img')
const sliderLine = document.querySelector('.carusel__slide');
let count = 0;
let width;
let first = document.querySelector('.slide__hr1');
let second = document.querySelector('.slide__hr2');
let third = document.querySelector('.slide__hr3');

const rollSlider = () => {
    if(count == 0){
        first.style.backgroundColor = "white";
        second.style.backgroundColor = "#404040";
        third.style.backgroundColor = "#404040";
    }
    if(count == 1){
        second.style.backgroundColor = "white";
        first.style.backgroundColor = "#404040";
        third.style.backgroundColor = "#404040";
    }
    if(count == 2){
        third.style.backgroundColor = "white";
        first.style.backgroundColor = "#404040";
        second.style.backgroundColor = "#404040";
    }
    sliderLine.style.transform = 'translate(-'+ count * width + 'px)';
};

const init = () => {
    console.log('init')
    width = document.querySelector('.carusel__container').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(img => {
        img.style.width = width + 'px';
        img.style.height = 'auto';
    });
    rollSlider();
}
init();
window.addEventListener('resize', init) ;


$('.btn-next').on('click', () => {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});
$('.btn-prev').on('click', () => {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});
$('.slide__hr1').on('click', () => {
    count = 0;
    rollSlider();
});
$('.slide__hr2').on('click', () => {
    count = 1;
    rollSlider();
});
$('.slide__hr3').on('click', () => {
    count = 2;
    rollSlider();
});

let latitude = 55.94649;
let longitude = 54.72934;

        let map = new ol.Map({
            target: 'map',
            controls: [],
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
        
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([latitude,longitude]),
                zoom: 18
            })
        })
