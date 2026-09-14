const container = document.getElementById("container");
const form = document.querySelector("form");
const AddContact = document.getElementById("add-contact");
const contactsNumber = document.querySelector("h3");
const contactList = [];
let id = contactList.length;

AddContact.addEventListener("click", (e) => {
    e.preventDefault();
    const contact = {
        id: id + 1,
        [form.fullname.name]: form.fullname.value,
        [form.email.name]: form.email.value,
        [form.number.name]: form.number.value
    };
    contactList.push(contact);
    id = contactList.length;
    contactsNumber.textContent = `Contacts(${id})`;
    container.innerHTML += `
    <div id="contact-${id}">
        <p>${form.fullname.value}</p>
        <p>${form.email.value}</p>
        <p>${form.number.value}</p>
        <button onclick="deleteFunc(event)">Delete</button>
    </div>`;
    form.fullname.value = "";
    form.email.value = "";
    form.number.value = "";
});

const deleteFunc = (e) => {
    e.target.parentElement.remove();
    const num = contactList.findIndex((i) => {
        return e.target.parentElement.id === `Contacts(${i.id})`;
    });
    contactList.splice(num, 1);
    id = contactList.length;
    contactsNumber.textContent = `Contacts(${id})`;
};