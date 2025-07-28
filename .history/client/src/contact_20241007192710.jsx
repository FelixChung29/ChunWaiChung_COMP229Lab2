import '../src/contact.css'
import 
export default function Contact() {
     return (
     <>
     <p>Contact</p>
     <form id="ffp">
		
			
				<label htmlFor="myFName"> *First Name: </label>
				<input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
				
				<label htmlFor="myLName"> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
				
				
				<label htmlFor="myEmail"> *Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />
				
				<input type="submit" className="submit" value="Submit" /> <br />
					
		
		</form> <br></br>
          <p><i>Call me on: <strong>888.555.5555 </strong></i></p>
 <p>facebook:www.xyz.facebook.com</p>
 <p>email:xyz@yahoo.com</p>
     </>
     );
     }
    

    /* import '../src/contact.css';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        myFName: '',
        myLName: '',
        myEmail: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission

        try {
            const response = await fetch('http://localhost:3000/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Success:', result);
            alert('Data saved successfully!');
            // Optionally reset the form
            setFormData({
                myFName: '',
                myLName: '',
                myEmail: '',
            });
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error saving the data.');
        }
    };

    return (
        <>
            <p>Contact</p>
            <form id="ffp" onSubmit={handleSubmit}>
                <label htmlFor="myFName"> *First Name: </label>
                <input
                    type="text"
                    id="myFName"
                    name="myFName"
                    value={formData.myFName}
                    onChange={handleChange}
                    required
                    autoFocus
                />
                <br />
                <br />

                <label htmlFor="myLName"> *Last Name: </label>
                <input
                    type="text"
                    id="myLName"
                    name="myLName"
                    value={formData.myLName}
                    onChange={handleChange}
                    required
                />
                <br />
                <br />

                <label htmlFor="myEmail"> *Email: </label>
                <input
                    type="email"
                    id="myEmail"
                    name="myEmail"
                    value={formData.myEmail}
                    onChange={handleChange}
                    required
                />
                <br />
                <br />

                <input type="submit" className="submit" value="Submit" />
                <br />
            </form>
            <br />
            <p>
                <i>Call me on: <strong>888.555.5555 </strong></i>
            </p>
            <p>facebook: www.xyz.facebook.com</p>
            <p>email: xyz@yahoo.com</p>
        </>
    );
}
*/