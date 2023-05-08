
let userName = "zaid"
let password = "123"




 function saveuser(){

    if(userName  ==='' || password === ''){
        console.log("test done ")
    }

    fetch('https://trainig-hakthon-default-rtdb.firebaseio.com/surveys.json' ,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           name: userName, 
           password: password
        }),
    } );
} 

