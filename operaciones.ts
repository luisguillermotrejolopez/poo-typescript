abstract class Operacion {
	public valor1: number;
	public valor2: number;
	public resultado: number = 0;

	constructor(v1: number, v2: number) {
		this.valor1 = v1;
		this.valor2 = v2;
	}

	public abstract operar(): void;

	public imprimir() {
		console.log(`Resultado de la operación: ${this.resultado}`);
	}
}

class Suma extends Operacion {
	constructor(valor1: number, valor2: number) {
		super(valor1, valor2);
	}

	public operar(): void {
		this.resultado = this.valor1 + this.valor2;
	}
}

class Resta extends Operacion {
	constructor(valor1: number, valor2: number) {
		super(valor1, valor2);
	}

	public operar(): void {
		this.resultado = this.valor1 - this.valor2;
	}
}

let suma1: Suma;
suma1 = new Suma(10, 4);
suma1.operar();
suma1.imprimir();

let resta1: Resta;
resta1 = new Resta(10, 4);
resta1.operar();
resta1.imprimir();
