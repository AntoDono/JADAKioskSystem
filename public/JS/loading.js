function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function loadthething(){
    
    await sleep(3000)

    let change = document.getElementById("toplabel")

    await load(change,500,"Detected fingerprint, scanning")

    
    change.innerHTML = "Please look directly at the camera!"

    await sleep(3000)

    await load(change,500,"Scanning facial features")

    change.innerHTML = "Fingerprint Check: ✅Passed<br>Facial Recognition Check: ✅Passed<br><br>Thank you for casting your ballot! Have a nice day!"
    

  }

  
  async function load(change, time, text){
    let counter = 0
    let back = "."
    while (counter<10){
        await sleep(time)
        change.innerHTML = text + back;
        back = back + "."
        if (back.length>3){
            back = "."
        }
        counter++
    }
  }