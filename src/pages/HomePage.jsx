import Href from "../components/Href/Href";
function HomePage() {
  return <>
    <h1>HomePage</h1>

    <Href to="/register">
      Link
    </Href>
    <Href to="/login">
      Link
    </Href>
  </>
}

export default HomePage;