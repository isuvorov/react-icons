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

var FaBell = function (_React$Component) {
    _inherits(FaBell, _React$Component);

    function FaBell() {
        _classCallCheck(this, FaBell);

        return _possibleConstructorReturn(this, (FaBell.__proto__ || Object.getPrototypeOf(FaBell)).apply(this, arguments));
    }

    _createClass(FaBell, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.4 37.9q0-0.4-0.4-0.4-1.3 0-2.3-1t-0.9-2.2q0-0.4-0.4-0.4t-0.3 0.4q0 1.6 1.1 2.8t2.8 1.1q0.4 0 0.4-0.3z m18.2-6.5q0 1.2-0.9 2t-2 0.9h-10q0 2.4-1.7 4t-4 1.7-4-1.7-1.7-4h-10q-1.2 0-2-0.9t-0.9-2q1.1-0.9 2.1-1.9t1.9-2.7 1.6-3.5 1.1-4.6 0.5-5.8q0-3.4 2.6-6.3t6.8-3.6q-0.1-0.4-0.1-0.9 0-0.8 0.6-1.5t1.5-0.6 1.5 0.6 0.6 1.5q0 0.5-0.1 0.9 4.2 0.6 6.8 3.6t2.6 6.3q0 3.1 0.5 5.8t1.1 4.6 1.6 3.5 1.9 2.7 2.1 1.9z' })
                )
            );
        }
    }]);

    return FaBell;
}(React.Component);

exports.default = FaBell;
module.exports = exports['default'];