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
  width: 3.2rem;
  height: 3.2rem;

  // background-color: $color-white;
  background-color: #ffffff;

  &:hover {
    background-color: rgba(255, 127, 15, 0.1);
  }

  &:active {
    background-color: rgba(255, 127, 15, 0.2);
  }

  &:focus {
    background-color: #ffffff;
    border: 0.2rem solid #746ae9;
  }
`;

function TertiaryButtonM() {
  return (
    <Button>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
          fill="#143149"
        />
      </svg>
    </Button>
  );
}

export { TertiaryButtonM };
