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

var MdAlarmOn = function (_React$Component) {
    _inherits(MdAlarmOn, _React$Component);

    function MdAlarmOn() {
        _classCallCheck(this, MdAlarmOn);

        return _possibleConstructorReturn(this, (MdAlarmOn.__proto__ || Object.getPrototypeOf(MdAlarmOn)).apply(this, arguments));
    }

    _createClass(MdAlarmOn, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.6 24.2l8.2-8.3 1.8 1.8-10 10-5.3-5.3 1.7-1.7z m2.4 9.2c6.5 0 11.6-5.3 11.6-11.8s-5.1-11.6-11.6-11.6-11.6 5.2-11.6 11.6 5.1 11.8 11.6 11.8z m0-26.8c8.3 0 15 6.8 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z m-6.9-1l-7.6 6.4-2.1-2.5 7.6-6.4z m23.5 3.9l-2.1 2.6-7.6-6.5 2.1-2.5z' })
                )
            );
        }
    }]);

    return MdAlarmOn;
}(React.Component);

exports.default = MdAlarmOn;
module.exports = exports['default'];