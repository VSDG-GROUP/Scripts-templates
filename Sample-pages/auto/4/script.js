 
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
  var notins;
  var cardmod;
  var suvmod;
  var truckmod;
  var percentage;
  var insured;

 

  function changePer(th){
    document.getElementById("start").innerHTML = th + "%"
  
  
  }
  
  function logos(make){
  var logos = [
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/abarth1.png",
        "name": "Abarth"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/ac-cars.png",
        "name": "AC"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/acura.png",
        "name": "Acura"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/aixam.png",
        "name": "Aixam"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/alfa_romeo.png",
        "name": "Alfa Romeo"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/ariel.png",
        "name": "Ariel"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/10/arrinera-logo.png",
        "name": "Arrinera"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/aston_martin.png",
        "name": "Aston Martin"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/audi.png",
        "name": "Audi"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/bentley.png",
        "name": "Bentley"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/bmw.png",
        "name": "BMW"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/bugatti.png",
        "name": "Bugatti"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/buick.png",
        "name": "Buick"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/cadillac.png",
        "name": "Cadillac"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/caterham.png",
        "name": "Caterham"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/chevrolet.png",
        "name": "Chevrolet"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/chrysler.png",
        "name": "Chrysler"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/citroen.png",
        "name": "Citroën"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/corvette.png",
        "name": "Corvette"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/dacia.png",
        "name": "Dacia"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/daf.png",
        "name": "Daf"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/daihat.png",
        "name": "Daihatsu"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/dodge.png",
        "name": "Dodge"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/10/drmotor.png",
        "name": "DR Motor"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/elfin.png",
        "name": "Elfin"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/ferrari.png",
        "name": "Ferrari"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/fiat.png",
        "name": "Fiat"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/ford.png",
        "name": "Ford"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/gaz.png",
        "name": "Gaz"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/geely.png",
        "name": "Geely"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/gillet.png",
        "name": "Gillet"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/ginetta.png",
        "name": "Ginetta"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/gm.png",
        "name": "General Motors"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/gmc.png",
        "name": "GMC"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2013/10/Great-Wall.png",
        "name": "Great Wall"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/gumpert.png",
        "name": "Gumpert"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/10/hennessey.png",
        "name": "Hennessey logo"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/10/holden.png",
        "name": "Holden"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/honda.png",
        "name": "Honda"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/hummer.png",
        "name": "Hummer"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/hyundai.png",
        "name": "Hyundai"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/inf.png",
        "name": "Infiniti"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/isuzu.png",
        "name": "Isuzu"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/jagu.png",
        "name": "Jaguar"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/jeep.png",
        "name": "Jeep"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/joss.png",
        "name": "Joss"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/kia.png",
        "name": "Kia"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/koenigsegg.png",
        "name": "Koenigsegg"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/lada.png",
        "name": "Lada"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/lamb.png",
        "name": "Lamborghini"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/lancia.png",
        "name": "Lancia"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/land-rover.png",
        "name": "Land Rover"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/lexus.png",
        "name": "Lexus"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/linc.png",
        "name": "Lincoln"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/lotus.png",
        "name": "Lotus"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/11/luxgen-logo.png",
        "name": "Luxgen"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/11/mahindra.png",
        "name": "Mahindra"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/12/Maruti_Suzuki.png",
        "name": "Maruti Suzuki"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/mase.png",
        "name": "Maserati"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/maybach.png",
        "name": "Maybach"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/mazda.png",
        "name": "Mazda"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/mclaren.png",
        "name": "Mclaren"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/marchedrs.png",
        "name": "Mercedes"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/mg.png",
        "name": "MG"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/mini.png",
        "name": "Mini"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/mitub.png",
        "name": "Mitsubishi"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/morgan.png",
        "name": "Morgan Motor"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/mustang.png",
        "name": "Mustang logo"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/nissan.png",
        "name": "Nissan"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/noble.png",
        "name": "Noble"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/opel.png",
        "name": "Opel"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/pagani.png",
        "name": "Pagani"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/panoz.png",
        "name": "Panoz"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/perodua.png",
        "name": "Perodua"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/peug.png",
        "name": "Peugeot"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/piaggio.png",
        "name": "Piaggio"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/pininfarina.png",
        "name": "Pininfarina"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/porsche.png",
        "name": "Porsche"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/proton.png",
        "name": "Proton"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/renault.png",
        "name": "Renault"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/reva.png",
        "name": "Reva"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2012/01/rimac-150x150.png",
        "name": "Rimac"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/rolls-royce.png",
        "name": "Rolls Royce"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/ruf.png",
        "name": "Ruf logo"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/saab.png",
        "name": "Saab"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/scania.png",
        "name": "Scania"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/scion.png",
        "name": "Scion"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/seat.png",
        "name": "Seat"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/10/shelby.png",
        "name": "Shelby"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/skoda.png",
        "name": "Skoda"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/smart.png",
        "name": "Smart"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/spyker.png",
        "name": "Spyker"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/ssangyong.png",
        "name": "Ssangyong"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/10/ssc.png",
        "name": "SSC"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/subaru.png",
        "name": "Subaru"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/suzuki.png",
        "name": "Suzuki"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/tata.png",
        "name": "Tata"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/tatra.png",
        "name": "Tatra"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/tesla.png",
        "name": "Tesla"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/toyota.png",
        "name": "Toyota"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/1176359_187686584745478_1792749640_n.jpg",
        "name": "Tramontana"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/troller.png",
        "name": "Troller"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/tvr.png",
        "name": "TVR"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/uaz.png",
        "name": "UAZ"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/vandenbrink_design.png",
        "name": "Vandenbrink"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/vauxhall.png",
        "name": "Vauxhall"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/vector_motors.png",
        "name": "Vector Motors"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/venturi.png",
        "name": "Venturi"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/volkswagen.png",
        "name": "Volkswagen"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/volvo.png",
        "name": "Volvo"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/wiesmann.png",
        "name": "Wiesmann"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/zagato.png",
        "name": "Zagato"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/zaz.png",
        "name": "Zaz"
      },
      {
        "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/zil.png",
        "name": "Zil"
      }
    ]
  
  
    for (var i = 0; i < logos.length; i++) {
      console.log(logos[i].name)
      if (logos[i].name == make.replace(/^./, str => str.toUpperCase())) {
         console.log("yes")
          var im = document.createElement("img")
          im.className = "log"
          im.id = "log"
          im.src = logos[i].logo
          document.getElementById("inner").appendChild(im)
      }
  }
  }
  
  
  function onLoad(val, val2) {
  //changePer(val3)
  
      progressBar = new ProgressBar.Circle('#progress', {
          color: '#2f9ee9',
          strokeWidth: 8,
          duration: 2000, // milliseconds
          easing: 'easeInOut'
      });
      progressBar.animate(val); // percent
  };
  
  
  
  
  
  function back(vali1,vali2){
  
      var io = document.createElement("li")
      io.textContent = "Back"
      io.id = "back"
      io.addEventListener("click", function () {
  
          window[vali1]();
          document.getElementById(vali2).remove()
          var rem = document.getElementById("log")
          rem.remove()
        
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
  
  function inMput(val) {
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
    progressBar.animate(0.20)
    title("Currently Insure?")

      document.getElementById("inner").innerHTML = "<p id='start'>20%</p>"
      var i = document.createElement("ul")
      i.id = "ins";
      i.className = "save",
      document.getElementById("form").appendChild(i);
      var li = document.createElement("li");
      li.id - "yes";
      li.innerHTML = "Yes";
      li.addEventListener("click", function () {
        insured = "yes"
          inMput(this.id);
          insuredYes();
          this.parentNode.remove()
      })
  
      document.getElementById("ins").appendChild(li);
      var lin = document.createElement("li");
      lin.id = "no";
      lin.innerHTML = "No"
      
      lin.addEventListener("click",function(){
        insured = "no"
          getDrivers()
          this.parentNode.remove()
          inMput(this.id)
      })
      document.getElementById("ins").appendChild(lin);
   changePer(20)
  
  }
  
  
  
  
  
  
  function insuredYes() {
      progressBar.animate(.30)
       changePer(30)
  
      title("Who is your current Insurer?")
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
          'other'
      ]
      for (i = 0; i < cd.length; i++) {
          var li = document.createElement("li");
          li.id = cd[i];
          li.innerHTML = cd[i];
          li.addEventListener("click", function () {
        
              inMput(this.id);
              getDrivers();
              this.parentNode.remove()
          })
          document.getElementById("comp").appendChild(li);

      }
  
      
      var io = document.createElement("li")
      io.textContent = "Back"
      io.id = "back"
      io.addEventListener("click", function () {
  
          inSured()
          this.parentNode.remove()
      })
      document.getElementById("comp").appendChild(io)

  }
  
  
  
  
  
  
  
  
  
  
  
  function getDrivers(){
    changePer(40)
  
      progressBar.animate(0.40);
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
              inMput(this.id);
              this.parentNode.remove();
          })
  
  
      }
      li.innerHTML = "3 or more"
      document.getElementById("drivers").appendChild(li)
  
     
      var io = document.createElement("li")
      io.textContent = "Back"
      io.id = "back"
      io.addEventListener("click", function () {
        if( insured == "no" ){
          inSured()
        } else {
       insuredYes()
        }
          
          this.parentNode.remove()
      })
      document.getElementById("drivers").appendChild(io)
     //back()
  
  }
  
  
  
  
  
  
  



  

function getYear() {
  progressBar.animate(0.50);
  title("What year is your vehicle?");

  changePer(50);
  var x = document.createElement("ul");
  x.id = "year";
  document.getElementById("form").appendChild(x);
  
  var i;
  for (i = 2022; i > 1998; i--) {
    var c = document.createElement("li");
    c.id = i;
    c.innerHTML = i
    c.addEventListener("click", function () {
      inMput(this.id);
      getMake();
      carYear = this.id;
      this.parentNode.remove();
    })
    document.getElementById("year").appendChild(c);
  }



  






  var io = document.createElement("li")
  io.textContent = "Back"
  io.id = "back"
  io.addEventListener("click", function () {
    getDrivers()
    this.parentNode.remove()
  })
  document.getElementById("year").appendChild(io)
}



  
  
  
  
  
  function getMake() {
    changePer(60)
      progressBar.animate(0.60);
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
              inMput(this.id)
              getModel1(this.id, carYear)
              carMake = this.id
              this.parentNode.remove()
              document.getElementById("start").style.display = "none"
           logos(this.id)

          })
          document.getElementById("make").appendChild(li)
      }
      var makesDrop = [
          'Other',
          'Suzuki',
          'Citroen',
          'Daewoo',
          'Daihatsu',
          'Datsun',
          'Falcon',
          'Fiat',
          'Hudson',
          'Koenigsegg',
          'Lucid',
          'Lumen',
          'Lotus',
          'Opel',
          'Maybach',
          'Mg',
          'Ram',
          'Studebaker',
          'Yugo',
          'Triumph',
          'Renaissance',
          'Peugeot',
      ];
      var o = document.createElement("li")
      o.id = "others"
      document.getElementById("make").appendChild(o)
      var select = document.createElement("select")
      select.id = "drop_down";
      select.innerHTML = "Otherselect"
      select.innerText = "Other"
      document.getElementById("others").appendChild(select);
      for (s = 0; s < makesDrop.length; s++) {
          var option = document.createElement("option");
          option.id = makesDrop[s];
          option.innerHTML = makesDrop[s];
          document.getElementById("drop_down").appendChild(option)
      }
      document.getElementById("drop_down").onchange = function () {
  logos(this.id)

         
          carMake = this.value
  
          inMput(this.value)
          getModel1(this.value, carYear)
          document.getElementById("make").remove()
          //document.getElementById("inner").innerHTML = this.id
        //  document.getElementById("start").style.display = "none"
  
      }
      var io = document.createElement("li")
      io.textContent = "Back"
      io.id = "back"
      io.addEventListener("click", function () {
          getYear()
          this.parentNode.remove()
      })
      document.getElementById("make").appendChild(io)


 /* document.getElementById("back").addEventListener("click",function(){
    var image =  document.getElementById("log");
     if (image != null)
     {
          image.parentNode.removeChild(image);
     }
  })
*/
  }
  
  
  
  
  
  
  
  
  
  
  function getModel1(make, year) {

    changePer(70)
    //  var goTo = window.location.hostname
    //  var url = "car_brands.json"
    //  fetch(goTo + url).then(function (r) {
     //     return r.json()
     // }).then(function (d) {
          //var car = "honda"
          //console.log(carMake.replace(/^./, str => str.toUpperCase()))
        //  console.log(d)
      /*    for (var i = 0; i < logos.length; i++) {
              console.log(logos[i].name)
              if (logos[i].name == make.replace(/^./, str => str.toUpperCase())) {
                 console.log("yes")
                  var im = document.createElement("img")
                  im.className = "log"
                  im.id = "log"
                  im.src = logos[i].logo
                  document.getElementById("inner").appendChild(im)
              }
          }
   //   })
   */




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
          carmod = b.Results.length;
          for (i = 0; i < b.Results.length; i++) {
              var li = document.createElement("li")
              li.id = b.Results[i].Model_Name
              li.innerHTML = b.Results[i].Model_Name.slice(0, 10)
              li.addEventListener("click", function () {
                  inMput(this.id)
                  addCar()
                  this.parentNode.remove()
              })
              document.getElementById("model").appendChild(li)
          }
      }).then(function () {
          fetch(url = "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/" + make + "/modelyear/" + year + "/vehicleType/truck?format=json").then(function (r) {
              return r.json()
          }).then(function (b) {
              var i;
          suvmod = b.Results.length;
  
              for (i = 0; i < b.Results.length; i++) {
                  var li = document.createElement("li")
                  li.id = b.Results[i].Model_Name
                  li.innerHTML = b.Results[i].Model_Name.slice(0, 10)
                  li.addEventListener("click", function () {
                      inMput(this.id)
                      addCar()
                      this.parentNode.remove()
                      
                  })
                  document.getElementById("model").appendChild(li)
              }
              fetch(url = "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/" + make + "/modelyear/" + year + "/vehicleType/mpv?format=json").then(function (r) {
                  return r.json()
              }).then(function (b) {
                  console.log(b)
                  var i;
          truckmod = b.Results.length;
  
                  for (i = 0; i < b.Results.length; i++) {
                      var li = document.createElement("li")
                      li.id = b.Results[i].Model_Name
                      li.innerHTML = b.Results[i].Model_Name.slice(0, 10)
                      li.addEventListener("click", function () {
                          inMput(this.id)
                          addCar(this.id)
                          this.parentNode.remove()
                          
                      })
                      document.getElementById("model").appendChild(li)
                  }
              }).then(function () {
                  
                  if((carmod == 0 ) && (suvmod == 0) && (truckmod == 0)) {
                      alert("Vihecle not available, select different year and make!");
                      getYear();
                      this.parentNode.remove()
                      
                  }
                  changePer(80)

                  progressBar.animate(0.8)
                  var io = document.createElement("li")
                  io.textContent = "Back"
                  io.id = "back"
                  io.addEventListener("click", function () {
                      
                      getMake()
                     var im = document.getElementById("log");
                     if(im){
                     im.parentNode.removeChild(im);
                     }
                      this.parentNode.remove()
                  })
                  document.getElementById("model").appendChild(io)
              })

          })
      })
     
     

  }
  
  
  
  
  
  
  
  
  function addCar() {
     
    var im = document.getElementById("log");
    if(im){
    im.parentNode.removeChild(im);
    }
    document.getElementById("start").style.display = "unset"

    progressBar.animate(.9)
    changePer(90)

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
          inMput("additionalcar")
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
   
   
   // document.getElementById("start").style.display = "block"
  
    //document.getElementById("start").innerHTML = "<p id='start'>70%</p>"
    changePer(91)
      progressBar.animate(0.91)
      document.getElementById("title").innerHTML = "Address"
      var u = document.createElement("div")
      u.id = "address"
      document.getElementById("form").appendChild(u);
      var input = document.createElement("input")
      input.id = "street"
      input.type = "text"
      input.name = "address"
      input.placeholder = "Address"
      document.getElementById("address").appendChild(input);
      var input = document.createElement("input")
      input.id = "city"
      input.type = "text"
      input.name = "city"
      input.placeholder = "City"
      document.getElementById("address").appendChild(input);
      var input = document.createElement("input")
      input.id = "state"
      input.type = "text"
      input.name = "state"
      input.placeholder = "Florida"
      input.readOnly = "true"
      document.getElementById("address").appendChild(input)
      var input = document.createElement("input")
      input.id = "zip"
      input.type = "number"
      input.name = "zip"
      input.placeholder = "Zip Code"
      input.addEventListener("focus", function () {
          zipValidate()
      })
      document.getElementById("address").appendChild(input)
     
  }
  
  
  
  
  
  function zipValidate() {

      var z = document.getElementById("zip")
      z.addEventListener("input", function () {
          var zVal = document.getElementById("zip").value;
          if (zVal.length == 5 && zVal.length != 6) {
             var li = document.createElement("li");
             li.id = "next"
             li.innerHTML = "Next"
             li.addEventListener("click",function(){
              document.getElementById("address").style.display = "none";
              homeOwnerYesNo()
             })
             document.getElementById("address").appendChild(li)
          }
      })
  }
  function homeOwnerYesNo() {
    //  document.getElementById("log").remove()
 
    changePer(92)
    progressBar.animate(0.92)
      document.getElementById("title").innerHTML = "Home owner?"
      var k = document.createElement("ul")
      k.id = "hw"
      document.getElementById("form").appendChild(k)
      var h = document.createElement("li")
      h.id = "yes"
      h.textContent = "Yes"
      h.addEventListener("click", function () {
          
          homeQuote();
          this.parentNode.remove()
      })
      var l = document.createElement("li")
      l.id = "no"
      l.textContent = "No"
      l.addEventListener("click", function () {
          this.parentNode.remove();
          namesDriver();
          progressBar.animate(0.93);
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
      
    changePer(94)
      document.getElementById("title").innerHTML = "Would like a home quote?"
      progressBar.animate(0.94)
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
          homeOwnerYesNo()
          this.parentNode.remove()
      })
      document.getElementById("homequote").appendChild(l)
      
     
  
    }




















  function namesDriver() {
    changePer(95)
    document.getElementById("title").innerHTML = "Advance technology compares rates of all top companies for the lowest price."

      progressBar.animate(0.95)
      var nam = document.createElement("ul")
      nam.id = "names"
      document.getElementById("form").appendChild(nam)
      var input = document.createElement("input")
      input.id = "First"
      input.type = "text"
      input.name = "first"
      input.placeholder = "First Name"
      input.addEventListener("focus",function(){
      document.getElementById("title").innerHTML = "First Name"
  
      })
      input.addEventListener("blur",function(){
  
        changePer(96)
        progressBar.animate(0.96)
      })
      document.getElementById("names").appendChild(input);
      var input = document.createElement("input")
      input.id = "last"
      input.type = "text"
      input.name = "last"
      input.placeholder = "Last Name"
      input.addEventListener("focus",function(){
        document.getElementById("title").innerHTML = "Last Name"
    
        })
      input.addEventListener("blur",function(){
        changePer(97)
        progressBar.animate(0.97)
      })
      document.getElementById("names").appendChild(input);
      var input = document.createElement("input")
      input.id = "phone"
      input.type = "number"
      input.name = "phone"
      input.placeholder = "Phone Number"
      input.addEventListener("focus",function(){
        document.getElementById("title").innerHTML = "Phone Number"
    
        })
      input.addEventListener("blur",function(){
        changePer(98)
        progressBar.animate(0.98)
      })
      document.getElementById("names").appendChild(input)
      var input = document.createElement("input")
      input.id = "emai"
      input.type = "email"
      input.name = "email"
      input.placeholder = "Email"
      input.addEventListener("focus",function(){
        document.getElementById("title").innerHTML = "Email"
    
        })
      input.addEventListener("focus", function () {
         // document.getElementById("form").setAttribute("action", "http://67.205.177.73/sendit.php")
          //document.getElementById("form").setAttribute("method", "POST")
          document.getElementById("start").textContent = "Last step"
          
   
          progressBar.animate(0.99)
          
          
          document.getElementById("submit").remove()
          var input = document.createElement("input");
          input.type = "submit";
          input.id = "submit"
          input.name = "submit",
              input.value = "Get Rates"
              input.addEventListener("click",function(){
                  formSubmit();
  
              })
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
  
  
      var h = document.createElement("h3")
      h.id = "fine";
      h.innerText = "We care about your privacy… By clicking “Get Lowest Rate” I am providing electronic consent to receive calls, emails, and or text messages related to this inquiry, marketing and re-marketing from and or affiliates or representatives, at the phone number wireless mobile number provided by me, including the use of an automatic telephone dialing system and or prerecorded or artificial voices. I understand that my signature is not a condition of purchasing any property, goods or services and that I may revoke my consent at any time. I understand you may share my information with your affiliates and providers for the purpose of providing me with information about the services and products I am requesting. By clicking “Get Lowest Rate” I acknowledge that I have read, understand and agree with the above privacy policy"
      document.getElementById("form").appendChild(h)
    }
  
  
  function formSubmit(event) {
      var url = "https://67.205.177.73/sendit.php";
      var request = new XMLHttpRequest();
      request.open('POST', url, true);
      request.onload = function() { // request successful
      // we can use server response to our request now
        console.log(request.responseText);
      };
    
      request.onerror = function() {
        // request failed
      };
    
      request.send(new FormData(event.target)); // create FormData from form that triggered event
      event.preventDefault();
    }
    
    // and you can attach form submit event like this for example
    
    function disCount(save ){
    $('.save').on('click', function () {
        var cart = $('.piggy');
        var imgtodrag =  this.className
        alert(imgtodrag)
        if (imgtodrag) {
            var imgclone = this.className
                .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.5',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '100'
            })
                .appendTo($('body'))
                .animate({
                'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
            }, 1000, 'easeInOutExpo');
            
            setTimeout(function () {
                cart.effect("shake", {
                    times: 2
                }, 200);
            }, 1500);

            imgclone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
        }
    });
    }

  
  
  inSured();
  
  