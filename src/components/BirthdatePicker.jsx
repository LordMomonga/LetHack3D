import React, { useState, useEffect } from 'react';

const BirthdatePicker = ({ formData, handleChange, errors }) => {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');

    useEffect(() => {
        if (formData.dateNaissance) {
            const [y, m, d] = formData.dateNaissance.split('-');
            setYear(y);
            setMonth(m);
            setDay(d);
        }
    }, [formData.dateNaissance]);

    const handleYearChange = (e) => {
        const selectedYear = e.target.value;
        setYear(selectedYear);
        updateDate(selectedYear, month, day);
    };

    const handleMonthChange = (e) => {
        const selectedMonth = e.target.value;
        setMonth(selectedMonth);
        updateDate(year, selectedMonth, day);
    };

    const handleDayChange = (e) => {
        const selectedDay = e.target.value;
        setDay(selectedDay);
        updateDate(year, month, selectedDay);
    };

    const updateDate = (y, m, d) => {
        if (y && m && d) {
            handleChange({
                target: {
                    name: 'dateNaissance',
                    value: `${y}-${m}-${d}`,
                },
            });
        }
    };

    const generateYearOptions = () => {
        const currentYear = new Date().getFullYear();
        let years = [];
        for (let i = (currentYear - 10); i >= 1920; i--) {
            years.push(i);
        }
        return years;
    };

    const generateMonthOptions = () => {
        return Array.from({ length: 12 }, (_, k) => k + 1);
    };

    const generateDayOptions = () => {
        return Array.from({ length: 31 }, (_, k) => k + 1);
    };

    return (
        <div>
            <label htmlFor="dateNaissance" className="block mb-2 text-sm font-bold text-writing dark:text-white">
                Date de Naissance*
            </label>
            <div className="grid grid-cols-3 space-x-2">
                <select
                    value={year}
                    onChange={handleYearChange}
                    className={`${errors.dateNaissance && "!ring-red-500/50 ring-2"} bg-gray-50 outline-none text-gray-900 rounded-xl focus:ring-2 focus:ring-gray-300 dark:bg-dark-accent dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary p-3`}
                >
                    <option value="">Année</option>
                    {generateYearOptions().map((year) => (
                        <option key={year} value={year.toString()}>
                            {year}
                        </option>
                    ))}
                </select>
                <select
                    value={month}
                    onChange={handleMonthChange}
                    className={`${errors.dateNaissance && "!ring-red-500/50 ring-2"} bg-gray-50 outline-none text-gray-900 rounded-xl focus:ring-2 focus:ring-gray-300 dark:bg-dark-accent dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary p-3`}
                >
                    <option value="">Mois</option>
                    {generateMonthOptions().map((month) => (
                        <option key={month} value={month.toString().padStart(2, '0')}>
                            {month}
                        </option>
                    ))}
                </select>
                <select
                    value={day}
                    onChange={handleDayChange}
                    className={`${errors.dateNaissance && "!ring-red-500/50 ring-2"} bg-gray-50 outline-none text-gray-900 rounded-xl focus:ring-2 focus:ring-gray-300 dark:bg-dark-accent dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary p-3`}
                >
                    <option value="">Jour</option>
                    {generateDayOptions().map((day) => (
                        <option key={day} value={day.toString().padStart(2, '0')}>
                            {day}
                        </option>
                    ))}
                </select>
            </div>
            <span className="text-red-400 text-sm">{errors.dateNaissance && errors.dateNaissance}</span>
        </div>
    );
};

export default BirthdatePicker;
