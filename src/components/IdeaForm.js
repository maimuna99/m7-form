import Input from "./Input";
import Select from "./Select";
export default function IdeaForm() {
  function onSubmit(event) {
    event.preventDefault();

    alert("Form Submitted");
  }
  const ArrayOfOptions = [
    { value: "", text: "Select..." },
    { value: "notmuch", text: "Not much" },
    { value: "medium", text: "Medium" },
    { value: "alot", text: "A lot" }
  ];

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <Input id={"name"} required={"required"} pattern={"[a-z0-9._%+-]"} />
      </div>
      <div>
        <label htmlFor="email">Email</label>

        <Input
          id={"email"}
          pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"}
          required={"required"}
        />
      </div>
      <div>
        <label htmlFor="funding">Funding need</label>

        <Select id={"funding"} Options={ArrayOfOptions} />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" />
      </div>
      <button type="submit">Submit idea</button>
    </form>
  );
}
