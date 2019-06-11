var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var Department = /** @class */ (function () {
        function Department() {
        }
        Department.prototype.details = function () {
            console.log("Hello");
        };
        return Department;
    }());
    var company = /** @class */ (function (_super) {
        __extends(company, _super);
        function company() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        company.prototype.department_structure = function () {
        };
        return company;
    }(Department));
    var company1 = new company();
    console.log(company1.details);
}
