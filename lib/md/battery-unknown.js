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

var MdBatteryUnknown = function (_React$Component) {
    _inherits(MdBatteryUnknown, _React$Component);

    function MdBatteryUnknown() {
        _classCallCheck(this, MdBatteryUnknown);

        return _possibleConstructorReturn(this, (MdBatteryUnknown.__proto__ || Object.getPrototypeOf(MdBatteryUnknown)).apply(this, arguments));
    }

    _createClass(MdBatteryUnknown, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.8 21.2c0.7-0.7 1.2-1.7 1.2-2.8 0-2.8-2.3-5-5-5s-5 2.2-5 5h2.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 0.7-0.2 1.2-0.7 1.7l-1.6 1.5c-0.7 0.8-1.5 2-1.5 3.4h2.6c0-0.8 0.7-1.9 1.4-2.7 0.5-0.4 1.1-1.1 1.1-1.1z m-2.2 8.7v-3.2h-3.2v3.2h3.2z m4.5-23.3c1.2 0 2.3 1.1 2.3 2.3v25.6c0 1.2-1.1 2.1-2.3 2.1h-12.2c-1.2 0-2.3-0.9-2.3-2.1v-25.6c0-1.2 1.1-2.3 2.3-2.3h2.7v-3.2h6.8v3.2h2.7z' })
                )
            );
        }
    }]);

    return MdBatteryUnknown;
}(React.Component);

exports.default = MdBatteryUnknown;
module.exports = exports['default'];