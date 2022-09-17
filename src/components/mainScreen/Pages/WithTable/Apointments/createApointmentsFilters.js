export const createApointmentsFilters = (data = []) => {
  const filters = [];

  data.forEach((element, index) => {
    const { doctor } = element;

    const filter = { text: doctor, value: doctor, key: index };

    if (filters.length === 0 ) {
		filters.push(filter);
      return;
    }

    const ifAlreadyContains= filters.some(
      (item) => item.text === doctor
    );
   

    if (!ifAlreadyContains) {
		filters.push(filter);
    }
  });

  return filters;
};
