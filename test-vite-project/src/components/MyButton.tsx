import styled from "styled-components";

interface MyButtonProps {
  text: string;
  onClick: () => void;
}

const MyButton = (props: MyButtonProps) => {
  const Button = styled.button`
    background-color: antiquewhite;
    color: brown;
    text-transform: none;
    font-size: 16px;
    font-weight: 600;
  `;
  return <Button onClick={props.onClick}>{props.text}</Button>;
};

export default MyButton;
