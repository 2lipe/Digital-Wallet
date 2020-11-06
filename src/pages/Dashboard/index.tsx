import React, { useMemo, useState } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieGrafic from '../../components/PieGrafic';
import HistoryGrafic from '../../components/HistoryGrafic';
import BarGrafic from '../../components/BarGrafic';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';
import curiousImg from '../../assets/curious.svg';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import listOfMonths from '../../utils/months';
import {
  captureMonth,
  captureYear,
  handleMonthSelected,
  handleYearSelected,
} from '../../utils/functions';

import * as S from './styled';

const Dashboard = () => {
  const [monthSelected, setMonthSelected] = useState<number>(captureMonth);
  const [yearSelected, setYearSelected] = useState<number>(captureYear);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];
    const entriesAndOuts = [...expenses, ...gains];

    entriesAndOuts.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      const yearIsNotIncludeInsideList = !uniqueYears.includes(year);
      if (yearIsNotIncludeInsideList) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return { value: year, label: year };
    });
  }, []);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return { value: index + 1, label: month };
    });
  }, []);

  const totalExpenses = useMemo(() => {
    let total = 0;

    expenses.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      const isSelectedMonthAndMonth =
        month === monthSelected && year === yearSelected;
      if (isSelectedMonthAndMonth) {
        try {
          total += Number(item.amount);
        } catch (error) {
          throw new Error('Valor inválido! o valor precisa ser um número.');
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total = 0;

    gains.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      const isSelectedMonthAndYear =
        month === monthSelected && year === yearSelected;
      if (isSelectedMonthAndYear) {
        try {
          total += Number(item.amount);
        } catch (error) {
          throw new Error('Valor inválido! o valor precisa ser um número.');
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalExpenses, totalGains]);

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: 'Que triste!',
        description: 'Neste mês, você gastou mais do que deveria.',
        footerText:
          'Verifique seus gastos e tente cortar algumas coisas desnecessárias.',
        icon: sadImg,
      };
    } else if (totalGains === 0 && totalExpenses === 0) {
      return {
        title: 'Ops!',
        description: 'Neste mês, não há registros de entradas ou saídas',
        footerText:
          'Parece que você não fez nenhum registro no mês e ano selecionado',
        icon: curiousImg,
      };
    } else if (totalBalance === 0) {
      return {
        title: 'Ufa!',
        description: 'Neste mês, você gastou exatamente o que ganhou',
        footerText:
          'Tenha cuidado no próximo mês tente poupar um pouco do seu dinheiro',
        icon: grinningImg,
      };
    } else {
      return {
        title: 'Muito bem!',
        description: 'Sua carteira está positiva',
        footerText: 'Continue assim. Considere investir o seu dinheiro.',
        icon: happyImg,
      };
    }
  }, [totalBalance, totalExpenses, totalGains]);

  const relationWithExpenseAndGains = useMemo(() => {
    const total = totalGains + totalExpenses;

    const percentGains = Number(((totalGains / total) * 100).toFixed(1));
    const percentExpenses = Number(((totalExpenses / total) * 100).toFixed(1));

    const data = [
      {
        name: 'Entradas',
        value: totalExpenses,
        percent: percentGains,
        color: '#F7931B',
      },
      {
        name: 'Saídas',
        value: totalExpenses,
        percent: percentExpenses,
        color: '#E44C4E',
      },
    ];

    return data;
  }, [totalGains, totalExpenses]);

  const relationWithEventualAndRecurrentExpenses = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    expenses
      .filter((expense) => {
        const date = new Date(expense.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        const isMonthAndYearSelected =
          month === monthSelected && year === yearSelected;

        return isMonthAndYearSelected;
      })
      .forEach((expense) => {
        const isExpenseFrequencyRecurrent = expense.frequency === 'recorrente';
        const isExpenseFrequencyEventual = expense.frequency === 'eventual';

        if (isExpenseFrequencyRecurrent) {
          return (amountRecurrent += Number(expense.amount));
        }

        if (isExpenseFrequencyEventual) {
          return (amountEventual += Number(expense.amount));
        }
      });

    const total = amountRecurrent + amountEventual;
    const percentEventual = Number(((amountEventual / total) * 100).toFixed(1));
    const percentRecurrent = Number(
      ((amountRecurrent / total) * 100).toFixed(1),
    );

    return [
      {
        name: 'Recorrentes',
        amount: amountRecurrent,
        percent: percentRecurrent,
        color: '#F7931B',
      },
      {
        name: 'Eventuais',
        amount: amountEventual,
        percent: percentEventual,
        color: '#E44C4E',
      },
    ];
  }, [monthSelected, yearSelected]);

  const relationWithEventualAndRecurrentGains = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    gains
      .filter((gain) => {
        const date = new Date(gain.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        const isMonthAndYearSelected =
          month === monthSelected && year === yearSelected;

        return isMonthAndYearSelected;
      })
      .forEach((gain) => {
        const isGainFrequencyRecurrent = gain.frequency === 'recorrente';
        const isGainFrequencyEventual = gain.frequency === 'eventual';

        if (isGainFrequencyRecurrent) {
          return (amountRecurrent += Number(gain.amount));
        }

        if (isGainFrequencyEventual) {
          return (amountEventual += Number(gain.amount));
        }
      });

    const total = amountRecurrent + amountEventual;
    const percentEventual = Number(((amountEventual / total) * 100).toFixed(1));
    const percentRecurrent = Number(
      ((amountRecurrent / total) * 100).toFixed(1),
    );

    return [
      {
        name: 'Recorrentes',
        amount: amountRecurrent,
        percent: percentRecurrent,
        color: '#F7931B',
      },
      {
        name: 'Eventuais',
        amount: amountEventual,
        percent: percentEventual,
        color: '#E44C4E',
      },
    ];
  }, [monthSelected, yearSelected]);

  const historyData = useMemo(() => {
    return listOfMonths
      .map((_, month) => {
        let amountEntry = 0;
        gains.forEach((gain) => {
          const date = new Date(gain.date);
          const gainMonth = date.getMonth();
          const gainYear = date.getFullYear();

          const isGainMonthAndGainYear =
            gainMonth === month && gainYear === yearSelected;

          if (isGainMonthAndGainYear) {
            try {
              amountEntry += Number(gain.amount);
            } catch (error) {
              throw new Error(
                'Número de entrada inválido. A entrada deve ser um número',
              );
            }
          }
        });

        let amountOutput = 0;
        expenses.forEach((expense) => {
          const date = new Date(expense.date);
          const expenseMonth = date.getMonth();
          const expenseYear = date.getFullYear();

          const isExpenseMonthAndExpenseYear =
            expenseMonth === month && expenseYear === yearSelected;

          if (isExpenseMonthAndExpenseYear) {
            try {
              amountOutput += Number(expense.amount);
            } catch (error) {
              throw new Error(
                'Número de saída inválido. A saída deve ser um número',
              );
            }
          }
        });

        return {
          monthNumber: month,
          month: listOfMonths[month].substr(0, 3),
          amountEntry,
          amountOutput,
        };
      })
      .filter((item) => {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        const isCurrentMonthAndCurrentYearOrPassedYear =
          (yearSelected === currentYear && item.monthNumber <= currentMonth) ||
          yearSelected < currentYear;

        return isCurrentMonthAndCurrentYearOrPassedYear;
      });
  }, [yearSelected]);

  return (
    <S.Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput
          options={months}
          onChange={({ target }) =>
            handleMonthSelected(target.value, setMonthSelected)
          }
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={({ target }) =>
            handleYearSelected(target.value, setYearSelected)
          }
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <S.Content>
        <WalletBox
          title="saldo"
          amount={totalBalance}
          footerLabel="atualizado com base nas entradas e saidas"
          icon="dolar"
          color="#4E41F0"
        />
        <WalletBox
          title="entradas"
          amount={totalGains}
          footerLabel="atualizado com base nas entradas e saidas"
          icon="arrowUp"
          color="#F7931B"
        />
        <WalletBox
          title="saídas"
          amount={totalExpenses}
          footerLabel="atualizado com base nas entradas e saidas"
          icon="arrowDown"
          color="#E44C4E"
        />

        <MessageBox
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />

        <PieGrafic data={relationWithExpenseAndGains} />

        <HistoryGrafic
          data={historyData}
          lineColorAmountEntry="#F7931B"
          lineColorAmountOutput="#E44C4E"
        />

        <BarGrafic
          data={relationWithEventualAndRecurrentExpenses}
          title="Saídas"
        />
        <BarGrafic
          data={relationWithEventualAndRecurrentGains}
          title="Entradas"
        />
      </S.Content>
    </S.Container>
  );
};

export default Dashboard;
