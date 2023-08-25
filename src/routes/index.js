// Layouts
import { HeaderOnly } from "~/components/Layout";

import Home from "~/pages/Home";
import Profile from "~/pages/Profile";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
// Public routes no log in
export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/following",
    component: Following,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/upload",
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: "/search",
    component: Search,
    layout: null,
  },
];

// Public routes must log in
export const privateRoutes = [];
