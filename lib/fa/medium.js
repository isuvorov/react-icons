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

var FaMedium = function (_React$Component) {
    _inherits(FaMedium, _React$Component);

    function FaMedium() {
        _classCallCheck(this, FaMedium);

        return _possibleConstructorReturn(this, (FaMedium.__proto__ || Object.getPrototypeOf(FaMedium)).apply(this, arguments));
    }

    _createClass(FaMedium, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.3 9.4v26.2q0 0.5-0.3 0.9t-0.8 0.4q-0.3 0-0.7-0.2l-10.4-5.2q-0.5-0.2-0.8-0.7t-0.3-1v-25.5q0-0.4 0.2-0.8t0.7-0.3q0.3 0 1 0.4l11.4 5.7q0 0.1 0 0.1z m1.5 2.3l11.9 19.3-11.9-6v-13.3z m25.2 0.4v23.5q0 0.5-0.3 0.9t-0.9 0.3-1-0.3l-9.9-4.9z m-0.1-2.7q0 0-5.7 9.3t-6.7 10.9l-8.7-14.1 7.2-11.8q0.4-0.6 1.2-0.6 0.3 0 0.6 0.1l12 6q0.1 0.1 0.1 0.2z' })
                )
            );
        }
    }]);

    return FaMedium;
}(React.Component);

exports.default = FaMedium;
module.exports = exports['default'];