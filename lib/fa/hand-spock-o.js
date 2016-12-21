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

var FaHandSpockO = function (_React$Component) {
    _inherits(FaHandSpockO, _React$Component);

    function FaHandSpockO() {
        _classCallCheck(this, FaHandSpockO);

        return _possibleConstructorReturn(this, (FaHandSpockO.__proto__ || Object.getPrototypeOf(FaHandSpockO)).apply(this, arguments));
    }

    _createClass(FaHandSpockO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.9 4.1q-1 0-1.6 0.7t-0.7 1.7q0 0.3 0.1 0.5l3.1 13h-0.5l-2.4-10q-0.2-0.8-0.9-1.3t-1.4-0.5q-1 0-1.6 0.7t-0.7 1.7q0 0.2 0.1 0.6 0 0.3 0.8 3.3t1.4 5.9 0.7 2.9v4.7l-6.4-4.8q-0.7-0.5-1.6-0.5-1.1 0-1.9 0.7t-0.7 1.9q0 1.3 1.1 2.2l10.5 7.9q0.8 0.5 1.6 0.5h14.4q0.7 0 1.3-0.4t0.7-1.1l2-8.3q0.2-0.6 0.3-1.8t0.1-1.8l2.4-9.9q0.1-0.3 0.1-0.6 0-0.9-0.7-1.6t-1.6-0.7q-0.8 0-1.5 0.5t-0.8 1.3l-2.1 8.5h-0.5l2.7-11.4q0.1-0.3 0.1-0.5 0-1-0.7-1.7t-1.6-0.7q-0.8 0-1.4 0.5t-0.9 1.3l-3 12.5h-2.6l-3.4-14.2q-0.2-0.8-0.8-1.3t-1.5-0.4z m13.4 34.5h-14.4q-1.7 0-3.2-1.1l-10.5-7.8q-1-0.8-1.6-2t-0.6-2.4q0-2.2 1.6-3.8t3.7-1.5q0.5 0 1 0.1t0.9 0.2 0.8 0.5 0.8 0.4 0.8 0.7 0.7 0.5l-2.5-10.6q-0.2-0.7-0.2-1.2 0-1.9 1.3-3.4t3.1-1.6q0.3-1.8 1.7-3t3.2-1.2q1.8 0 3.1 1.1t1.8 2.7l2.1 8.9 1.7-7.2q0.5-1.7 1.8-2.8t3.1-1q1.8 0 3.1 1.1t1.8 2.9q1.9 0.2 3.2 1.6t1.3 3.3q0 0.7-0.2 1.2l-2.4 9.9q-0.1 0.5-0.1 1.4 0 1.1-0.3 2.2l-2.1 8.4q-0.4 1.5-1.6 2.5t-2.9 1z' })
                )
            );
        }
    }]);

    return FaHandSpockO;
}(React.Component);

exports.default = FaHandSpockO;
module.exports = exports['default'];