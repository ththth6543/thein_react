import useFetch from "./useFetch";

export default function MyUseFetch1() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <div>
      <h1>my useFetch 1</h1>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
}
