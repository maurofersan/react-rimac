import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserPage, PlansPage, SummaryPage } from "@/pages";
import NotFound from "@/shared/components/notFound/NotFound";
import { PrivateRoute } from "@/shared/components/privateRoute/PrivateRoute";
import RootLayout from "../layout/RootLayout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <UserPage />,
        },
        {
          element: <PrivateRoute />,
          children: [
            {
              path: "planes",
              element: <PlansPage />,
            },
            {
              path: "resumen",
              element: <SummaryPage />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  { basename: "/react-rimac" }
);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
