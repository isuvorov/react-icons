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

var TiPrinter = function (_React$Component) {
    _inherits(TiPrinter, _React$Component);

    function TiPrinter() {
        _classCallCheck(this, TiPrinter);

        return _possibleConstructorReturn(this, (TiPrinter.__proto__ || Object.getPrototypeOf(TiPrinter)).apply(this, arguments));
    }

    _createClass(TiPrinter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.3 8.3v-3.3c0-0.9-0.7-1.7-1.6-1.7h-15c-1 0-1.7 0.8-1.7 1.7v3.3c-2.8 0-5 2.3-5 5v16.7c0 2.8 2.2 5 5 5h18.3c2.8 0 5-2.2 5-5v-16.7c0-2.7-2.2-5-5-5z m-15-1.6h11.7v8.3h-11.7v-8.3z m-3.3 5v5c0 0.9 0.7 1.6 1.7 1.6h15c0.9 0 1.6-0.7 1.6-1.6v-5c1 0 1.7 0.7 1.7 1.6v4.2c0 1.4-1.1 2.5-2.5 2.5h-16.7c-1.3 0-2.5-1.1-2.5-2.5v-4.2c0-0.9 0.8-1.6 1.7-1.6z m18.3 20h-18.3c-0.9 0-1.7-0.8-1.7-1.7v-9.2c0.7 0.5 1.6 0.9 2.5 0.9h16.7c0.9 0 1.8-0.4 2.5-0.9v9.2c0 0.9-0.7 1.7-1.7 1.7z m-5.8-20h-6.7c-0.4 0-0.8 0.3-0.8 0.8s0.4 0.8 0.8 0.8h6.7c0.5 0 0.8-0.3 0.8-0.8s-0.3-0.8-0.8-0.8z m2.5 15h-11.7c-0.4 0-0.8 0.3-0.8 0.8s0.4 0.8 0.8 0.8h11.7c0.5 0 0.8-0.3 0.8-0.8s-0.3-0.8-0.8-0.8z m-2.5-18.4h-6.7c-0.4 0-0.8 0.4-0.8 0.9s0.4 0.8 0.8 0.8h6.7c0.5 0 0.8-0.4 0.8-0.8s-0.3-0.9-0.8-0.9z' })
                )
            );
        }
    }]);

    return TiPrinter;
}(React.Component);

exports.default = TiPrinter;
module.exports = exports['default'];