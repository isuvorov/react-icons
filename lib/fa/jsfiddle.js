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

var FaJsfiddle = function (_React$Component) {
    _inherits(FaJsfiddle, _React$Component);

    function FaJsfiddle() {
        _classCallCheck(this, FaJsfiddle);

        return _possibleConstructorReturn(this, (FaJsfiddle.__proto__ || Object.getPrototypeOf(FaJsfiddle)).apply(this, arguments));
    }

    _createClass(FaJsfiddle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.9 17.6q2.2 0.9 3.5 2.8t1.4 4.3q0 3.2-2.3 5.5t-5.6 2.2q0 0-0.2 0t-0.2 0h-23.6q-3.3-0.2-5.6-2.4t-2.3-5.5q0-2.1 1.1-3.9t2.8-2.9q-0.2-0.7-0.2-1.6 0-2.2 1.6-3.8t3.8-1.5q1.9 0 3.4 1.1 1.4-3 4.3-4.8t6.3-1.8q3.3 0 6 1.5t4.3 4.3 1.6 5.8q0 0.1-0.1 0.3t0 0.4z m-25.8 5.2q0 2.3 1.6 3.7t4.1 1.4q2.6 0 4.6-1.9-0.3-0.4-0.9-1.1t-0.9-1q-1.3 1.2-2.8 1.2-1 0-1.8-0.6t-0.7-1.7q0-1 0.7-1.7t1.8-0.7q0.9 0 1.6 0.5t1.5 1 1.2 1.5 1.4 1.6 1.5 1.4 1.8 1.1 2.4 0.4q2.4 0 4-1.4t1.6-3.7q0-2.3-1.6-3.7t-4.1-1.4q-2.7 0-4.6 1.9 0.2 0.3 0.5 0.7t0.7 0.7 0.6 0.7q1.3-1.3 2.7-1.3 1 0 1.8 0.7t0.8 1.6q0 1.1-0.7 1.8t-1.9 0.7q-0.8 0-1.6-0.4t-1.4-1.1-1.2-1.5-1.4-1.6-1.5-1.4-1.8-1.1-2.3-0.4q-2.4 0-4.1 1.4t-1.6 3.7z' })
                )
            );
        }
    }]);

    return FaJsfiddle;
}(React.Component);

exports.default = FaJsfiddle;
module.exports = exports['default'];