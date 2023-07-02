// the array menu usually is extracted from an API
const info = [
    {
      id: 1,
      title: "Biryani",
      category: "Indian",
      price: 220,
      img: "images/biryani.jpeg",
      desc: `Fragrant basmati rice cooked with aromatic spices and tender meat, showcasing the best of Indian cuisine `,
    },
    {
      id: 2,
      title: "Pizza",
      category: "Italian",
      price: 250,
      img: "images/Pizza.jpg",
      desc: `Italian style Margherita Pizza with Indian styled toppings served with a variety of crusts `,
    },
    {
      id: 3,
      title: "Pasta",
      category: "Italian",
      price: 250,
      img: "images/pasta.jpeg",
      desc: `Al dente pasta cooked to perfection, paired with flavorful sauces. Explore our menu's enticing pasta selection, featuring traditional and innovative combinations`,
    },
    {
      id: 4,
      title: "ham burger",
      category: "American",
      price: 200,
      img: "images/burger.jpg",
      desc: `Juicy grilled patty, fresh toppings, and a soft bun. Our menu offers classic hamburgers crafted to perfection, satisfying your cravings with every bite. `,
    },
    {
      id: 5,
      title: "hot dog",
      category: "American",
      price: 190,
      img: "images/hotdog.jpeg",
      desc: `Grilled sausage in a soft bun, topped with savory condiments. A classic American favorite on our menu`,
    },
    {
      id: 6,
      title: "Vada Pav",
      category: "Indian",
      price: 50,
      img: "images/vadapav.jpeg",
      desc: `A Mumbai street food staple. Spicy potato fritter served in a bun with chutneys. Experience the flavors of India on our menu.`,
    },
    {
      id: 7,
      title: "Lasagna",
      category: "Italian",
      price: 180,
      img: "./images/lasagna.jpeg",
      desc: ` Layered pasta, tomato sauce, creamy béchamel, and melted cheese. Indulge in our comforting and delicious Italian classic. Satisfaction guaranteed. `,
    },
    {
      id: 8,
      title: "Kulfi",
      category: "Dessert",
      price: 110,
      img: "./images/kulfi.jpeg",
      desc: `A rich and creamy Indian frozen dessert. Indulge in our menu's authentic kulfi, available in traditional and unique flavors. A delightful treat to savor. `,
    },
    {
      id: 9,
      title: "ThickShake",
      category: "shakes",
      price: 150,
      img: "./images/thickshake.jpeg",
      desc: `Creamy handcrafted shakes in various flavors, a delightful treat for milkshake enthusiasts. Indulge in our menu's thickshake selection`,
    },
    {
      id: 10,
      title: "Ice-Cream",
      category: "Dessert",
      price: 60,
      img: "./images/icecream.jpeg",
      desc: `Get a scoop of deliciuos ice-cream with a variety of toppings. Comes in 31 original flavours from Baskin Robins`,
    },
  ];

//   After extracting the info
const SectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded",function(){
    DisplayItems(info);
});

function DisplayItems(itemInfo)
{
    let displayMenu = itemInfo.map(function (item) {
        // console.log(item);
        return ` <article class="menu-item">
        <img src="${item.img}" class="photo" alt="image of ${item.title}">
        <div class="item-info">
            <header>
                <h3>${item.title}</h3>
                <h4 class="price"> ₹${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article> 
   `;
    });
    displayMenu = displayMenu.join("");
    console.log(displayMenu);
    SectionCenter.innerHTML=displayMenu;
}
