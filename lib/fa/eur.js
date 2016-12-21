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

var FaEur = function (_React$Component) {
    _inherits(FaEur, _React$Component);

    function FaEur() {
        _classCallCheck(this, FaEur);

        return _possibleConstructorReturn(this, (FaEur.__proto__ || Object.getPrototypeOf(FaEur)).apply(this, arguments));
    }

    _createClass(FaEur, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.3 29.2l0.8 3.5q0 0.3-0.1 0.5t-0.4 0.3l-0.1 0.1q-0.1 0-0.2 0t-0.4 0.1-0.5 0.2-0.5 0.1-0.7 0.1-0.7 0.1-0.9 0.1-0.8 0q-5.2 0-9.2-2.9t-5.3-7.9h-2.1q-0.3 0-0.5-0.2t-0.2-0.5v-2.5q0-0.3 0.2-0.5t0.5-0.2h1.5q-0.1-1.3 0-2.4h-1.5q-0.3 0-0.5-0.2t-0.2-0.5v-2.5q0-0.3 0.2-0.5t0.5-0.2h2.2q1.5-4.7 5.4-7.6t9-2.8q2.3 0 4.3 0.5 0.3 0 0.5 0.3 0.1 0.3 0 0.5l-0.9 3.6q-0.1 0.3-0.4 0.4t-0.5 0.1l-0.1 0q-0.1-0.1-0.2-0.1l-0.4-0.1-0.5-0.1-0.6 0-0.7-0.1-0.6 0q-2.8 0-5.1 1.4t-3.3 4h10.4q0.4 0 0.6 0.2 0.2 0.3 0.2 0.6l-0.6 2.6q-0.1 0.5-0.7 0.5h-10.9q-0.1 0.9 0 2.4h10.3q0.3 0 0.5 0.2 0.2 0.3 0.1 0.6l-0.5 2.5q0 0.3-0.2 0.5t-0.5 0.1h-8.6q1.1 2.6 3.3 4.2t5.1 1.5q0.4 0 0.8 0t0.8-0.1 0.6-0.1 0.6-0.1 0.4-0.1l0.3-0.1 0.1 0q0.3-0.1 0.5 0 0.3 0.2 0.4 0.5z' })
                )
            );
        }
    }]);

    return FaEur;
}(React.Component);

exports.default = FaEur;
module.exports = exports['default'];