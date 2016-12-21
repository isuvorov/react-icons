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

var IoPrinter = function (_React$Component) {
    _inherits(IoPrinter, _React$Component);

    function IoPrinter() {
        _classCallCheck(this, IoPrinter);

        return _possibleConstructorReturn(this, (IoPrinter.__proto__ || Object.getPrototypeOf(IoPrinter)).apply(this, arguments));
    }

    _createClass(IoPrinter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.6 10c2.2 0 4.4 1.5 4.4 4.3v10.2c0 2.5-2.2 4.3-4.4 4.3h-3.1v8.7h-20v-8.7h-3.1c-2.2 0-4.4-1.9-4.4-4.9v-9.6c0-3 2.2-4.3 4.4-4.3h3.1v-5h20v5h3.1z m-4.3 26.3v-13.8h-17.5v13.8h17.5z m0-26.3v-3.7h-17.5v3.7h17.5z m3.7 5v-1.2h-1.3v1.2h1.3z m-20 11.3v-1.3h15v1.3h-15z m0 3.7v-1.2h15v1.2h-15z m0 3.8v-1.3h15v1.3h-15z' })
                )
            );
        }
    }]);

    return IoPrinter;
}(React.Component);

exports.default = IoPrinter;
module.exports = exports['default'];