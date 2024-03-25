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
  width: 3.2rem;
  height: 3.2rem;

  // background-color: $color-white;
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

function OutlinedButtonM() {
  return (
    <Button>
      <svg
        width="22"
        height="16"
        viewBox="0 0 22 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18 4L14 8H17C17 11.31 14.31 14 11 14C9.99 14 9.03 13.75 8.2 13.3L6.74 14.76C7.97 15.54 9.43 16 11 16C15.42 16 19 12.42 19 8H22L18 4ZM5 8C5 4.69 7.69 2 11 2C12.01 2 12.97 2.25 13.8 2.7L15.26 1.24C14.03 0.46 12.57 0 11 0C6.58 0 3 3.58 3 8H0L4 12L8 8H5Z"
          fill="#143149"
        />
      </svg>
    </Button>
  );
}

export { OutlinedButtonM };
