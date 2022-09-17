import Home from "../components/mainScreen/Home/Home";
import RequireAuth from "../components/hoc/RequireAuth";
import News from "../components/mainScreen/Pages/News/News";
import About from "../components/mainScreen/Pages/About/About";
import Profile from "../components/mainScreen/Pages/Profile/Profile";
import LogIn from "../components/startScreen/LogInScreen/LogIn/LogIn";
import Settings from "../components/mainScreen/Pages/Settings/Settings";
import SignUp from "../components/startScreen/SignUpScreen/SignUp/SignUp";
import Employees from "../components/mainScreen/Pages/Employees/Employees";
import Patients from "../components/mainScreen/Pages/WithTable/Patients/Patients";
import EmployeePage from "../components/mainScreen/Pages/EmployeePage/EmployeePage";
import ForgotPassword from "../components/startScreen/ForgotPassword/ForgotPassword";
import Admissions from "../components/mainScreen/Pages/WithTable/Admissions/Admissions";
import EditProfile from "../components/mainScreen/Pages/Settings/EditProfile/EditProfile";
import MakeAppointment from "../components/mainScreen/Pages/MakeAppointment/MakeAppointment";
import Appointments from "../components/mainScreen/Pages/WithTable/Apointments/Appointments";

export const generalRoutes = [
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/home",
    element: (
      <RequireAuth>
        <Home />
      </RequireAuth>
    ),
    children: [
      { path: "admissions", element: <Admissions /> },
      { path: "appointments", element: <Appointments /> },
      { path: "appointments/make-appointment", element: <MakeAppointment /> },
      { path: "patients", element: <Patients /> },
      { path: "news", element: <News /> },
      { path: "employees", element: <Employees /> },
      { path: "employees/:name", element: <EmployeePage /> },
      { path: "about", element: <About /> },
      { path: "profile", element: <Profile /> },
      {
        path: "settings",
        element: <Settings />,
        children: [{ path: "edit-profile", element: <EditProfile /> }],
      },
    ],
  },
];
