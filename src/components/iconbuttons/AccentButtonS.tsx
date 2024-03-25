import styled from 'styled-components';
// import styles from '../../styles/_tools.scss'
// import '/src/styles/_tools.scss'

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
  border: none;
  border-radius: 0.8rem;
  width: 2.6rem;
  height: 2.6rem;

  // background-color: $color-secondary-400;
  background-color: #ff7f0f;
  color: #ffffff;

  &:hover {
    background-color: #e26a00;
  }

  &:active {
    background-color: #ffa631;
  }

  &:focus {
    background-color: #ff7f0f;
    border: 0.2rem solid #746ae9;
  }
`;

function AccentButtonS() {
  return (
    <Button>
      <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.77869 1.5575L4.72119 0.5L0.221191 5L4.72119 9.5L5.77869 8.4425L2.34369 5L5.77869 1.5575Z"
          fill="white"
        />
      </svg>
    </Button>
  );
}

export { AccentButtonS };
