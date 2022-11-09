function convertSalary(req, res) {
    var salary = req.params.salary;
    var newSalary = Number(salary) + Number(salary) * 0.3;
    res.send({
        resultado: "Seu sal\u00E1rio deve ser pelo menos ".concat(newSalary)
    });
}
export { convertSalary };
