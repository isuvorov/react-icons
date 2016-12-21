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

var FaCrosshairs = function (_React$Component) {
    _inherits(FaCrosshairs, _React$Component);

    function FaCrosshairs() {
        _classCallCheck(this, FaCrosshairs);

        return _possibleConstructorReturn(this, (FaCrosshairs.__proto__ || Object.getPrototypeOf(FaCrosshairs)).apply(this, arguments));
    }

    _createClass(FaCrosshairs, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.7 22.9h-2.4q-0.6 0-1-0.5t-0.4-1v-2.8q0-0.6 0.4-1t1-0.5h2.4q-0.7-2.4-2.5-4.2t-4.2-2.5v2.5q0 0.5-0.4 1t-1 0.4h-2.9q-0.6 0-1-0.4t-0.4-1v-2.5q-2.4 0.7-4.2 2.5t-2.5 4.2h2.4q0.6 0 1 0.5t0.4 1v2.8q0 0.6-0.4 1t-1 0.5h-2.4q0.7 2.4 2.5 4.2t4.2 2.5v-2.5q0-0.5 0.4-1t1-0.4h2.9q0.6 0 1 0.4t0.4 1v2.5q2.4-0.7 4.2-2.5t2.5-4.2z m7.6-4.3v2.8q0 0.6-0.4 1t-1 0.5h-3.2q-0.9 3.6-3.5 6.2t-6.2 3.4v3.2q0 0.6-0.4 1t-1 0.4h-2.9q-0.6 0-1-0.4t-0.4-1v-3.2q-3.6-0.8-6.2-3.4t-3.5-6.2h-3.2q-0.6 0-1-0.5t-0.4-1v-2.8q0-0.6 0.4-1t1-0.5h3.2q0.8-3.6 3.5-6.2t6.2-3.4v-3.2q0-0.6 0.4-1t1-0.4h2.9q0.6 0 1 0.4t0.4 1v3.2q3.6 0.8 6.2 3.4t3.5 6.2h3.2q0.5 0 1 0.5t0.4 1z' })
                )
            );
        }
    }]);

    return FaCrosshairs;
}(React.Component);

exports.default = FaCrosshairs;
module.exports = exports['default'];