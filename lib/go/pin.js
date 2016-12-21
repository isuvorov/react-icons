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

var GoPin = function (_React$Component) {
    _inherits(GoPin, _React$Component);

    function GoPin() {
        _classCallCheck(this, GoPin);

        return _possibleConstructorReturn(this, (GoPin.__proto__ || Object.getPrototypeOf(GoPin)).apply(this, arguments));
    }

    _createClass(GoPin, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.7 27.5l2.5 12.5 2.5-12.5c-0.8 0.1-1.7 0.1-2.5 0.1s-1.8 0-2.5-0.1z m9.9-11.7c-1.3-0.6-2.4-2.3-2.4-3.3v-2.5c0-0.9 0.4-1.5 0.9-2 0.5-0.5 0.9-1.2 0.9-1.8 0-2.1-2.4-3.7-6.8-3.7s-6.9 1.6-6.9 3.7c0 0.6 0.4 1.3 1 1.8 0.4 0.5 0.9 1.1 0.9 2v2.5c0 1-1.2 2.7-2.5 3.3-1.4 0.8-2.7 2.1-2.7 3.5 0 2.8 3.9 5.7 10.2 5.7s10.1-2.8 10.1-5.7c0-1.3-1.2-2.7-2.7-3.5z' })
                )
            );
        }
    }]);

    return GoPin;
}(React.Component);

exports.default = GoPin;
module.exports = exports['default'];