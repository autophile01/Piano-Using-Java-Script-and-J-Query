$("body").keypress(function (event) {
    var keyPress = (event.key);
    makeSound(keyPress);
    keyLight(keyPress);
    bbkeyLight(keyPress);
});

$(".button").click(function () {
    var keyClick = (this.innerHTML);
    console.log(keyClick);
    makeSound(keyClick);
    keyLight(keyClick);
    bbkeyLight(keyClick);
})

function makeSound(key) {
    switch (key) {
        case "a":
            var audio = new Audio("sounds/key01.mp3");
            audio.play();
            break;
        case "b":
            var audio = new Audio("sounds/key02.mp3");
            audio.play();
            break;
        case "c":
            var audio = new Audio("sounds/key03.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/key04.mp3");
            audio.play();
            break;
        case "e":
            var audio = new Audio("sounds/key05.mp3");
            audio.play();
            break;
        case "f":
            var audio = new Audio("sounds/key06.mp3");
            audio.play();
            break;
        case "g":
            var audio = new Audio("sounds/key07.mp3");
            audio.play();
            break;
        case "h":
            var audio = new Audio("sounds/key08.mp3");
            audio.play();
            break;
        case "i":
            var audio = new Audio("sounds/key09.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/key10.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/key11.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/key12.mp3");
            audio.play();
            break;
        case "m":
            var audio = new Audio("sounds/key13.mp3");
            audio.play();
            break;
        case "n":
            var audio = new Audio("sounds/key14.mp3");
            audio.play();
            break;
        case "0":
            var audio = new Audio("sounds/key15.mp3");
            audio.play();
            break;
        case "1":
            var audio = new Audio("sounds/key16.mp3");
            audio.play();
            break;
        case "2":
            var audio = new Audio("sounds/key17.mp3");
            audio.play();
            break;
        case "3":
            var audio = new Audio("sounds/key18.mp3");
            audio.play();
            break;
        case "4":
            var audio = new Audio("sounds/key19.mp3");
            audio.play();
            break;
        case "5":
            var audio = new Audio("sounds/key20.mp3");
            audio.play();
            break;
        case "6":
            var audio = new Audio("sounds/key21.mp3");
            audio.play();
            break;
        case "7":
            var audio = new Audio("sounds/key22.mp3");
            audio.play();
            break;
        case "8":
            var audio = new Audio("sounds/key23.mp3");
            audio.play();
            break;
        case "9":
            var audio = new Audio("sounds/key24.mp3");
            audio.play();
            break;
    }

}

function keyLight(key) {
    $("#" + key).addClass("pressed");

    timeout = setTimeout(function () {
        $("#" + key).removeClass("pressed");

    }, 300);

}

function bbkeyLight(key) {
    $("#" + key + "-bb").addClass("bbpressed");
    timeout = setTimeout(function () {
        $("#" + key + "-bb").removeClass("bbpressed");
    }, 300);
}

$("body").mouseover(function random() {
    var array = ["green", "red", "yellow", "blue", "pink", "white", "purple", "aqua", "golden"];
    var randomNumber = Math.floor((Math.random()) * 9);
    $("body").mouseover(function () {
        $("h1").css("color", array[randomNumber]);

        timeout = setTimeout(function () {
            $("h1").css("color", "white");
        }, 300);

    });
})
random();