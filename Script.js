// const user = {
//     name: 'Raphael',
//     username: 'raphael123',
//     email: 'emefeke@gmail.com',
//     age: 35,
//     blog: ['this post','go well','swift move'],
//     greet(){
//         console.log(`Hello ${this.name}`);
//         //console.log(`$`)
//     },
//     login(){
//         console.log(`${this.name} is logged in`);
//     },
//     logout(){
//         console.log(`You are logged out`);
//     }
// }
// class user{
    
// }
const htmlBody = document.getElementById('body');
const ol = document.createElement('ol');
//const uii = document.getElementById('ul')
fetch('https://randomuser.me/api/?results=30')
.then((res) => {
    return res.json();
})
.then((data) => {
    let users = data.results
    return users.map((user) => {
        const li =document.createElement('li');
        const img = document.createElement('img');
        const p = document.createElement('p');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const p4 = document.createElement('p');
        const p5 = document.createElement('p');
        const card1 = document.getElementById('card')
        console.log(user)

       // htmlBody.appendChild(ol);
        htmlBody.appendChild(card1);
        card1.appendChild(ol);
        ol.appendChild(li);
        let paragraph = li.appendChild(p);
        let paragraph4 = li.appendChild(p4);
        let paragraph2 = li.appendChild(p2);
        let paragraph1 = li.appendChild(p1);
        let paragraph5 = li.appendChild(p5);
        let paragraph3 = li.appendChild(p3);
        
        
        let image = li.appendChild(img);
        let firstName = user.name.first;
        let lastName = user.name.last;
        let city = user.location.city;
        let nationality = user.nat;
        let email = user.email;
        paragraph.innerHTML = `${firstName} ${lastName}`;
        paragraph4.innerHTML = `Email:`;
        paragraph2.innerHTML = `${email}`;
        paragraph1.innerHTML = `city: ${city}`;
        paragraph5.innerHTML = `Nationality:`;
        paragraph3.innerHTML = `${nationality}`;
        image.src = user.picture.large;
    });
    console.log(data.results);
})
.catch((error) =>  {
    console.log(error);
}
);
