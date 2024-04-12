fetch('https://whatyearisit-backend-kappa-ten.vercel.app')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.date;
 });

 