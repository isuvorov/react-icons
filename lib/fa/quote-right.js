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

var FaQuoteRight = function (_React$Component) {
    _inherits(FaQuoteRight, _React$Component);

    function FaQuoteRight() {
        _classCallCheck(this, FaQuoteRight);

        return _possibleConstructorReturn(this, (FaQuoteRight.__proto__ || Object.getPrototypeOf(FaQuoteRight)).apply(this, arguments));
    }

    _createClass(FaQuoteRight, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.6 7.1v15.8q0 2.3-0.9 4.4t-2.4 3.6-3.7 2.5-4.4 0.9h-1.4q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.6 0.4-1t1-0.4h1.4q2.4 0 4.1-1.7t1.6-4v-0.8q0-0.8-0.6-1.5t-1.5-0.6h-5q-1.8 0-3.1-1.2t-1.2-3.1v-8.6q0-1.7 1.3-3t3-1.2h8.6q1.7 0 3 1.2t1.2 3z m20 0v15.8q0 2.3-0.9 4.4t-2.4 3.6-3.7 2.5-4.4 0.9h-1.4q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.6 0.4-1t1-0.4h1.4q2.4 0 4.1-1.7t1.6-4v-0.8q0-0.8-0.6-1.5t-1.5-0.6h-5q-1.8 0-3.1-1.2t-1.2-3.1v-8.6q0-1.7 1.3-3t3-1.2h8.6q1.7 0 3 1.2t1.2 3z' })
                )
            );
        }
    }]);

    return FaQuoteRight;
}(React.Component);

exports.default = FaQuoteRight;
module.exports = exports['default'];