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

var FaTextHeight = function (_React$Component) {
    _inherits(FaTextHeight, _React$Component);

    function FaTextHeight() {
        _classCallCheck(this, FaTextHeight);

        return _possibleConstructorReturn(this, (FaTextHeight.__proto__ || Object.getPrototypeOf(FaTextHeight)).apply(this, arguments));
    }

    _createClass(FaTextHeight, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm38.9 31.4q0.8 0 1 0.4t-0.3 1l-2.8 3.7q-0.4 0.5-1.1 0.5t-1.1-0.5l-2.8-3.7q-0.4-0.5-0.2-1t0.9-0.4h1.8v-22.8h-1.8q-0.7 0-0.9-0.4t0.2-1l2.8-3.7q0.5-0.5 1.1-0.5t1.1 0.5l2.8 3.7q0.5 0.5 0.3 1t-1 0.4h-1.8v22.8h1.8z m-37.1-28.5l1.2 0.6q0.3 0.1 4.7 0.1 1 0 3-0.1t2.9 0q0.8 0 2.4 0t2.4 0h6.6q0.1 0 0.4 0t0.5 0 0.3 0 0.4-0.2 0.4-0.4l0.9 0q0.1 0 0.3 0t0.3 0q0.1 2.5 0.1 7.5 0 1.8-0.1 2.4-0.9 0.3-1.6 0.4-0.5-1-1.2-2.8 0-0.2-0.2-1.1t-0.3-1.7-0.2-0.7q-0.1-0.2-0.3-0.3t-0.3-0.2-0.3 0-0.4 0-0.4 0q-0.4 0-1.5 0t-1.6 0-1.4 0-1.6 0.1q-0.2 1.8-0.2 3.1 0 2.1 0 8.6t0.1 10.2q0 0.4-0.1 1.6t0 2 0.3 1.6q0.9 0.4 2.8 0.9t2.6 0.9q0.2 0.8 0.2 1.1 0 0.3-0.1 0.6l-0.8 0q-1.7 0.1-4.8-0.1t-4.7-0.3q-1.1 0-3.3 0.2t-3.4 0.2q-0.1-1.1-0.1-1.1v-0.2q0.4-0.6 1.4-1t2.2-0.6 1.7-0.6q0.5-1 0.5-8.6 0-2.2-0.1-6.7t-0.1-6.8v-2.6q0-0.1 0-0.4t0-0.5 0-0.6-0.1-0.5-0.1-0.3q-0.2-0.3-3.6-0.3-0.7 0-2.1 0.3t-1.7 0.5q-0.5 0.3-0.8 1.7t-0.7 2.4-0.9 1.2q-1-0.6-1.3-1v-8.5z' })
                )
            );
        }
    }]);

    return FaTextHeight;
}(React.Component);

exports.default = FaTextHeight;
module.exports = exports['default'];