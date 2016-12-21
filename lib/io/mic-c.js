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

var IoMicC = function (_React$Component) {
    _inherits(IoMicC, _React$Component);

    function IoMicC() {
        _classCallCheck(this, IoMicC);

        return _possibleConstructorReturn(this, (IoMicC.__proto__ || Object.getPrototypeOf(IoMicC)).apply(this, arguments));
    }

    _createClass(IoMicC, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.7 2.5c2.3 0 4.3 1.8 4.3 4.1v2.2h-4.6v2.8h4.6v3.4h-4.6v2.9h4.6v3.4h-4.6v2.8h4.6v3.3c0 2.3-2 4.1-4.3 4.1h-2.3v6h-6.8v-6h-2.3c-2.3 0-4.3-1.8-4.3-4.1v-3.3h11.9v-2.8h-11.9v-3.4h11.9v-2.9h-11.9v-3.4h11.9v-2.8h-11.9v-2.2c0-2.3 1.9-4.1 4.3-4.1h11.4z' })
                )
            );
        }
    }]);

    return IoMicC;
}(React.Component);

exports.default = IoMicC;
module.exports = exports['default'];