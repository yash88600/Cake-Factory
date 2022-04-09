function contactPage()
{
    const contactFrame = document.createElement('div');
    contactFrame.setAttribute("id", "contactFrame");

    const timingFrame = document.createElement('div');
    timingFrame.setAttribute("id", "timingFrame");
    const email = document.createElement('div');
    email.setAttribute("id", "email");
    email.textContent = 'Email: ';
    const emailID = document.createElement('div');
    emailID.setAttribute("id", "emailID");
    emailID.textContent = 'cakefactory@gmail.com';
    timingFrame.appendChild(email);
    timingFrame.appendChild(emailID);

    const locationFrame = document.createElement('div');
    locationFrame.setAttribute("id", "locationFrame");
    const address = document.createElement('div');
    address.setAttribute("id", "address");
    address.textContent = 'Address: ';
    const AddressMain = document.createElement('div');
    AddressMain.setAttribute("id", "AddressMain");
    AddressMain.textContent = 'U-9, U-9, Saffron, Panchvati 1st Lane, Ambawadi, Ahmedabad.';
    const number = document.createElement('div');
    number.setAttribute("id", "number");
    number.textContent = '+91 9890876519, +91 8765239374';
    locationFrame.appendChild(address);
    locationFrame.appendChild(AddressMain);
    locationFrame.appendChild(number);


    contactFrame.appendChild(timingFrame);
    contactFrame.appendChild(locationFrame);

    return contactFrame;
}

export {contactPage};