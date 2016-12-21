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

var FaWpbeginner = function (_React$Component) {
    _inherits(FaWpbeginner, _React$Component);

    function FaWpbeginner() {
        _classCallCheck(this, FaWpbeginner);

        return _possibleConstructorReturn(this, (FaWpbeginner.__proto__ || Object.getPrototypeOf(FaWpbeginner)).apply(this, arguments));
    }

    _createClass(FaWpbeginner, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.6 18.6h3.5v-5h-3.5v5z m18.7 7.4v-2.1q-2.4 0.8-5.5 0.9-3 0-5.8-1.1t-4.9-2.7l0 2.1q2 1.8 4.8 2.9t6 1.1q2.9 0 5.4-1.1z m-13-7.4h14.3v-5h-14.3v5z m25.7-0.7q0 4.1-2.2 7.8 2 2.3 2 5.1 0 3.5-2.9 6t-7 2.5q-2.7 0-5-1.2t-3.6-3.1q-0.5 0-1.3 0t-1.3 0q-1.3 1.9-3.6 3.1t-5 1.2q-4.1 0-7-2.5t-2.9-6q0-2.8 2-5.1-2.2-3.7-2.2-7.8 0-4.7 2.7-8.6t7.3-6.3 10-2.3 10 2.3 7.3 6.3 2.7 8.6z' })
                )
            );
        }
    }]);

    return FaWpbeginner;
}(React.Component);

exports.default = FaWpbeginner;
module.exports = exports['default'];