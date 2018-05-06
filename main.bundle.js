webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h1{\r\n    text-align: center;\r\n    padding: 20px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Gestor de pedidos</h1>\n    <app-productos [productos]='lista' (enviar)=\"handleOnEnviar($event)\"></app-productos>\n    <app-pedido [ppedido]='pedido'></app-pedido>\n\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__producto__ = __webpack_require__("./src/app/producto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedido__ = __webpack_require__("./src/app/pedido.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.nombres = ['Ensalada', 'Croquetas', 'Bacalao', 'Hamburguesa', 'Cerveza', 'Vino'];
        this.precios = [9, 7, 19, 10, 3, 3];
        this.imagenes = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
        this.lista = [];
        this.pedido = new __WEBPACK_IMPORTED_MODULE_2__pedido__["a" /* default */]();
        for (var i = 0; i < this.nombres.length; i++) {
            this.lista[i] = new __WEBPACK_IMPORTED_MODULE_1__producto__["a" /* default */](this.nombres[i], this.precios[i], this.imagenes[i]);
        }
    }
    AppComponent.prototype.handleOnEnviar = function ($event) {
        this.pedido.agregarProducto($event);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productos_productos_component__ = __webpack_require__("./src/app/productos/productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pedido_pedido_component__ = __webpack_require__("./src/app/pedido/pedido.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__productos_productos_component__["a" /* ProductosComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pedido_pedido_component__["a" /* PedidoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pedido.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Pedido = /** @class */ (function () {
    function Pedido() {
        this.productos = [];
    }
    Pedido.prototype.agregarProducto = function (pProducto) {
        this.productos.push(pProducto);
        console.log(this.productos);
    };
    Pedido.prototype.calcularPrecio = function () {
        var precio = 0;
        var total = '';
        for (var i = 0; i < this.productos.length; i++) {
            precio += this.productos[i].precio;
        }
        total = String(precio) + ' €';
        return total;
    };
    Pedido.prototype.mostrarPedido = function () {
        var pedido;
        pedido = '';
        for (var i = 0; i < this.productos.length; i++) {
            pedido += this.productos[i].mostrarProducto();
        }
        return pedido;
    };
    return Pedido;
}());
/* harmony default export */ __webpack_exports__["a"] = (Pedido);


/***/ }),

/***/ "./src/app/pedido/pedido.component.css":
/***/ (function(module, exports) {

module.exports = "h2{\r\n    font-size: 22px;\r\n    padding-top: 50px;\r\n    padding-bottom: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.precio, .info{\r\n    padding: 10px 50px;\r\n}\r\n\r\nh3{\r\n    font-size: 18px;\r\n    padding: 10px 0;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pedido/pedido.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>PEDIDO</h2>\n<div class=\"row\">\n  <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 info\">\n    <h3>PRODUCTOS</h3>\n    <div [innerHTML]=\"ppedido.mostrarPedido()\"></div>\n  </div>\n  <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 precio\">\n    <h3>TOTAL</h3>\n    <div>{{ppedido.calcularPrecio()}}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pedido/pedido.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PedidoComponent = /** @class */ (function () {
    function PedidoComponent() {
    }
    PedidoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], PedidoComponent.prototype, "ppedido", void 0);
    PedidoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-pedido',
            template: __webpack_require__("./src/app/pedido/pedido.component.html"),
            styles: [__webpack_require__("./src/app/pedido/pedido.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PedidoComponent);
    return PedidoComponent;
}());



/***/ }),

/***/ "./src/app/producto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Producto = /** @class */ (function () {
    function Producto(nombre, precio, img) {
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
    }
    Producto.prototype.mostrarProducto = function () {
        var prod;
        prod = this.nombre + ' ' + Number(this.precio) + '€<br />';
        return prod;
    };
    return Producto;
}());
/* harmony default export */ __webpack_exports__["a"] = (Producto);


/***/ }),

/***/ "./src/app/productos/productos.component.css":
/***/ (function(module, exports) {

module.exports = "h2{\r\n    text-align: center;\r\n    font-size: 22px;\r\n    padding: 10px 0;\r\n}\r\n\r\n.comida img{\r\n    margin: 0 4px;\r\n    cursor: pointer;\r\n}\r\n\r\n.bebida img{\r\n    margin: 0 1px;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/productos/productos.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 comida\">\n    <h2>COMIDA</h2>\n    <div class=\"comida\">\n      <img width=\"140\" src=\"assets/img/{{productos[0].img}}\" class=\"img-thumbnail rounded\" alt=\"ensalada\" (click)=\"seleccionar(0)\">\n      <img width=\"140\" src=\"assets/img/{{productos[1].img}}\" class=\"img-thumbnail rounded\" alt=\"croquetas\" (click)=\"seleccionar(1)\">\n      <img width=\"140\" src=\"assets/img/{{productos[2].img}}\" class=\"img-thumbnail rounded\" alt=\"bacalao\" (click)=\"seleccionar(2)\">\n      <img width=\"140\" src=\"assets/img/{{productos[3].img}}\" class=\"img-thumbnail rounded\" alt=\"hamburguesa\" (click)=\"seleccionar(3)\">\n    </div>\n  </div>\n\n  <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 bebida\">\n    <h2>BEBIDA</h2>\n    <div class=\"bebida\">\n      <img width=\"140\" src=\"assets/img/{{productos[4].img}}\" class=\"img-thumbnail rounded\" alt=\"cerveza\" (click)=\"seleccionar(4)\">\n      <img width=\"140\" src=\"assets/img/{{productos[5].img}}\" class=\"img-thumbnail rounded\" alt=\"vino\" (click)=\"seleccionar(5)\">\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/productos/productos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductosComponent = /** @class */ (function () {
    function ProductosComponent() {
        this.enviar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    ProductosComponent.prototype.seleccionar = function (i) {
        this.enviar.emit(this.productos[i]);
    };
    ProductosComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], ProductosComponent.prototype, "productos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], ProductosComponent.prototype, "enviar", void 0);
    ProductosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-productos',
            template: __webpack_require__("./src/app/productos/productos.component.html"),
            styles: [__webpack_require__("./src/app/productos/productos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductosComponent);
    return ProductosComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map