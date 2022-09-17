export const createFilters = (data = []) => {
  const nameFilters = [];
  const surnameFilters = [];

  data.forEach((element, index) => {
    const { name, surname } = element;

    const nameFilter = { text: name, value: name, key: index };
    const surnameFilter = { text: surname, value: surname, key: index };

    if (nameFilters.length === 0 && surnameFilters.length === 0) {
      nameFilters.push(nameFilter);
      surnameFilters.push(surnameFilter);
      return;
    }

    const ifAlreadyContainsName = nameFilters.some(
      (item) => item.text === name
    );
    const ifAlreadyContainsSurname = surnameFilters.some(
      (item) => item.text === surname
    );

    if (!ifAlreadyContainsName) {
      nameFilters.push(nameFilter);
    }

    if (!ifAlreadyContainsSurname) {
      surnameFilters.push(surnameFilter);
    }
  });

  return { nameFilters, surnameFilters };
};
