// components/ContactForm.js
const ContactForm = () => (
    <section className="p-4">
      <h2 className="text-xl mb-2">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block">Name</label>
          <input type="text" id="name" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="email" className="block">Email</label>
          <input type="email" id="email" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="message" className="block">Message</label>
          <textarea id="message" className="border p-2 w-full"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2">Submit</button>
      </form>
    </section>
  );
  
  export default ContactForm;
  