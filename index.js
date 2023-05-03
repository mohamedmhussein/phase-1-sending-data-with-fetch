// Add your code here
function submitData(userName, userEmail){
    return fetch('http://localhost:3000/users',{
    method: 'POST',    
    headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
                })
    })
    .then(res => res.json())
    .then(data => {
        document.querySelector('body').innerHTML = data.id
    })
    .catch(function (error) {
        const message = 'Unauthorized Access'
        //alert("Unauthorized Access");
        const p = document.createElement('p')
        p.textContent = message
        document.querySelector('body').appendChild(p)
      });
}