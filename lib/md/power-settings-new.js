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

var MdPowerSettingsNew = function (_React$Component) {
    _inherits(MdPowerSettingsNew, _React$Component);

    function MdPowerSettingsNew() {
        _classCallCheck(this, MdPowerSettingsNew);

        return _possibleConstructorReturn(this, (MdPowerSettingsNew.__proto__ || Object.getPrototypeOf(MdPowerSettingsNew)).apply(this, arguments));
    }

    _createClass(MdPowerSettingsNew, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.7 8.6q5.3 4.5 5.3 11.4 0 6.3-4.4 10.6t-10.6 4.4-10.6-4.4-4.4-10.6q0-6.9 5.3-11.4l2.4 2.3q-4.3 3.6-4.3 9.1 0 4.8 3.4 8.2t8.2 3.4 8.2-3.4 3.4-8.2q0-5.5-4.3-9z m-8.1-3.6v16.6h-3.2v-16.6h3.2z' })
                )
            );
        }
    }]);

    return MdPowerSettingsNew;
}(React.Component);

exports.default = MdPowerSettingsNew;
module.exports = exports['default'];