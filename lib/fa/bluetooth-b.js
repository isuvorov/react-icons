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

var FaBluetoothB = function (_React$Component) {
    _inherits(FaBluetoothB, _React$Component);

    function FaBluetoothB() {
        _classCallCheck(this, FaBluetoothB);

        return _possibleConstructorReturn(this, (FaBluetoothB.__proto__ || Object.getPrototypeOf(FaBluetoothB)).apply(this, arguments));
    }

    _createClass(FaBluetoothB, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.8 31.8l3.9-3.9-3.9-3.8v7.7z m0-15.9l3.9-3.8-3.9-3.9v7.7z m0.7 4.1l8 7.9-12.1 12.1v-15.9l-6.6 6.6-2.4-2.4 8.3-8.3-8.3-8.3 2.4-2.4 6.6 6.6v-15.9l12.1 12.1z' })
                )
            );
        }
    }]);

    return FaBluetoothB;
}(React.Component);

exports.default = FaBluetoothB;
module.exports = exports['default'];