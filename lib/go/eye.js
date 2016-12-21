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

var GoEye = function (_React$Component) {
    _inherits(GoEye, _React$Component);

    function GoEye() {
        _classCallCheck(this, GoEye);

        return _possibleConstructorReturn(this, (GoEye.__proto__ || Object.getPrototypeOf(GoEye)).apply(this, arguments));
    }

    _createClass(GoEye, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 5c-7.5 0-16.2 5-20 15 3.8 7.5 11.3 12.5 20 12.5s16.3-5 20-12.5c-3.7-10-12.5-15-20-15z m0 25c-7.5 0-13.7-5-15-10 1.3-5 7.5-10 15-10s13.8 5 15 10c-1.2 5-7.5 10-15 10z m0-17.5c-0.8 0-1.5 0.2-2.2 0.4 1.3 0.5 2.2 1.8 2.2 3.4 0 2-1.7 3.7-3.7 3.7-1.6 0-2.9-0.9-3.4-2.2-0.2 0.7-0.4 1.4-0.4 2.2 0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5z' })
                )
            );
        }
    }]);

    return GoEye;
}(React.Component);

exports.default = GoEye;
module.exports = exports['default'];