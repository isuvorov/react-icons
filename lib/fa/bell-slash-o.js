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

var FaBellSlashO = function (_React$Component) {
    _inherits(FaBellSlashO, _React$Component);

    function FaBellSlashO() {
        _classCallCheck(this, FaBellSlashO);

        return _possibleConstructorReturn(this, (FaBellSlashO.__proto__ || Object.getPrototypeOf(FaBellSlashO)).apply(this, arguments));
    }

    _createClass(FaBellSlashO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.2 35.5q0-0.3-0.3-0.3-1.2 0-2-0.8t-0.8-2q0-0.3-0.3-0.3t-0.3 0.3q0 1.4 1 2.4t2.4 1q0.3 0 0.3-0.3z m-10.4-9.2l17-14.7q-0.8-1.8-2.6-2.9t-4.3-1.1q-1.8 0-3.3 0.6t-2.4 1.6-1.3 2-0.5 2q0 7.4-2.6 12.5z m26.2 3.6q0 1-0.7 1.8t-1.8 0.7h-8.7q0 2.1-1.4 3.5t-3.5 1.5-3.5-1.5-1.5-3.5l2.9-2.5h14.7q-3.2-3.6-4.4-8.9l2.1-1.9q1.2 7 5.8 10.8z m1.7-27l1.6 1.9q0.2 0.2 0.2 0.4t-0.2 0.5l-36.4 31.5q-0.2 0.1-0.4 0.1t-0.4-0.2l-1.7-1.9q-0.1-0.2-0.1-0.4t0.2-0.5l3.6-3.1q-0.4-0.6-0.4-1.3 1-0.8 1.8-1.7t1.6-2.3 1.5-3.1 1-4 0.3-5q0-3 2.3-5.5t6-3.1q-0.2-0.3-0.2-0.7 0-0.8 0.6-1.4t1.3-0.5 1.3 0.6 0.5 1.3q0 0.4-0.1 0.7 2.4 0.4 4.2 1.6t2.9 3.1l8.1-7.1q0.2-0.1 0.5-0.1t0.4 0.2z' })
                )
            );
        }
    }]);

    return FaBellSlashO;
}(React.Component);

exports.default = FaBellSlashO;
module.exports = exports['default'];