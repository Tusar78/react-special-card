import styled from "styled-components";
import Title from "../Components/Title";

const StyledTitle = styled(Title)`
  color: ${(props) => props.color};
`;

export { StyledTitle };