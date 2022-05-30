export default function ButtonSmall(props) {
  return (
    <a className="bg-neutral-100 px-4 py-2 font-bold text-black" href={props.href} target="_blank" rel="noreferrer">
      {props.text}
    </a>
  );
}
