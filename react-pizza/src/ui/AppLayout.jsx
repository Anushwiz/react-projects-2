/* eslint-disable no-unused-vars */
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./Loading";

function AppLayout() {
  const navigation = useNavigation();

  let isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen  grid-rows-[auto_1fr_auto]">
      {isLoading && <Loading />}

      <Header />
      <div className="overflow-scroll">
        <main className="max-w-3xl mx-auto b">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
