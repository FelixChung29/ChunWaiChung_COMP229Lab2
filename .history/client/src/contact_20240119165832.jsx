export default function Contact() {
     return (
     <>
     <p>Contact</p>
     <form>
		
			
				<label for="myFName"> *First Name: </label>
				<input type="text" id="myFName" name="myFName" required="required" autofocus /> <br /> <br />
				
				<label for="myLName"> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
				
				
				<label for="myEmail"> *Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />
				
				<input type="submit" class="submit" value="Submit" /> <br />
					
		
		</form> <br>
 <p><i>Call me on: <strong>888.555.5555 </strong></i></p>
 <p>facebook:</p>
 <a href="mailto:blessjiboye@yahoo.com">email</a>
 
<div></div>
 <footer>

 <i><small>Copyright &copy; Blessing Ajiboye</i></small>
 </footer>
  </div>

     </>
     );
     }
    