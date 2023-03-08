ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.760824, 37.615443],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 17
    });


var myPlacemark = new ymaps.Placemark([55.760824, 37.615443], {}, {
iconLayout: 'default#image',
iconImageHref: 'img/marker-map.svg',
iconImageSize: [30, 42],
iconImageOffset: [-3, -42]
});

// Размещение геообъекта на карте.

myMap.geoObjects.add(myPlacemark);
}