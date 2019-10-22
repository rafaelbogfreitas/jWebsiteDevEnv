$(document).ready(function(){
    let data = {
        "songs":[
            {
                "songTitle":"Get Out",
                "dataSource":"songs/getOut.mp3",
                "src":"images/play.svg",
                "alt":"play button"
            },
            {
                "songTitle":"Closer",
                "dataSource":"songs/closer.mp3",
                "src":"images/play.svg",
                "alt":"play button"
            },
            {
                "songTitle":"Baby Baby Baby",
                "dataSource":"songs/babyBabyBaby.mp3",
                "src":"images/play.svg",
                "alt":"play button"
            },
            {
                "songTitle":"Dear",
                "dataSource":"songs/dear.mp3",
                "src":"images/play.svg",
                "alt":"play button"
            },
        ]
    };

    let content = $('#template').html();

    let result = Mustache.render(content, data);

    $('#template-container').html(result);
});