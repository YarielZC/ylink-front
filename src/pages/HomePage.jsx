import Href from "../components/Href/Href";

function HomePage() {
    return <>
        <Loader></Loader>
        <h1>HomePage</h1>

        <Href to="/register">
          Link
        </Href>
    </>
}

export default HomePage;