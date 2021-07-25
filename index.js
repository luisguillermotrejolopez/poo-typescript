var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Usuario = /** @class */ (function () {
    function Usuario() {
        this.mensajeInicioSesion = "Hola, usted ha iniciado sesi\u00F3n";
    }
    Usuario.prototype.iniciarSesion = function () {
        return this.mensajeInicioSesion;
    };
    Usuario.prototype.imprimirAnioActual = function () {
        console.log('2021');
    };
    Usuario.prototype.accederPqrs = function () {
        console.log("Hola, dejenos su quejas y reclamos");
        this.imprimirAnioActual();
    };
    return Usuario;
}());
var Genero;
(function (Genero) {
    Genero["Masculino"] = "Hombre";
    Genero["Femenino"] = "Mujer";
})(Genero || (Genero = {}));
var UsuarioPremium = /** @class */ (function (_super) {
    __extends(UsuarioPremium, _super);
    function UsuarioPremium() {
        var _this = _super.call(this) || this;
        _this.genero = Genero.Femenino;
        _this.accederPqrs();
        return _this;
    }
    /*constructor(nombre: string) {
        super();
        this.accederPqrs();
        this.nombre = nombre;
    }*/
    UsuarioPremium.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    UsuarioPremium.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    UsuarioPremium.prototype.setGenero = function (genero) {
        this.genero = genero;
    };
    UsuarioPremium.prototype.setFechaNacimiento = function (fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    };
    UsuarioPremium.prototype.getNombre = function () {
        return this.nombre;
    };
    UsuarioPremium.prototype.getApellido = function () {
        return this.apellido;
    };
    UsuarioPremium.prototype.getGenero = function () {
        return this.genero;
    };
    UsuarioPremium.prototype.calcularEdad = function () {
        var edadCalculada = this.fechaNacimiento;
        return edadCalculada;
    };
    return UsuarioPremium;
}(Usuario));
var miUsuarioGenerico = new Usuario();
console.log(miUsuarioGenerico.iniciarSesion());
/*let miUsuarioPremium: UsuarioPremium = new UsuarioPremium();
miUsuarioPremium.setNombre('Carlos');
console.log(`Así se llama mi usuario actual: ${miUsuarioPremium.getNombre()} y es ${miUsuarioPremium.getGenero()}`);*/
/*let miUsuarioPremium: UsuarioPremium = new UsuarioPremium('Steven');
miUsuarioPremium.setGenero(Genero.Masculino);
console.log(`Así se llama mi usuario actual: ${miUsuarioPremium.getNombre()} y es ${miUsuarioPremium.getGenero()}`);*/
