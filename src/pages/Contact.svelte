<script>
	import * as yup from "yup";
	import { Form, Message, isInvalid } from "svelte-yup";
	import Button from "../components/Button.svelte";

	let schema = yup.object().shape({
		name: yup.string().required().max(30).label("Name"),
		email: yup.string().required().email().label("Email address"),
	});

	let fields = {
		email: "",
		name: "",
		yourmessage: ""
	};

	$: invalid = (name) => {
		if(submitted) {
			return isInvalid(schema, name, fields);
		}
		return false;
	}

	let submitted = false;
	let isValid;

	function formSubmit() {
		submitted = true;
		isValid = schema.isValidSync(fields);

		if(isValid) {
			alert("Everything is validated!");
			console.log("Validated fields", fields);
		}
	}
</script>

<style>
  #content { 
    display: flex; 
    column-gap: 80px; 
  }
  
  .form, label { 
    display: flex; 
    flex-direction: column; 
  }
  
  label { 
    padding-top: 10px; 
  }
  
  input { 
    width: 380px; 
    margin-right: 10px; 
  }
  
  textarea { 
    width: 380px; 
  }
  
  .formformat { 
    display: flex; 
  }
  
  .invalid { 
    border-color: red !important; 
  }
  
  .submitbutton { 
    display: flex; 
  }
</style>


<section>
	<h2>Contact Us</h2>
	<div id="banner">
		<img src="images/banner.webp" alt="banner" />
	</div>

	<div id="content">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed odio id nulla gravida rhoncus. Suspendisse potenti. In volutpat nibh non tellus laoreet, vitae faucibus ipsum sollicitudin. Duis viverra pulvinar tempus. Phasellus odio nunc, imperdiet vitae diam quis, sollicitudin pretium massa. Donec molestie mauris id semper sagittis.</p>
		<Form class="form" {schema} {fields} submitHandler={formSubmit} {submitted}>
			<label for="customer"><span class="required">*<span>Name:</span></label>
			<span class="formformat">
				<input type="text" class:invalid={invalid("name")} bind:value={fields.name} placeholder="Name">
				<Message name="name" />
			</span>
			<label for="emailaddress">
				<span class="required">*<span>Email address:</span>
			</label>
			<span class="formformat">
				<input name="emailaddress" type="text" class:invalid={invalid("email")} bind:value={fields.email} placeholder="Email address">
				<Message name="email" />
			</span>
			<label for="yourmessage">Your message:</label>
			<textarea name="yourmessage" cols="50" rows="10" bind:value={fields.yourmessage} placeholder="Enter your message"></textarea>
			<span class="submitbutton">
				<Button type="submit">Submit</Button>
			</span>
		</Form>
	</div>
</section>