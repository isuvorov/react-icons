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

var FaFireExtinguisher = function (_React$Component) {
    _inherits(FaFireExtinguisher, _React$Component);

    function FaFireExtinguisher() {
        _classCallCheck(this, FaFireExtinguisher);

        return _possibleConstructorReturn(this, (FaFireExtinguisher.__proto__ || Object.getPrototypeOf(FaFireExtinguisher)).apply(this, arguments));
    }

    _createClass(FaFireExtinguisher, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15.9 4.3q0-0.6-0.4-1t-1-0.4-1 0.4-0.4 1 0.4 1 1 0.4 1-0.4 0.4-1z m20-0.7v7.1q0 0.4-0.2 0.6-0.2 0.1-0.5 0.1-0.1 0-0.1 0l-10-2.1q-0.3-0.1-0.4-0.3t-0.2-0.4h-5.7v2.2q2.5 0.6 4.1 2.5t1.6 4.6v17.8q0 0.6-0.4 1t-1 0.4h-11.5q-0.5 0-1-0.4t-0.4-1v-17.8q0-2.4 1.4-4.3t3.6-2.6v-2.4h-0.7q-1.3 0-2.6 0.5t-2 1.2-1.5 1.5-0.9 1.2-0.3 0.5q-0.4 0.8-1.3 0.8-0.3 0-0.6-0.2-0.5-0.2-0.7-0.8t0.1-1.1q0.1-0.2 0.3-0.6t0.8-1.2 1.4-1.5 1.9-1.5 2.4-1.2q-0.6-0.9-0.6-1.9 0-1.5 1.1-2.5t2.5-1.1 2.5 1.1 1.1 2.5q0 0.7-0.3 1.4h6.7q0-0.2 0.2-0.4t0.4-0.3l10-2.1q0 0 0.1 0 0.3 0 0.5 0.1 0.2 0.2 0.2 0.6z' })
                )
            );
        }
    }]);

    return FaFireExtinguisher;
}(React.Component);

exports.default = FaFireExtinguisher;
module.exports = exports['default'];