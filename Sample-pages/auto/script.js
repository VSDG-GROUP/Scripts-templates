
// variables     
var url;
var carYear;
var carMake;
var carModel;
var id;
var car = 0;
const ul1 = "ul"
const li1 = "li"
var progressBar;





function onLoad(val, val2) {
    progressBar = new ProgressBar.Circle('#progress', {
        color: '#2f9ee9',
        strokeWidth: 8,
        duration: 2000, // milliseconds
        easing: 'easeInOut'
    });
    progressBar.animate(val); // percent
};





function back(vali1,vali2){
alert(vali1)
    var io = document.createElement("li")
    io.textContent = "Back"
    io.id = "back"
    io.addEventListener("click", function () {

        window[vali1]();
        document.getElementById(vali2).remove()
        
    })
    document.getElementById(vali2).appendChild(io)



}






function title(message){

    document.getElementById("title").innerHTML = message;

}

var s = document.createElement("p")
s.id = "title"
s.textContent = "Do you have car insurance?";
document.getElementById("form").appendChild(s)
onLoad(0.0)
function input(val) {
    // document.getElementById("inner").innerHTML = val
    var input = document.createElement("input")
    input.id = val
    input.name = val
    input.innerHTML = val
    input.type = "hidden"
    input.value = val
    input.textContent = val
    document.getElementById("form").append(input)
}







function inSured() {
    document.getElementById("inner").innerHTML = "<p id='start'>Start</p>"
    var i = document.createElement("ul")
    i.id = "ins";
    document.getElementById("form").appendChild(i);
    var li = document.createElement("li");
    li.id - "yes";
    li.innerHTML = "Yes";
    li.addEventListener("click", function () {
        input(this.id);
        insuredYes();
        this.parentNode.remove()
    })

    document.getElementById("ins").appendChild(li);
    var lin = document.createElement("li");
    lin.id = "no";
    lin.innerHTML = "No"
    lin.addEventListener("click",function(){
        drivers()
        this.parentNode.remove()
        input(this.id)
    })
    document.getElementById("ins").appendChild(lin);
}






function insuredYes() {
    progressBar.animate(0.01)
    document.getElementById("inner").innerHTML = "<p id='start'>1%</p>"
    title("Whos is your current Insurer?")
    var ul = document.createElement("ul")
    ul.id = "comp";
    document.getElementById("form").append(ul);
    var cd = ['allstate',
        'farmers',
        'geico',
        'liberty mutual',
        'nationwide',
        'progressive',
        'travelers',
        'usaa',
    ]
    for (i = 0; i < cd.length; i++) {
        var li = document.createElement("li");
        li.id = cd[i];
        li.innerHTML = cd[i];
        li.addEventListener("click", function () {
            input(this.id);
            drivers();
            this.parentNode.remove()
        })
        document.getElementById("comp").appendChild(li);
    }

    /*
    var io = document.createElement("li")
    io.textContent = "Back"
    io.id = "back"
    io.addEventListener("click", function () {

        inSured()
        this.parentNode.remove()
    })
    document.getElementById("comp").appendChild(io)
*/
back('inSured', 'comp')
}











function drivers(){

    progressBar.animate(0.02);
    var ul = document.createElement("ul");
    title("How many drivers?")

    ul.id = "drivers"
    document.getElementById("form").appendChild(ul);
    var c = 1;
    for (var i = 0;i <3; i++){
        var d = i + 1
        var li = document.createElement("li");
        li.id = [d] + " Drivers";
        li.innerHTML = [d];
        document.getElementById("drivers").appendChild(li);
        li.addEventListener("click",function(){
            getYear();
            input(this.id);
            this.parentNode.remove();
        })


    }
    li.innerHTML = "3 or more"
    document.getElementById("drivers").appendChild(li)

   back('insuredYes','drivers')
   //back()

}









function getYear() {
    progressBar.animate(0.03)
    
    document.getElementById("inner").innerHTML = "<p id='start'>30 %</p>"
    var x = document.createElement("ul");
    x.id = "year";
    document.getElementById("form").appendChild(x);
    var i;
    for (i = 2022; i > 1998; i--) {
        var c = document.createElement("li");
        c.id = i;
        c.innerHTML = i
        c.addEventListener("click", function () {
            input(this.id)
            getMake()
            document.getElementById("year").remove()
            carYear = this.id;
            this.parentNode.remove()
        })
        document.getElementById("year").appendChild(c)
    }
  /*  var io = document.createElement("li")
    io.textContent = "Back"
    io.id = "back"
    io.addEventListener("click", function () {
        insuredYes()
        this.parentNode.remove()
    })
    document.getElementById("year").appendChild(io)
*/

back('drivers','year')
}








function getMake() {
    document.getElementById("inner").innerHTML = "<p id='start'>40%</p>"
    progressBar.animate(0.1);
    document.getElementById("title").innerHTML = "Select Make"
    var i;
    var s;
    var ul = document.createElement("ul")
    ul.id = "make"
    document.getElementById("form").appendChild(ul)
    var makesL = [
        'Acura',
        'Alfa Romeo',
        'Aston Martin',
        'Audi',
        'Bentley',
        'BMW',
        'Bugatti',
        'Buick',
        'Cadillac',
        'Chevrolet',
        'Chrysler',
        'Dodge',
        'Ferrari',
        'Ford',
        'GMC',
        'Honda',
        'Hyundai',
        'Infiniti',
        'ISUZU',
        'JAGUAR',
        'Jeep',
        'Kia',
        'LAMBORGHINI',
        'Land Rover',
        'Lexus',
        'Lincoln',
        'MASERATI',
        'Mazda',
        'MCLAREN',
        'MERCEDES',
        'MERCURY',
        'Mini',
        'Mitsubishi',
        'Nissan',
        'Oldsmobile',
        'PLYMOUTH',
        'Pontiac',
        'Porsche',
        'Renault',
        'ROLLS ROYCE',
        'Saab',
        'SALEEN',
        'SATURN',
        'Subaru',
        'TESLA',
        'Toyota',
        'Volkswagen',
        'Volvo'
    ]
    for (i = 0; i < makesL.length; i++) {
        var li = document.createElement("li")
        li.textContent = makesL[i]
        li.id = makesL[i]
        li.addEventListener("click", function () {
            progressBar.animate(0.3)
            input(this.id)
            getModel1(this.id, carYear)
            carMake = this.id
            this.parentNode.remove()
            document.getElementById("start").style.display = "none"
        })
        document.getElementById("make").appendChild(li)
    }
    var makesDrop = [
        'Other',
        'Suzuki',
        'Citroen',
        'Daewoo',
        'DAIHATSU',
        'DATSUN',
        'FALCON',
        'Fiat',
        'Hudson',
        'KOENIGSEGG',
        'LUCID AIR',
        'LUMEN',
        'LOTUS',
        'OPEL',
        'MAYBACH',
        'MG',
        'Ram Trucks',
        'Studebaker',
        'YUGO',
        'TRIUMPH',
        'RENAISSANCE',
        'Peugeot',
    ];
    var o = document.createElement("li")
    o.id = "other"
    document.getElementById("make").appendChild(o)
    var select = document.createElement("select")
    select.id = "drop_down";
    select.innerHTML = "Otherselect"
    select.innerText = "Other"
    document.getElementById("other").appendChild(select);
    for (s = 0; s < makesDrop.length; s++) {
        var option = document.createElement("option");
        option.id = makesDrop[s];
        option.innerHTML = makesDrop[s];
        document.getElementById("drop_down").appendChild(option)
    }
    document.getElementById("drop_down").onchange = function () {
        progressBar.animate(0.3)
        input(this.value)
        getModel1(this.value, carYear)
        carMake = this.value
        document.getElementById("make").remove()
        //document.getElementById("inner").innerHTML = this.id
        document.getElementById("start").style.display = "none"
    }
  /*  var io = document.createElement("li")
    io.textContent = "Back"
    io.id = "back"
    io.addEventListener("click", function () {
        getYear()
        this.parentNode.remove()
    })
    document.getElementById("make").appendChild(io)
*/
back('getYear','make')

}










function getModel1(make, year) {
    var goTo = window.location.hostname
    var url = "car_brands.json"
    fetch(goTo + url).then(function (r) {
        return r.json()
    }).then(function (d) {
        //var car = "honda"
        console.log(carMake.replace(/^./, str => str.toUpperCase()))
        console.log(d)
        for (var i = 0; i < d.length; i++) {
            console.log(d[i].name)
            if (d[i].name == carMake.replace(/^./, str => str.toUpperCase())) {
                console.log("yes")
                var im = document.createElement("img")
                im.className = "log"
                im.id = "log"
                im.src = d[i].logo
                document.getElementById("inner").appendChild(im)
            }
        }
    })
    document.getElementById("title").innerHTML = "Select Model"
    carMake = make
    carYear = year
    var ul = document.createElement("ul");
    ul.id = "model";
    document.getElementById("form").appendChild(ul)
    var li = document.createElement(li);
    //var l = document.createElement("ul")
    //l.id = "models"
    // document.getElementById("form").appendChild(l)
    fetch(url = "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/" + make + "/modelyear/" + year + "/vehicleType/car?format=json").then(function (r) {
        return r.json()
    }).then(function (b) {
        var i;
        for (i = 0; i < b.Results.length; i++) {
            var li = document.createElement("li")
            li.id = b.Results[i].Model_Name
            li.innerHTML = b.Results[i].Model_Name.slice(0, 10)
            li.addEventListener("click", function () {
                input(this.id)
                addCar()
                this.parentNode.remove()
                progressBar.animate(0.4)
            })
            document.getElementById("model").appendChild(li)
        }
    }).then(function () {
        fetch(url = "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/" + make + "/modelyear/" + year + "/vehicleType/truck?format=json").then(function (r) {
            return r.json()
        }).then(function (b) {
            var i;
            for (i = 0; i < b.Results.length; i++) {
                var li = document.createElement("li")
                li.id = b.Results[i].Model_Name
                li.innerHTML = b.Results[i].Model_Name.slice(0, 10)
                li.addEventListener("click", function () {
                    input(this.id)
                    addCar()
                    this.parentNode.remove()
                    progressBar.animate(0.5)
                })
                document.getElementById("model").appendChild(li)
            }
            fetch(url = "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/" + make + "/modelyear/" + year + "/vehicleType/mpv?format=json").then(function (r) {
                return r.json()
            }).then(function (b) {
                console.log(b)
                var i;
                for (i = 0; i < b.Results.length; i++) {
                    var li = document.createElement("li")
                    li.id = b.Results[i].Model_Name
                    li.innerHTML = b.Results[i].Model_Name.slice(0, 10)
                    li.addEventListener("click", function () {
                        input(this.id)
                        addCar(this.id)
                        this.parentNode.remove()
                        progressBar.animate(0.6)
                    })
                    document.getElementById("model").appendChild(li)
                }
            }).then(function () {
                var back = document.createElement("li")
                back.id = "back"
                back.innerText = "back"
                back.addEventListener("click", function () {
                    getMake()
                    progressBar.animate(0.5)
                    this.parentNode.remove()
                })
                document.getElementById("model").appendChild(back)
            })
        })
    })
    back('getMake','model')

}








function addCar() {
    document.getElementById("model").remove()
    document.getElementById("title").innerHTML = "Add another car?"
    var i = document.createElement("ul")
    i.id = "addMore";
    document.getElementById("form").appendChild(i)
    var l = document.createElement("li")
    l.id = "yes";
    l.textContent = "Yes"
    l.addEventListener("click", function () {
        car++
        getYear()
        // onLoad(this.id + ",car" + [car])
        this.parentNode.remove()
        input("additionalcar")
    })
    document.getElementById("addMore").appendChild(l)
    var s = document.createElement("li")
    s.id = "no";
    s.textContent = "No"
    s.addEventListener("click", function () {
        addR()
        this.parentNode.remove()
    })
    document.getElementById("addMore").appendChild(s)
}









function addR(vehicle) {
    progressBar.animate(0.7)
    document.getElementById("title").innerHTML = "Address"
    var u = document.createElement("ul")
    u.id = "address"
    document.getElementById("form").appendChild(u);
    var input = document.createElement("input")
    input.id = "address"
    input.type = "text"
    input.name = "address"
    input.placeholder = "Address"
    document.getElementById("address").appendChild(input);
    document.getElementById("form").appendChild(u);
    var input = document.createElement("input")
    input.id = "city"
    input.type = "text"
    input.name = "city"
    input.placeholder = "City"
    document.getElementById("address").appendChild(input);
    document.getElementById("form").appendChild(u);
    var input = document.createElement("input")
    input.id = "state"
    input.type = "select"
    input.name = "state"
    input.placeholder = "State"
    document.getElementById("address").appendChild(input)
    document.getElementById("form").appendChild(u);
    var input = document.createElement("input")
    input.id = "zip"
    input.type = "number"
    input.name = "zip"
    input.placeholder = "Zip Code"
    input.addEventListener("focus", function () {
        zipValidate()
    })
    document.getElementById("address").appendChild(input)
    var l = document.createElement("li")
    l.id = "back"
    l.textContent = "Back"
    l.addEventListener("click", function () {
        getModel1(carMake, carYear)
        this.parentNode.remove()
        document.getElementById("log").remove()
    })
    document.getElementById("address").appendChild(l)
}





function zipValidate() {
    var z = document.getElementById("zip")
    z.addEventListener("input", function () {
        var zVal = document.getElementById("zip").value;
        if (zVal.length == 5 && zVal != 6) {
            document.getElementById("address").style.display = "none"
            homeOwnerYesNo()
        }
    })
}
function homeOwnerYesNo() {
    document.getElementById("title").innerHTML = "Home owner?"
    var k = document.createElement("ul")
    k.id = "hw"
    document.getElementById("form").appendChild(k)
    var h = document.createElement("li")
    h.id = "yes"
    h.textContent = "Yes"
    h.addEventListener("click", function () {
        this.parentNode.remove()
        homeQuote();
    })
    var l = document.createElement("li")
    l.id = "no"
    l.textContent = "No"
    l.addEventListener("click", function () {
        this.parentNode.remove();
        namesDriver();
        progressBar.animate(0.9);
    })
    document.getElementById("hw").appendChild(h)
    document.getElementById("hw").appendChild(l)
    var k = document.createElement("li")
    k.id = "back"
    k.textContent = "Back"
    k.addEventListener("click", function () {
        document.getElementById("title").innerHTML = "Address"
        document.getElementById("address").style.display = "unset"
        this.parentNode.remove()
    })
    document.getElementById("hw").appendChild(k)
}
function homeQuote() {
    document.getElementById("title").innerHTML = "Would like a home quote?"
    progressBar.animate(0.8)
    var l = document.createElement("ul");
    l.id = "homequote"
    document.getElementById("form").appendChild(l)
    var g = document.createElement("li");
    g.id = "yes"
    g.innerHTML = "Yes Quote";
    g.addEventListener("click", function () {
        this.parentNode.remove()
        namesDriver()
    })
    var p = document.createElement("li");
    p.id = "no";
    p.innerHTML = "No Quote"
    p.addEventListener("click", function () {
        this.parentNode.remove()
        namesDriver();
    })
    document.getElementById("homequote").appendChild(g)
    document.getElementById("homequote").appendChild(p)
    var l = document.createElement("li")
    l.id = "back"
    l.textContent = "Back"
    l.addEventListener("click", function () {
        homeQ()
        this.parentNode.remove()
    })
    document.getElementById("homequote").appendChild(l)
}
function namesDriver() {
    progressBar.animate(0.9)
    var nam = document.createElement("ul")
    nam.id = "names"
    document.getElementById("form").appendChild(nam)
    document.getElementById("title").innerHTML = "First Name"
    var input = document.createElement("input")
    input.id = "First"
    input.type = "text"
    input.name = "first"
    input.placeholder = "First Name"
    document.getElementById("names").appendChild(input);
    var input = document.createElement("input")
    input.id = "last"
    input.type = "text"
    input.name = "lasr"
    input.placeholder = "Last Name"
    document.getElementById("names").appendChild(input);
    var input = document.createElement("input")
    input.id = "phone"
    input.type = "number"
    input.name = "phone"
    input.placeholder = "Phone Number"
    document.getElementById("names").appendChild(input)
    var input = document.createElement("input")
    input.id = "emai"
    input.type = "email"
    input.name = "email"
    input.placeholder = "Email"
    input.addEventListener("focus", function () {
        document.getElementById("submit").remove()
        var input = document.createElement("input");
        input.type = "submit";
        input.id = "submit"
        input.name = "submit",
            input.value = "Get Rates"
        document.getElementById("names").appendChild(input)
        progressBar.animate(1.0)
    })
    document.getElementById("names").appendChild(input)
    var input = document.createElement("input");
    input.type = "submit";
    input.id = "submit"
    input.name = "submit",
    input.value = "Get Rates"
    document.getElementById("names").appendChild(input)
    document.getElementById("submit").setAttribute("disabled", true);
}
inSured();


