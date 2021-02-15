function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function confo(candidate){
    if (confirm(`Confirmation for voting for ${candidate}?`)) {
        document.location.replace("loading.html");
      } else {
        document.location.replace("index.html");
      }
  }
  