import { Routes, Route } from "react-router-dom";
import { CalendarScreen } from "../components/calendar/CalendarScreen";

export const DashboardRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={ <CalendarScreen /> } />
      </Routes>
  )
}
