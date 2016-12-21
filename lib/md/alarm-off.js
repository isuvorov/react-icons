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

var MdAlarmOff = function (_React$Component) {
    _inherits(MdAlarmOff, _React$Component);

    function MdAlarmOff() {
        _classCallCheck(this, MdAlarmOff);

        return _possibleConstructorReturn(this, (MdAlarmOff.__proto__ || Object.getPrototypeOf(MdAlarmOff)).apply(this, arguments));
    }

    _createClass(MdAlarmOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.4 5.5l-1.4 1.1-2.5-2.3 1.5-1.2z m14 25.1l-16.4-16.4c-1.6 2.1-2.6 4.6-2.6 7.4 0 6.5 5.1 11.8 11.6 11.8 2.8 0 5.4-1.1 7.4-2.8z m-22.6-26.8c10.3 10.3 20.6 20.5 30.8 30.7l-2.1 2.1-3.7-3.6c-2.6 2.2-6.1 3.6-9.8 3.6-8.3 0-15-6.7-15-15 0-3.7 1.4-7.1 3.7-9.7l-1.4-1.4-1.8 1.6-2.4-2.4 1.9-1.5-2.3-2.3z m31.8 5.7l-2.1 2.6-7.6-6.5 2.1-2.5z m-16.6 0.5c-1.4 0-2.7 0.2-4 0.7l-2.6-2.5c2-0.9 4.3-1.6 6.6-1.6 8.3 0 15 6.8 15 15 0 2.4-0.5 4.7-1.5 6.6l-2.6-2.5c0.5-1.2 0.7-2.7 0.7-4.1 0-6.4-5.1-11.6-11.6-11.6z' })
                )
            );
        }
    }]);

    return MdAlarmOff;
}(React.Component);

exports.default = MdAlarmOff;
module.exports = exports['default'];