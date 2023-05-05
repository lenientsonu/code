import "./Contact.css";

const ContactPage = () => {
    const saveContactData = (data) => {
        fetch(
            "https://sharpener-projects-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json",
            {
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const contactData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
        };
        const data = JSON.stringify(contactData);
        console.log(data);
        saveContactData(data);
    };

    return (
        <>
            <section>
                <h1>Contact Us</h1>
            </section>
            <form onSubmit={onSubmitHandler}>
                <div className='control'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' />
                </div>
                <div className='control'>
                    <label htmlFor='email'>Email Id</label>
                    <input type='email' id='email' />
                </div>
                <div className='control'>
                    <label htmlFor='phone'>Phone No.</label>
                    <input type='number' id='phone' />
                </div>
                <button>Contact Us</button>
            </form>
        </>
    );
};

export default ContactPage;
