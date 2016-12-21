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

var FaInr = function (_React$Component) {
    _inherits(FaInr, _React$Component);

    function FaInr() {
        _classCallCheck(this, FaInr);

        return _possibleConstructorReturn(this, (FaInr.__proto__ || Object.getPrototypeOf(FaInr)).apply(this, arguments));
    }

    _createClass(FaInr, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 10.5v2.3q0 0.3-0.2 0.5t-0.5 0.2h-3.7q-0.5 3.2-2.9 5.2t-6.2 2.5q3.8 3.9 10.3 11.9 0.3 0.4 0.1 0.8-0.2 0.4-0.7 0.4h-4.3q-0.4 0-0.6-0.3-6.8-8.2-11.1-12.7-0.2-0.2-0.2-0.5v-2.9q0-0.2 0.2-0.5t0.5-0.2h2.5q3 0 4.8-0.9t2.2-2.8h-9.5q-0.3 0-0.5-0.2t-0.2-0.5v-2.3q0-0.3 0.2-0.5t0.5-0.2h9.2q-1.2-2.5-6-2.5h-3.2q-0.3 0-0.5-0.3t-0.2-0.5v-2.9q0-0.3 0.2-0.5t0.5-0.2h18.6q0.3 0 0.5 0.2t0.2 0.5v2.2q0 0.4-0.2 0.6t-0.5 0.2h-5.2q1 1.3 1.4 3.2h3.8q0.3 0 0.5 0.2t0.2 0.5z' })
                )
            );
        }
    }]);

    return FaInr;
}(React.Component);

exports.default = FaInr;
module.exports = exports['default'];