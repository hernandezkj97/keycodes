const insert=document.getElementById('insert');
const header=document.getElementById('header');
 const username=prompt('Enter your name: ');
header.innerHTML=`
<div>
<h1> Developed by ${username}</h1>

<p>
This project was made with the purpose of adding it in my porfolio. 
</p>

</div>

`;


window.addEventListener('keydown', (event) => {
    insert.innerHTML= 
    ` 
            <div class="key">
            ${event.key===' '? 'Space': event.key}
            <small>event.key</small>
        </div>

        <div class="key">
            ${event.keyCode}
            <small>event.keyCode</small>
        </div>

        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>
        `;
})