import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";

const theme = {
  color:{
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',

  },
}
function App() {
  return (
    <ThemeProvider theme={theme}>
  <>
  <Header/>
    <Container>
      <h1>Hello World</h1>
    </Container>
  </>  
  </ThemeProvider>
  )
}

export default App;
