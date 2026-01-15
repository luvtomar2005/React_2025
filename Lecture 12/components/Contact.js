const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>

      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="name"
            className="border border-black p-2 m-2"
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <input
            id="message"
            type="text"
            placeholder="message"
            className="border border-black p-2 m-2"
          />
        </div>

        <button
          type="submit"
          className="border border-black p-2 m-2 bg-gray rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
