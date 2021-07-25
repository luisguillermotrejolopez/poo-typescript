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
var Operacion = /** @class */ (function () {
    function Operacion(v1, v2) {
        this.resultado = 0;
        this.valor1 = v1;
        this.valor2 = v2;
    }
    Operacion.prototype.imprimir = function () {
        console.log("Resultado de la operaci\u00F3n: " + this.resultado);
    };
    return Operacion;
}());
var Suma = /** @class */ (function (_super) {
    __extends(Suma, _super);
    function Suma(valor1, valor2) {
        return _super.call(this, valor1, valor2) || this;
    }
    Suma.prototype.operar = function () {
        this.resultado = this.valor1 + this.valor2;
    };
    return Suma;
}(Operacion));
var Resta = /** @class */ (function (_super) {
    __extends(Resta, _super);
    function Resta(valor1, valor2) {
        return _super.call(this, valor1, valor2) || this;
    }
    Resta.prototype.operar = function () {
        this.resultado = this.valor1 - this.valor2;
    };
    return Resta;
}(Operacion));
var suma1;
suma1 = new Suma(10, 4);
suma1.operar();
suma1.imprimir();
var resta1;
resta1 = new Resta(10, 4);
resta1.operar();
resta1.imprimir();
