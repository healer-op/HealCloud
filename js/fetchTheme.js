fetch('https://raw.githubusercontent.com/LocalMiner/LocalApi/main/Theme.json')
    .then(response => {
        if (!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data => {
        var d = data.ThemeLinksday;
        var n = data.ThemeLinksnight;
        var e = data.ThemeLinksEven;
        var today = new Date();
        var time = today.getHours();
        console.log(time);
        var dl = Math.floor(Math.random() * (d.length-1)) + 0;
        var nl = Math.floor(Math.random() * (n.length-1)) + 0;
        var el = Math.floor(Math.random() * (e.length-1)) + 0;
        if (time >= 5 && time < 13) {
            console.log("day");
            document.getElementById("body").style = `background: url(${d[dl]}) no-repeat center center fixed; 
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;`
        }
        if(time >=13 && time < 19){
            console.log("evening");
            document.getElementById("body").style = `background: url(${e[el]}) no-repeat center center fixed; 
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;`
        } 
        if(time >=19 && time <=24 || time >=0 && time < 5) {
            console.log("night");
            document.getElementById("body").style = `background: url(${n[nl]}) no-repeat center center fixed; 
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;`
        }

    })
