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

var FaTrademark = function (_React$Component) {
    _inherits(FaTrademark, _React$Component);

    function FaTrademark() {
        _classCallCheck(this, FaTrademark);

        return _possibleConstructorReturn(this, (FaTrademark.__proto__ || Object.getPrototypeOf(FaTrademark)).apply(this, arguments));
    }

    _createClass(FaTrademark, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.4 12.9v2.3q0 0.3-0.2 0.5t-0.5 0.2h-6v16.4q0 0.3-0.2 0.5t-0.4 0.2h-2.8q-0.2 0-0.4-0.2t-0.2-0.5v-16.4h-6.1q-0.2 0-0.4-0.2t-0.2-0.5v-2.3q0-0.3 0.2-0.5t0.5-0.2h16q0.3 0 0.5 0.2t0.2 0.5z m21.1-0.1l1.5 19.5q0 0.3-0.1 0.5-0.2 0.2-0.5 0.2h-2.7q-0.3 0-0.5-0.2t-0.2-0.4l-0.9-11.9-3.8 8.6q-0.2 0.4-0.6 0.4h-2.5q-0.4 0-0.5-0.4l-3.9-8.7-0.9 12q0 0.2-0.2 0.4t-0.4 0.2h-2.7q-0.3 0-0.5-0.2-0.2-0.2-0.2-0.5l1.6-19.5q0-0.2 0.2-0.4t0.4-0.2h2.9q0.4 0 0.6 0.4l4.5 10.5q0.2 0.5 0.4 1.1 0-0.2 0.2-0.5t0.2-0.6l4.5-10.5q0.1-0.4 0.5-0.4h2.9q0.3 0 0.4 0.2t0.3 0.4z' })
                )
            );
        }
    }]);

    return FaTrademark;
}(React.Component);

exports.default = FaTrademark;
module.exports = exports['default'];