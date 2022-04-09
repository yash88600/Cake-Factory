import Icon from './img/2coverpage.png';
import cake1 from './img/cake1.png';
import cake2 from './img/cake2.png';
import cake3 from './img/cake3.png';

function CoverImage()
{
    const myimage = new Image();
    myimage.src = Icon;
    myimage.setAttribute('id', 'coverImage');
    return myimage;
}

function MainMessage()
{
    const mainMessage = document.createElement('div');
    mainMessage.setAttribute("id", "mainMessage");
    mainMessage.textContent = "Welcome to the \n World of Cakes";

    return mainMessage;

}

function About()
{
    const aboutFrame = document.createElement('div');
    aboutFrame.setAttribute("id", "aboutFrame");

    const aboutTitle = document.createElement('div');
    aboutTitle.setAttribute("id", "aboutTitle");
    aboutTitle.textContent = 'About Us';

    const aboutMessage = document.createElement('div');
    aboutMessage.setAttribute("id", "aboutMessage");
    aboutMessage.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    aboutFrame.appendChild(aboutTitle);
    aboutFrame.appendChild(aboutMessage);

    return aboutFrame;
}

function Samples()
{
    const sampleFrame = document.createElement('div');
    sampleFrame.setAttribute("id", "sampleFrame");

    const customerFav = document.createElement('div');
    customerFav.setAttribute("id", "customerFav");
    customerFav.textContent = "Customer Favorites";
    sampleFrame.appendChild(customerFav);

    const cakesframe = document.createElement('div');
    cakesframe.setAttribute("id", "cakesframe");
    sampleFrame.appendChild(cakesframe);

    let cakes = [cake1, cake2, cake3];
    let cakecontent = ['Chocolate Truffle','Black Forest','Choco Lava'];
    for(let i=0;i<3;i++)
    {
        const sample= document.createElement('div');
        sample.setAttribute("id", "sample");

        const myimage = new Image();
        myimage.src = cakes[i];
        myimage.setAttribute('id', 'cakeimg');

        const cakename= document.createElement('div');
        cakename.setAttribute("id", "cakename");
        cakename.textContent = cakecontent[i];

        sample.appendChild(myimage);
        sample.appendChild(cakename);
        cakesframe.appendChild(sample);
    }
    return sampleFrame;
}

function footerPage()
{
    const footerFrame = document.createElement('div');
    footerFrame.setAttribute("id", "footerFrame");

    const deliver = document.createElement('div');
    deliver.setAttribute("id", "deliver");
    deliver.textContent = 'We deliver to';

    const cities = document.createElement('ul');
    cities.setAttribute("id", "cities");

    let citiesList = ['Pune', 'Mumbai', 'Bangalore', 'Noida', 'Gurgaon', 'New Delhi', 'Hyderabad', 'Chennai',
                'Indore', 'Nagpur', 'Faridabad', 'Ahmedabad', 'Ghaziabad', 'Coimbatore', 'Dubai', 'Vadodara', 'Bhopal', 'Kolkata'];
    for(let i=0;i<12;i++)
    {
        const city = document.createElement('li');
        city.setAttribute("id", "city");
        city.textContent = citiesList[i];
        cities.appendChild(city);
    }

    footerFrame.appendChild(deliver);
    footerFrame.appendChild(cities);

    return footerFrame;
}
export { CoverImage, MainMessage,  About, Samples, footerPage};