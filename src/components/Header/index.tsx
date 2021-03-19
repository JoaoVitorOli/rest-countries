import { FaRegMoon } from "react-icons/fa";

import { Container } from "./styles";

interface Props {
  toggleTheme(): void;
}

export default function Header({ toggleTheme }: Props) {
  return (
    <Container>
      <div>
        <h3>Where in the world?</h3>

        <button type="button" onClick={toggleTheme}>
          <FaRegMoon />
          <p>Dark Mode</p>
        </button>
      </div>
    </Container>
  );
}
