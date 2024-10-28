import React from 'react'
import './ContactUsForm.css'

//non usable form only for graphic purpose

function ContactUsForm() {
  return (
    <section className="containerForm">

	<h1 className="brand"><span>Contact us</span></h1>

	<div className="wrapper">

		<div className="company-info">
			<h3>Blog contact</h3>

			<ul>
				<li><i className="fa fa-road"></i> 44 Main Street</li>
				<li><i className="fa fa-phone"></i> (555) 555-5555</li>
				<li><i className="fa fa-envelope"></i>admin@blogpage.com</li>
			</ul>
		</div>
		<div className="contact">
			<h3>E-mail Us</h3>

			<form id="contact-form">

				<p>
					<label>Name</label>
					<input type="text" name="name" id="name" required></input>
				</p>

				<p>
					<label>Company</label>
					<input type="text" name="company" id="company"></input>
				</p>

				<p>
					<label>E-mail Address</label>
					<input type="email" name="email" id="email" required></input>
				</p>

				<p>
					<label>Phone Number</label>
					<input type="text" name="phone" id="phone"></input>
				</p>

				<p className="full">
					<label>Message</label>
					<textarea name="message" id="message"></textarea>
				</p>

				<p className="full">
					<button type="submit">Submit</button>
				</p>

			</form>
		</div>

	</div>
</section>
  )
}

export default ContactUsForm