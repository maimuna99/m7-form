export default function Select({ id, Options }) {
  return (
    <select id={id}>
      {Options.map((option) => {
        return <option value={option.value}>{option.text}</option>;
      })}
    </select>
  );
}
