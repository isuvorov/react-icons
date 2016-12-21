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

var FaRocket = function (_React$Component) {
    _inherits(FaRocket, _React$Component);

    function FaRocket() {
        _classCallCheck(this, FaRocket);

        return _possibleConstructorReturn(this, (FaRocket.__proto__ || Object.getPrototypeOf(FaRocket)).apply(this, arguments));
    }

    _createClass(FaRocket, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.1 10q0-0.9-0.6-1.5t-1.5-0.6-1.5 0.6-0.6 1.5 0.6 1.5 1.5 0.6 1.5-0.6 0.6-1.5z m5-6.4q0 5.5-1.6 9.6t-5.7 8q-1.8 1.8-4.4 4l-0.4 8.4q0 0.4-0.4 0.6l-8.5 5q-0.2 0.1-0.4 0.1-0.3 0-0.5-0.2l-1.4-1.4q-0.3-0.4-0.2-0.8l1.9-6.1-6.3-6.3-6.1 1.9q-0.1 0-0.2 0-0.4 0-0.6-0.2l-1.4-1.4q-0.4-0.4-0.1-0.9l5-8.5q0.2-0.4 0.6-0.4l8.4-0.4q2.2-2.6 4-4.4 4.2-4.2 8-5.8t9.6-1.5q0.3 0 0.5 0.2t0.2 0.5z' })
                )
            );
        }
    }]);

    return FaRocket;
}(React.Component);

exports.default = FaRocket;
module.exports = exports['default'];