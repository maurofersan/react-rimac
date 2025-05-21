import { UserPage, PlansPage, SummaryPage } from "@/pages";
import NotFound from "@/shared/components/notFound/NotFound";
import { PrivateRoute } from "@/shared/components/privateRoute/PrivateRoute";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
      <Route path="/planes" element={<PrivateRoute />}>
        <Route index element={<PlansPage />} />
      </Route>
      <Route path="/resumen" element={<PrivateRoute />}>
        <Route index element={<SummaryPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
