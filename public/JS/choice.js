function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function submitform(){
      if (!(document.getElementById("fname").value && document.getElementById("lname").value && document.getElementById("dateofbirth").value && document.getElementById("add1").value && document.getElementById("planguage").value)){
        alert("Please fill in all the information!")
      }else{

        document.location.replace("candidate.html")
      }
  }
  
  async function chose(language){
    let self = document.getElementById("planguage").innerHTML
    document.getElementById("planguage").innerHTML = "Preferred Language: " + language;
    document.getElementById("planguage").value = language;
  }