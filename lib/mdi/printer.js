'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdiPrinter = function (_React$Component) {
    _inherits(MdiPrinter, _React$Component);

    function MdiPrinter() {
        _classCallCheck(this, MdiPrinter);

        return _possibleConstructorReturn(this, (MdiPrinter.__proto__ || Object.getPrototypeOf(MdiPrinter)).apply(this, arguments));
    }

    _createClass(MdiPrinter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.9994,2.99807L 5.99939,2.99807L 5.99939,6.99807L 17.9994,6.99807M 18.9994,11.9981C 18.4464,11.9981 17.9994,11.5511 17.9994,10.9981C 17.9994,10.4451 18.4464,9.99807 18.9994,9.99807C 19.5524,9.99807 19.9994,10.4451 19.9994,10.9981C 19.9994,11.5511 19.5524,11.9981 18.9994,11.9981 Z M 15.9994,18.9981L 7.99939,18.9981L 7.99939,13.9981L 15.9994,13.9981M 18.9994,7.99807L 4.99939,7.99807C 3.34339,7.99807 1.99939,9.34206 1.99939,10.9981L 1.99939,16.9981L 5.99939,16.9981L 5.99939,20.9981L 17.9994,20.9981L 17.9994,16.9981L 21.9994,16.9981L 21.9994,10.9981C 21.9994,9.34107 20.6564,7.99807 18.9994,7.99807 Z ' })
                )
            );
        }
    }]);

    return MdiPrinter;
}(React.Component);

exports.default = MdiPrinter;
module.exports = exports['default'];