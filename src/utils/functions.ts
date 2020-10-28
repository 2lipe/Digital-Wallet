export const captureMonth = new Date().getMonth() + 1;

export const captureYear = new Date().getFullYear();

export const handleMonthSelected = (month: string, setMonth: React.Dispatch<React.SetStateAction<number>>) => {
  try {
    const parsedMonth = Number(month);
    setMonth(parsedMonth);
  } catch (error) {
    throw new Error('Não foi possível capturar o mês selecionado');
  }
};

export const handleYearSelected = (year: string, setYear: React.Dispatch<React.SetStateAction<number>>) => {
  try {
    const parsedYear = Number(year);
    setYear(parsedYear);
  } catch (error) {
    throw new Error('Não foi possível capturar o ano selecionado');
  }
};
