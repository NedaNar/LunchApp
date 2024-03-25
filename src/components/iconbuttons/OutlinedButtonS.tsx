import styled from 'styled-components';
// import styles from '../../styles/_tools.scss'
// import '/src/styles/_tools.scss'

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
  border: 0.1rem solid #ffa631;
  border-radius: 0.8rem;
  width: 2.6rem;
  height: 2.6rem;

  // background-color: $color-white:;
  background-color: #ffffff;

  &:hover {
    background-color: #fef5ed;
  }

  &:active {
    background-color: #ffe9d6;
  }

  &:focus {
    background-color: #ffffff;
    border: 0.2rem solid #746ae9;
  }
`;

function OutlinedButtonS() {
  return (
    <Button>
      <svg
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.25 3L11.25 6H13.5C13.5 8.4825 11.4825 10.5 9 10.5C8.2425 10.5 7.5225 10.3125 6.9 9.975L5.805 11.07C6.7275 11.655 7.8225 12 9 12C12.315 12 15 9.315 15 6H17.25L14.25 3ZM4.5 6C4.5 3.5175 6.5175 1.5 9 1.5C9.7575 1.5 10.4775 1.6875 11.1 2.025L12.195 0.93C11.2725 0.345 10.1775 0 9 0C5.685 0 3 2.685 3 6H0.75L3.75 9L6.75 6H4.5Z"
          fill="#143149"
        />
      </svg>
    </Button>
  );
}

export { OutlinedButtonS };
