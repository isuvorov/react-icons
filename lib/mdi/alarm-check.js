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

var MdiAlarmCheck = function (_React$Component) {
    _inherits(MdiAlarmCheck, _React$Component);

    function MdiAlarmCheck() {
        _classCallCheck(this, MdiAlarmCheck);

        return _possibleConstructorReturn(this, (MdiAlarmCheck.__proto__ || Object.getPrototypeOf(MdiAlarmCheck)).apply(this, arguments));
    }

    _createClass(MdiAlarmCheck, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 10.54,14.53L 8.41,12.4L 7.35,13.46L 10.53,16.64L 16.53,10.64L 15.47,9.58L 10.54,14.53 Z M 12,20C 8.13,20 5,16.87 5,13C 5,9.13 8.13,6 12,6C 15.87,6 19,9.13 19,13C 19,16.87 15.87,20 12,20 Z M 12,4C 7.03,4 3,8.03 3,13C 3,17.97 7.02,22 12,22C 16.97,22 21,17.97 21,13C 21,8.03 16.97,4 12,4 Z M 7.88,3.39L 6.6,1.86L 2,5.71L 3.29,7.24L 7.88,3.39 Z M 22,5.72L 17.4,1.86L 16.11,3.39L 20.71,7.25L 22,5.72 Z ' })
                )
            );
        }
    }]);

    return MdiAlarmCheck;
}(React.Component);

exports.default = MdiAlarmCheck;
module.exports = exports['default'];