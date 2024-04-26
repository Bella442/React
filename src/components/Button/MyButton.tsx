import styled from "styled-components";

const Button = styled.button`
  background-color: antiquewhite;
  color: brown;
  text-transform: none;
  font-size: 16px;
  font-weight: 600;
`;

interface MyButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  text: string;
  onClick?: () => void;
}

const MyButton = (props: MyButtonProps) => {
  return (
    <Button type={props.type} onClick={props.onClick}>
      {props.text}
    </Button>
  );
};

export default MyButton;
