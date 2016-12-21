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

var FaAutomobile = function (_React$Component) {
    _inherits(FaAutomobile, _React$Component);

    function FaAutomobile() {
        _classCallCheck(this, FaAutomobile);

        return _possibleConstructorReturn(this, (FaAutomobile.__proto__ || Object.getPrototypeOf(FaAutomobile)).apply(this, arguments));
    }

    _createClass(FaAutomobile, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm9.3 23.7q0-1.3-0.9-2.2t-2.2-0.9-2.2 0.9-0.9 2.2 0.9 2.2 2.2 0.9 2.2-0.9 0.9-2.2z m0.7-6.2h19.7l-1.7-6.9q0-0.2-0.3-0.4t-0.4-0.1h-14.9q-0.2 0-0.4 0.1t-0.3 0.4z m26.6 6.2q0-1.3-0.9-2.2t-2.2-0.9-2.2 0.9-0.9 2.2 0.9 2.2 2.2 0.9 2.2-0.9 0.9-2.2z m3.2-1.8v7.4q0 0.3-0.2 0.5t-0.5 0.1h-1.8v2.5q0 1.6-1.1 2.7t-2.7 1-2.6-1-1.1-2.7v-2.5h-19.9v2.5q0 1.6-1 2.7t-2.7 1-2.6-1-1.1-2.7v-2.5h-1.9q-0.3 0-0.4-0.1t-0.2-0.5v-7.4q0-1.8 1.3-3.1t3-1.3h0.6l2-8.1q0.5-1.8 2-3.1t3.5-1.2h14.9q1.9 0 3.5 1.2t2 3.1l2.1 8.1h0.5q1.8 0 3.1 1.3t1.3 3.1z' })
                )
            );
        }
    }]);

    return FaAutomobile;
}(React.Component);

exports.default = FaAutomobile;
module.exports = exports['default'];