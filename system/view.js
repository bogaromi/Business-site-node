
exports.createNavigation = function()
{
    var html = '<nav><ul>';
    html += '<li><a href="/">Rólunk</a></li>';
    html += '<li><a href="/munkaink">Munkáink</a></li>';
    html += '<li><a href="/elerhetoseg">Elérhetőség</a></li>';
    html += '<li><a href="/kapcsolat">Kapcsolat</a></li>';

    html += '</ul></nav></div></div>';

    return html;
};

exports.begin = function(title, response)
{
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`<!doctype html>
                    <html lang="hu">               
                    <head>
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta charset="UTF-8">
                        <link rel="stylesheet" href="./src/style.css">
                        <title>${title}</title>
                    </head>
                    
                        <body>`);

    var nav = exports.createNavigation();
    response.write(nav);
    response.write(`<h1>${title}</h1>`);
    response.write(`<hr>`);
}
exports.aboutUs = function(response)
{
    response.write(`<h4>Bemutatkozás:</h4>
    <p>Digitális megoldások - mindenkinek <br>
    Évtizedes tapasztalattal készítünk weboldalakat és 
    webes rendszereket professzionális módon.</p>
    `);
}
exports.referencies = function(response)
{
    response.write(`<section class="ref-block"><div class="div-wrap">
    <h4>Üzleti weboldal:</h4>
    <img src="./src/img-1.jpg" alt="">
    <div><p>Üzleti weboldal készítése professionális ügyfelek részére. Egyszerü letisztúlt dizájn, akár egyedi megoldásokkal.</p></div>
    </div></section>
    `);
    response.write(`<section class="ref-block"><div class="div-wrap">
    <h4>Webáruház fejlesztés:</h4>
    <img src="./src/img-2.jpg" alt="">
    <div><p>Egyedi és minden feltételnek megfelelő webáruház sokféle szolgáltatással.</p></div>
    </div></section>
    `);
    response.write(`<section class="ref-block"><div class="div-wrap">
    <h4>Webes applikáció fejlesztés:</h4>
    <img src="./src/img-3.jpg" alt="">
    <div><p>Webes alkalmazások üzleti és egyéb igényekre szabva.</p></div>
    </div></section>
    `);
}
exports.contactDetails = function(response)
{
    response.write(`<div class="contact-header"><h1>Start-up Digital Kft<h1></div>
    <div class="contact-block">
    <section class="contact-section">
        <div class="contact-box">
            <h2 class="contact-title">E-mail cím:</h2>
            <h2>info@digital.com</h2>
        </div>
        <div class="contact-box">
            <h2 class="contact-title">Telefonszám:</h2>
            <h2>+36 (20) 198 9458</h2>
        </div>
        
    </section>
    <section class="contact-section">
        <div class="contact-box">
            <h2 class="contact-title">Adószám:</h2>
            <h2>32012400-2-43</h2>
        </div>
        <div class="contact-box">
            <h2 class="contact-title">Iroda:</h2>
            <h2>1112, BUDAPEST <br>
            VERSENY UTCA 6., 5. EMELET</h2>
        </div>
    </section>
    </div>
    
    `);
}
exports.contactUs = function(response)
{
    response.write(`<h4>Lépj kapcsolatba velünk!</h4>
    <p>Kérj egyedi ajánlatot szakértő kollgáinktól. 
    Küldj üzenetet nekünk, hogy felvehessük veled a kapcsolatot. 
    Küldj egy leírást és mi biztosan segítünk.</p>
    
    `);
}

exports.contactForm = function(response)
{
    response.write(`<div class="input">
    <form action="" method="post">
        <div> 
            <label for="name">Teljes név/Cégnév</label><br>
            <input type="text" name="name">
        </div>
        <div>
            <label for="email">E-mail cím</label><br>
            <input type="email" name="email">
        </div>
        <div>
            <label for="phone">Telefonszám</label><br>
            <input type="number" name="phone">
        </div>
        <div>
            <label for="phone">Ajánlatkérés tárgya</label><br>
            <input type="text" name="subject">
        </div>
        <div>
            <label for="email">Megjegyzés/Leírás</label><br>
            <textarea name="comment"></textarea>
        </div>
        
        <button name="send">Küldés</button>
    </form>
</div>
    
    `);
}

exports.end = function(response)
{
    
    response.write(`</body></html>`);
    response.send();

}