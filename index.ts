interface Seguridad {
	mensajeInicioSesion: string;
	iniciarSesion();
}

class Usuario implements Seguridad {
	public mensajeInicioSesion: string = `Hola, usted ha iniciado sesión`;

	public iniciarSesion(): string {
		return this.mensajeInicioSesion;
	}

	private imprimirAnioActual(): void {
		console.log('2021');
	}

	protected accederPqrs(): void {
		console.log(`Hola, dejenos su quejas y reclamos`);
		this.imprimirAnioActual();
	}
}

enum Genero {
	Masculino = 'Hombre',
	Femenino = 'Mujer',
}

class UsuarioPremium extends Usuario {
	private nombre: string;
	private apellido: string;
	private genero: Genero = Genero.Femenino;
	private fechaNacimiento: Date;

	constructor() {
		super();
		this.accederPqrs();
	}

	/*constructor(nombre: string) {
		super();
		this.accederPqrs();
		this.nombre = nombre;
	}*/

	public setNombre(nombre: string): void {
		this.nombre = nombre;
	}

	public setApellido(apellido: string): void {
		this.apellido = apellido;
	}

	public setGenero(genero: Genero): void {
		this.genero = genero;
	}

	public setFechaNacimiento(fechaNacimiento: Date): void {
		this.fechaNacimiento = fechaNacimiento;
	}

	public getNombre(): string {
		return this.nombre;
	}

	public getApellido(): string {
		return this.apellido;
	}

	public getGenero(): Genero {
		return this.genero;
	}

	public calcularEdad(): Date {
		let edadCalculada: Date = this.fechaNacimiento;
		return edadCalculada;
	}
}

let miUsuarioGenerico = new Usuario();
console.log(miUsuarioGenerico.iniciarSesion());

/*let miUsuarioPremium: UsuarioPremium = new UsuarioPremium();
miUsuarioPremium.setNombre('Carlos');
console.log(`Así se llama mi usuario actual: ${miUsuarioPremium.getNombre()} y es ${miUsuarioPremium.getGenero()}`);*/

/*let miUsuarioPremium: UsuarioPremium = new UsuarioPremium('Steven');
miUsuarioPremium.setGenero(Genero.Masculino);
console.log(`Así se llama mi usuario actual: ${miUsuarioPremium.getNombre()} y es ${miUsuarioPremium.getGenero()}`);*/
