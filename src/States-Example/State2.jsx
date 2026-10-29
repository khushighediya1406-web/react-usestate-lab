import { useState } from "react";

function State2() {
    const [user, setUser] = useState({
        name: "",
        password: "",
        email: "",
        contactno: ""
    });

    const [result, setResult] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted data:", user);
        setResult(user)
        setUser({
            name: "",
            password: "",
            email: "",
            contactno: ""
        })
    }
    return (
        <>
            <h1>Form Handling!!</h1>
            <form onSubmit={handleSubmit}>
                <label>Name
                    <input type="text" name="Name" value={user.name}
                        onChange={(e) => { setUser({ ...user, name: e.target.value }) }} />
                </label>
                <br />
                <label>Password
                    <input type="password" name="Password" value={user.password}
                        onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
                </label>
                <br />
                <label>Email
                    <input type="email" name="email" value={user.email}
                        onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                </label>
                <br />
                <label>Phone-Number
                    <input type="number" name="number" value={user.contactno}
                        onChange={(e) => { setUser({ ...user, contactno: e.target.value }) }} />
                </label>
                <br />
                <button type="submit">Ok</button>
            </form>
            {result && (
                <>
                    <h2>Result:</h2>
                    <h3>Name:{result.name}</h3>
                    <h3>Password:{result.password}</h3>
                    <h3>Mail:{result.email}</h3>
                    <h3>Mobile-No:{result.contactno}</h3>
                </>
            )}
        </>
    )
}
export default State2;