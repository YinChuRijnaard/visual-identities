type ButtonWhiteProps = {
  href: string;
  text: string;
};

const ButtonWhite = (props: ButtonWhiteProps) => {
  return (
    <a className="border-1 border-blue-1 px-4 py-2 font-bold" href={props.href} target="_blank" rel="noreferrer">
      {props.text}
    </a>
  );
};

export default ButtonWhite;
