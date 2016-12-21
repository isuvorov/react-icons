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

var IoIosCalculatorOutline = function (_React$Component) {
    _inherits(IoIosCalculatorOutline, _React$Component);

    function IoIosCalculatorOutline() {
        _classCallCheck(this, IoIosCalculatorOutline);

        return _possibleConstructorReturn(this, (IoIosCalculatorOutline.__proto__ || Object.getPrototypeOf(IoIosCalculatorOutline)).apply(this, arguments));
    }

    _createClass(IoIosCalculatorOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11 12.5v-5h17.5v5h-17.5z m1.3-3.7v2.5h15v-2.5h-15z m16.2-3.8c1.4 0 2.5 1.1 2.5 2.5v25c0 1.4-1.1 2.5-2.5 2.5h-17.5c-1.4 0-2.5-1.1-2.5-2.5v-25c0-1.4 1.1-2.5 2.5-2.5h17.5z m1.3 27.5v-25c0-0.7-0.6-1.2-1.3-1.2h-17.5c-0.7 0-1.2 0.5-1.2 1.2v25c0 0.7 0.5 1.3 1.2 1.3h17.5c0.7 0 1.3-0.6 1.3-1.3z m-17.5-13.7h3.7v1.2h-5v-5h1.3v3.8z m0 6.2h3.7v1.3h-5v-5h1.3v3.7z m0 6.3h3.7v1.2h-5v-5h1.3v3.8z m6.2-12.5h3.8v1.2h-5v-5h1.2v3.8z m6.3 0h3.7v1.2h-5v-5h1.3v3.8z m-6.3 6.2h3.8v1.3h-5v-5h1.2v3.7z m0 6.3h3.8v1.2h-5v-5h1.2v3.8z m6.3 0h3.7v1.2h-5v-11.2h1.3v10z' })
                )
            );
        }
    }]);

    return IoIosCalculatorOutline;
}(React.Component);

exports.default = IoIosCalculatorOutline;
module.exports = exports['default'];