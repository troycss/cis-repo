function EventHandle() {
    const handleClick = () => {
      alert('Button clicked!');
    };

    const handleChange = (event) => {
      console.log('Input changed:', event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      alert('Form submitted!');
    };

    return (
      <form onSubmit={handleSubmit}>
        <input onChange ={handleChange} />
        <button onClick= {handleClick}>Submit</button>
      </form>
    );

}