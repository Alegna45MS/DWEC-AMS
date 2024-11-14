const images = [
    { id: "8755627802", title: "Lakes close to Ljubljana", description: "Incredible water in Ljubljana, Slovenia.", img: "http://farm3.staticflickr.com/2807/8755627802_727863f09e_b.jpg" },
    { id: "8899898917", title: "Balloons in Cappadocia", description: "Balloon flight in Cappadocia, Turkey.", img: "http://farm6.staticflickr.com/5458/8899898917_fee4ba1613_b.jpg" },
    { id: "9045535798", title: "Lucía in the Steppe", description: "My motorcycle in the side of the road at some point between the Russian border and Atyrau, Kazakhstan.", img: "http://farm6.staticflickr.com/5459/9045535798_f3d21b27a1_b.jpg" },
    { id: "9281765203", title: "Charyn Canyon", description: "Charyn Canyon, Kazakhstan.", img: "http://farm3.staticflickr.com/2847/9281765203_d6af908f9f_b.jpg" },
    { id: "9476752141", title: "Uran Togoo", description: "Road to Uran Togoo, Mongolia.", img: "http://farm8.staticflickr.com/7301/9476752141_969cc26a71_b.jpg" },
    { id: "10139131563", title: "Vancouver Graffiti", description: "Graffiti in Vancouver, Canada.", img: "http://farm8.staticflickr.com/7379/10139131563_3ddd73c6d4_b.jpg" },
    { id: "10138806215", title: "Kinkakuji", description: "Kinkakuji, Kyoto, Japan.", img: "http://farm8.staticflickr.com/7365/10138806215_e25e389de3_b.jpg" }
];

let cuerpo=document.body
cuerpo.addEventListener("load",loadImage(8899898917));

    // Añadir evento click a cada enlace de miniatura
    let imagenes=document.querySelectorAll("#thumbnails a");
    imagenes.forEach(thumbnail => {
        thumbnail.addEventListener("click", (event) => {
            const imageId = thumbnail.getAttribute("id");
            loadImage(imageId);
        });
    });

function loadImage(id) {
    // Usamos un bucle `for` para encontrar la imagen correspondiente al `id`.
    for (let i = 0; i < images.length; i++) {
        if (images[i].id === id) {
            const image = images[i];

            document.getElementById("image").src = image.img;
            document.getElementById("image-title").innerHTML = image.title;
            document.getElementById("description").innerHTML = image.description;
            document.getElementById("source").href = `http://www.flickr.com/photos/teosaurio/${id}`;

            return;
        }
    }
    console.warn(`Image with id ${id} not found`);
}
