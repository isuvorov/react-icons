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

var FaUnlock = function (_React$Component) {
    _inherits(FaUnlock, _React$Component);

    function FaUnlock() {
        _classCallCheck(this, FaUnlock);

        return _possibleConstructorReturn(this, (FaUnlock.__proto__ || Object.getPrototypeOf(FaUnlock)).apply(this, arguments));
    }

    _createClass(FaUnlock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm38.6 12.9v5.7q0 0.6-0.4 1t-1 0.4h-1.4q-0.6 0-1-0.4t-0.4-1v-5.7q0-2.4-1.7-4.1t-4.1-1.7-4 1.7-1.7 4.1v4.2h2.2q0.9 0 1.5 0.7t0.6 1.5v12.8q0 0.9-0.6 1.6t-1.5 0.6h-21.5q-0.8 0-1.5-0.6t-0.6-1.6v-12.8q0-0.9 0.6-1.5t1.5-0.7h15v-4.2q0-4.2 3-7.1t7-2.9 7.1 2.9 2.9 7.1z' })
                )
            );
        }
    }]);

    return FaUnlock;
}(React.Component);

exports.default = FaUnlock;
module.exports = exports['default'];