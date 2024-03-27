import { Link, Outlet } from "react-router-dom";

const Home = () => {
    return <>
    <div>
        <h1>Recipe Management App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/recipelist">Recipe List</Link>
            </li>
            <li>
              <Link to="/add">Add Recipe</Link>
            </li>
            <li>
              <Link to="/update">Update Recipe #1</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet/>
    </>
}
 
export default Home;