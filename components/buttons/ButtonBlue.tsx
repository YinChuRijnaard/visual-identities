type ButtonBlueProps = {
  href: string;
  text: string;
};

const ButtonBlue = (props: ButtonBlueProps) => {
  return (
    <a className="bg-blue-1 px-4 py-2 font-bold text-neutral-100" href={props.href} target="_blank" rel="noreferrer">
      {props.text}
    </a>
  );
};

export default ButtonBlue;
