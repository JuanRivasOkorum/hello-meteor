import React, { useState } from "react"
import { ContactsCollection } from "../api/ContactsColection";

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [imageUrl, setImageUrl] = useState("");


    const saveContact = () => {
        ContactsCollection.insert({name, email, imageUrl});
        setName("");
        setEmail("");
        setImageUrl("");
    }

    return (
        <form action="">
            <div>
                <label htmlFor="name">
                    Name
                </label>
                <input
                    id='name'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="imageUrl">imageUrl</label>
                <input
                    type="text"
                    id='imageUrl'
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)} />
            </div>
            <div>
                <button
                    type='button'
                    onClick={saveContact}>Save Contact</button>
            </div>
        </form>
    )
}