import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet, useNavigate, useNavigation } from "react-router-dom"; // Import Outlet to render child routes

const AppLayout = () => {

  const navigation = useNavigation();
  console.log(navigation);

  if(navigation.state === "Loading")
     return <Loading/>;
  


  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Renders the child routes */}
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
