import { Request, Response } from "express";

// principais tipos TS - tipos primitivos
const nome: string = "Jean";
let idade: number = 26;
let check: boolean = true;

function convertSalary(salary: number): number {
	return salary + salary * 0.3;
}

function convertCLTToPJ(req: Request, res: Response) {
	const { salary } = req.query;

	const newSalary = convertSalary(Number(salary));

	res.send({
		resultado: `Seu salário deve ser pelo menos ${newSalary}`,
	});
}

export { convertCLTToPJ };
