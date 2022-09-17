export function defineUserRole(role) {
	if (role === "client") {
	  return "clients";
	} else if (role === "doctor") {
	  return "doctors";
	} else {
	  return "admin";
	}
  }