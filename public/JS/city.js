function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function mayoral(){
  document.location.replace('choice.html')
}
