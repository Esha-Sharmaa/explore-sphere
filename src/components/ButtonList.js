import Button from "./Button";

const ButtonList = () => {
    return (
      <div>
        <Button name={`All`} />
        <Button name={`JavaScript`} />
        <Button name={`Tanmay Bhat`} />
        <Button name={`Movies`} />
        <Button name={`Songs`} />
        <Button name={`Comedy`} />
        <Button name={`Crime`} />
        <Button name={`K-pop`} />
        <Button name={`Live`} />
        <Button name={`Recently Uploaded`} />
      </div>
    );
}

export default ButtonList;
