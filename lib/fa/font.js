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

var FaFont = function (_React$Component) {
    _inherits(FaFont, _React$Component);

    function FaFont() {
        _classCallCheck(this, FaFont);

        return _possibleConstructorReturn(this, (FaFont.__proto__ || Object.getPrototypeOf(FaFont)).apply(this, arguments));
    }

    _createClass(FaFont, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.7 12.5l-3.8 10q0.7 0 3 0.1t3.6 0q0.4 0 1.3 0-2-5.7-4.1-10.1z m-16.2 24.6l0-1.7q0.6-0.2 1.3-0.3t1.3-0.2 1.1-0.4 1-0.6 0.7-1.1l5.2-13.8 6.3-16.1h2.9q0.1 0.3 0.2 0.4l4.6 10.7q0.7 1.8 2.3 5.8t2.6 6.1q0.3 0.8 1.3 3.2t1.6 3.8q0.4 1 0.8 1.3 0.4 0.3 1.9 0.6t1.9 0.5q0.1 0.8 0.1 1.3 0 0.1 0 0.3t0 0.2q-1.4 0-4.2-0.1t-4.3-0.2q-1.7 0-4.8 0.1t-4 0.2q0-0.9 0.1-1.7l3-0.6q0 0 0.2-0.1t0.4-0.1 0.3-0.1 0.3-0.1 0.3-0.2 0.2-0.3 0-0.3q0-0.3-0.6-2.1t-1.7-4-0.9-2.2l-10-0.1q-0.6 1.3-1.7 4.4t-1.2 3.6q0 0.5 0.3 0.9t1 0.5 1.1 0.3 1.3 0.2 0.9 0.1q0 0.4 0 1.3 0 0.2 0 0.6-1.3 0-3.9-0.2t-3.9-0.3q-0.2 0-0.6 0.1t-0.5 0.1q-1.8 0.3-4.2 0.3z' })
                )
            );
        }
    }]);

    return FaFont;
}(React.Component);

exports.default = FaFont;
module.exports = exports['default'];