const employees = [
    { name: 'Max', onboardDate: '2008-05-04', gender: 'male' },
    { name: 'Sepp', onboardDate: '2018-12-17', gender: 'male' },
    { name: 'Nina', onboardDate: '2010-07-09', gender: 'female' },
    { name: 'Mike', onboardDate: '2005-01-01', gender: 'male' },
];

const getReportBySeniority = (baseDate, year, isLessThan) => {
    baseDate.setFullYear(baseDate.getFullYear() - year);
    let reportEmps = employees.filter(emp => {
        let obTime = new Date(emp.onboardDate).getTime();
        return isLessThan ? obTime >= baseDate.getTime() : obTime <= baseDate.getTime();
    });
    return reportEmps;
}
module.exports = { getReportBySeniority };