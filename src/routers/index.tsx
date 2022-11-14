import { BrowserRouter, Route, Routes } from "react-router-dom";

import AccountPage from "containers/AccountPage/AccountPage";
import AuthorPage from "containers/AuthorPage/AuthorPage";
import BlogPage from "containers/BlogPage/BlogPage";
import BlogSingle from "containers/BlogPage/BlogSingle";
import Footer from "shared/Footer/Footer";
import NftDetailPage from "containers/NftDetailPage/NftDetailPage";
import { Page } from "./types";
import Page404 from "containers/Page404/Page404";
import PageAbout from "containers/PageAbout/PageAbout";
import PageCollection from "containers/PageCollection";
import PageConnectWallet from "containers/PageConnectWallet";
import PageContact from "containers/PageContact/PageContact";
import PageHome from "containers/PageHome/PageHome";
import PageHome2 from "containers/PageHome/PageHome2";
import PageHome3 from "containers/PageHome/PageHome3";
<<<<<<< Updated upstream
import UserPage from "containers/UserPage/UserPage";
=======
import PageLogin from "containers/PageLogin/PageLogin";
import PageSearch from "containers/PageSearch";
import PageSignUp from "containers/PageSignUp/PageSignUp";
import PageSubcription from "containers/PageSubcription/PageSubcription";
import PageUploadItem from "containers/PageUploadItem";
import React from "react";
import ScrollToTop from "./ScrollToTop";
import SiteHeader from "containers/SiteHeader";
>>>>>>> Stashed changes

export const pages: Page[] = [
  { path: "/", component: PageHome2 },
  { path: "/user", component: UserPage },
  { path: "/#", component: PageHome2 },
  { path: "/home2", component: PageHome },
  { path: "/home3", component: PageHome3 },
  { path: "/home-header-2", component: PageHome },
  { path: "/nft-detailt", component: NftDetailPage },
  { path: "/page-collection", component: PageCollection },
  { path: "/page-search", component: PageSearch },
  { path: "/page-author", component: AuthorPage },
  { path: "/account", component: AccountPage },
  { path: "/page-upload-item", component: PageUploadItem },
  { path: "/connect-wallet", component: PageConnectWallet },
  { path: "/blog", component: BlogPage },
  { path: "/blog-single", component: BlogSingle },
  { path: "/contact", component: PageContact },
  { path: "/about", component: PageAbout },
  { path: "/signup", component: PageSignUp },
  { path: "/login", component: PageLogin },
  { path: "/subscription", component: PageSubcription },
];

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <SiteHeader /> */}
      <Routes>
        {pages.map(({ component, path }) => {
          const Component = component;
          return <Route key={path} element={<Component />} path={path} />;
        })}
        <Route element={<Page404 />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default MyRoutes;
