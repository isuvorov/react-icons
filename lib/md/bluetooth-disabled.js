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

var MdBluetoothDisabled = function (_React$Component) {
    _inherits(MdBluetoothDisabled, _React$Component);

    function MdBluetoothDisabled() {
        _classCallCheck(this, MdBluetoothDisabled);

        return _possibleConstructorReturn(this, (MdBluetoothDisabled.__proto__ || Object.getPrototypeOf(MdBluetoothDisabled)).apply(this, arguments));
    }

    _createClass(MdBluetoothDisabled, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.6 30.3l3.2-3.1-3.2-3.2v6.3z m-12.6-23.7l24.4 24.4-2.4 2.4-3.8-3.9-7.2 7.1h-1.6v-12.6l-7.7 7.6-2.3-2.3 9.3-9.3-11.1-11z m12.6 3.1v5.4l-3.2-3.4v-8.3h1.6l9.5 9.4-5 5.1-2.4-2.4 2.7-2.7z' })
                )
            );
        }
    }]);

    return MdBluetoothDisabled;
}(React.Component);

exports.default = MdBluetoothDisabled;
module.exports = exports['default'];