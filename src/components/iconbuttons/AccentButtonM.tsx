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

function AccentButtonM() {
  return (
    <Button>
      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.70504 1.41L6.29504 0L0.295044 6L6.29504 12L7.70504 10.59L3.12504 6L7.70504 1.41Z"
          fill="white"
        />
      </svg>
    </Button>
  );
}

export { AccentButtonM };
