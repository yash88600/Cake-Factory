import cake1 from './img/cake1.png';
import cake2 from './img/cake2.png';
import cake3 from './img/cake3.png';
import cake4 from './img/cake4.png';
import cake5 from './img/cake5.png';
import cake6 from './img/cake6.png';


let cakes = [cake1, cake2, cake3, cake4, cake5, cake6];
let names = ['Chocolate truffle',
                'Black Forest',
                'Choco Lava',
                'Strawberry Chocolate Cake',
                'Chocolate Cake with Premium Frosting',
                'Roses & Pearls Chocolate'
            ];
let cakeabout = ['this Chocolate Truffle Cake will satisfy any chocolate lovers craving. The cake itself is dense and moist, just like proper chocolate cake should be, and the frosting.',
            'The retro classic Cherry Black Forest 1/2 KG Cake is here with a modern twist. A heavenly combination of whipped cream layered onto moist Chocolate Cake topped with lip-smacking chocolate ganache and red cherries is down to earth straight from the heavens of cakes for you.',
            'Send your wishes with this yummilicious chocolate cake, to your loved ones, making their special moments extra special. The cake will add taste in their mouth and sweetness and pleasure in the occasion.',
            'Their soft petals, that unforgettable familiar sweet smell, roses have their authentic charm. This birthday surprise is all about embracing the beauty of roses! With a rosette chocolate cake and a gold birthday tag, this will be a memorable surprise.',
            'Rejoice the taste of yummilicious Chocolate with Premium frosting, this Delicious Chocolate Cake with Premium Frosting (Half Kg) can turn any event into a sweeter one; share memories over sweet bites with this impeccable dessert option.',
            'Your party table will turn into a celebration of taste and beauty with this Half Kg Roses & Pearls Chocolate Cake. The delicious roses and tiny pearls with deliciousness of mind-blowing chocolate are a feast not worth missing for any party or get-together.'];

let cakeprice = ['Rs 800 (1 KG)', 'Rs 900 (1 KG)', 'Rs 700 (1 KG)', 'Rs 1000 (1 KG)', 'Rs 1400 (1 KG)', 'Rs 1200 (1 KG)'];
function menuPage()
{
    const MenuFrame = document.createElement('div');
    MenuFrame.setAttribute("id", "MenuFrame");

    for(let i=0; i<6; i++)
    {
        const cakeFrame = document.createElement('div');
        cakeFrame.setAttribute("id", "cakeFrame");

        const myimage = new Image();
        myimage.src = cakes[i];
        myimage.setAttribute('id', 'cakeMenu');
        cakeFrame.appendChild(myimage);

        const cakedescription = document.createElement('div');
        cakedescription.setAttribute("id", "cakedescription");

        const cakeName = document.createElement('div');
        cakeName.setAttribute("id", "cakeName");
        cakeName.textContent = names[i];

        const cakeAbout = document.createElement('div');
        cakeAbout.setAttribute("id", "cakeAbout");
        cakeAbout.textContent = cakeabout[i];

        const cakePrice = document.createElement('div');
        cakePrice.setAttribute("id", "cakePrice");
        cakePrice.textContent = cakeprice[i];

        cakedescription.appendChild(cakeName);
        cakedescription.appendChild(cakeAbout);
        cakedescription.appendChild(cakePrice);

        cakeFrame.appendChild(cakedescription);

        MenuFrame.appendChild(cakeFrame);

    }
    return MenuFrame;
}

export {menuPage};