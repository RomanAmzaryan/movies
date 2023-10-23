import { useDispatch } from "react-redux";
import AppRouter from "./Components/AppRouter/AppRouter";
import { useEffect } from "react";
import { actionUserAuth } from "./store/Slices/userAuth/action";
import { actionCurrentUser } from "./store/Slices/currentUser/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userAuth = JSON.parse(localStorage.getItem('userAuth'));
    if (userAuth) {
      dispatch(actionUserAuth(true));
      dispatch(actionCurrentUser(userAuth));
    }
  }, [dispatch]);
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
