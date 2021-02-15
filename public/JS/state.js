function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function transition(){
  // let obj = document.getElementById("animation");
  // let html = document.getElementById("html");
  // html.style.overflow = "hidden";
  // obj.style.backgroundImage = `url("http://${document.domain}:8888/IMG/flag.png")`
  // obj.style.display = "auto";
  // obj.style.position = "absolute";

  // let counter = 1;
  // while (counter<=102){
  //   obj.style.height = counter + "vh";
  //   obj.style.width = counter + "%";
  //   counter+= 3;
  //   await sleep(15);
  // }
  // document.location.replace('HTML/city.html')


  // counter = 0;
  // while (counter<=100){
  //   obj.style.top = counter + "%";
  //   obj.style.left = counter + "%";
  //   counter += 1;
  //   await sleep(10);
  // }


  // obj.style = "position: relative;top:0%;left:0%;width: 0vh;z-index: 99999;display:none";

}

async function state(){
  document.location.replace('choice.html')

}

