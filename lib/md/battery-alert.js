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

var MdBatteryAlert = function (_React$Component) {
    _inherits(MdBatteryAlert, _React$Component);

    function MdBatteryAlert() {
        _classCallCheck(this, MdBatteryAlert);

        return _possibleConstructorReturn(this, (MdBatteryAlert.__proto__ || Object.getPrototypeOf(MdBatteryAlert)).apply(this, arguments));
    }

    _createClass(MdBatteryAlert, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.6 23.4v-8.4h-3.2v8.4h3.2z m0 6.6v-3.4h-3.2v3.4h3.2z m4.5-23.4c1.2 0 2.3 1.1 2.3 2.3v25.6c0 1.2-1.1 2.1-2.3 2.1h-12.2c-1.2 0-2.3-0.9-2.3-2.1v-25.6c0-1.2 1.1-2.3 2.3-2.3h2.7v-3.2h6.8v3.2h2.7z' })
                )
            );
        }
    }]);

    return MdBatteryAlert;
}(React.Component);

exports.default = MdBatteryAlert;
module.exports = exports['default'];