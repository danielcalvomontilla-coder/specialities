const getContent = (specialty, users) => {
    const template =`
<!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>${specialty}</title>
    </head>
    <body>
    <a href="/">Home</a>
    <a href="/developers">Developers</a>
    <a href="/marketing">Marketing</a>
    <a href="/ventas">Ventas</a>
    <a href="/qas">QAs</a>

    <h1>Specialty: ${specialty}</h1>
    <p>Total Users: ${users.length}</p>
    <ul>
     ${users.map(user => `<li><h2>Name: ${user.name}</h2><p>Age: ${user.age}</p></li>`).join('')}
    </ul>
    
    </body>
 </html>    
`
return template;

}
module.exports = getContent;