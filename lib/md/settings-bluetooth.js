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

var MdSettingsBluetooth = function (_React$Component) {
    _inherits(MdSettingsBluetooth, _React$Component);

    function MdSettingsBluetooth() {
        _classCallCheck(this, MdSettingsBluetooth);

        return _possibleConstructorReturn(this, (MdSettingsBluetooth.__proto__ || Object.getPrototypeOf(MdSettingsBluetooth)).apply(this, arguments));
    }

    _createClass(MdSettingsBluetooth, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24.8 23.8l-3.2-3.1v6.3z m-3.2-17.4v6.3l3.2-3.2z m7.9 3.1l-7.2 7.1 7.2 7.2-9.5 9.6h-1.6v-12.7l-7.7 7.7-2.3-2.4 9.3-9.4-9.3-9.3 2.3-2.3 7.7 7.7v-12.7h1.6z m-4.5 30.5v-3.4h3.4v3.4h-3.4z m-13.4 0v-3.4h3.4v3.4h-3.4z m6.8 0v-3.4h3.2v3.4h-3.2z' })
                )
            );
        }
    }]);

    return MdSettingsBluetooth;
}(React.Component);

exports.default = MdSettingsBluetooth;
module.exports = exports['default'];