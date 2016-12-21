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

var FaTencentWeibo = function (_React$Component) {
    _inherits(FaTencentWeibo, _React$Component);

    function FaTencentWeibo() {
        _classCallCheck(this, FaTencentWeibo);

        return _possibleConstructorReturn(this, (FaTencentWeibo.__proto__ || Object.getPrototypeOf(FaTencentWeibo)).apply(this, arguments));
    }

    _createClass(FaTencentWeibo, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24.3 12.8q0 1.8-1.3 3t-3 1.3q-1.4 0-2.5-0.8-1.4 1.5-2.6 3.3-5.5 8.2-4.5 19.1 0.1 0.5-0.2 0.9t-0.8 0.4h-0.1q-0.5 0-0.8-0.3t-0.4-0.8q-0.3-2.8-0.1-5.5t0.7-4.8 1.2-4.2 1.5-3.4 1.7-2.8q1.3-2 2.9-3.7-0.3-0.8-0.3-1.7 0-1.8 1.2-3.1t3.1-1.2 3 1.2 1.3 3.1z m8.5 0.2q0 3.5-1.7 6.5t-4.8 4.8-6.5 1.7q-1.4 0-2.9-0.3-0.5-0.1-0.8-0.5t-0.1-0.9q0.1-0.5 0.5-0.7t0.9-0.2q1.1 0.3 2.4 0.3 2.2 0 4.1-0.8t3.5-2.3 2.2-3.4 0.9-4.2-0.9-4.1-2.2-3.5-3.5-2.2-4.1-0.9-4.2 0.9-3.4 2.2-2.3 3.5-0.8 4.1q0 2.6 1.2 4.9 0.2 0.4 0 0.9t-0.5 0.6-0.9 0.1-0.7-0.6q-1.4-2.7-1.4-5.9 0-2.6 1-5.1t2.8-4.1 4.1-2.8 5.1-1q3.5 0 6.5 1.7t4.8 4.8 1.7 6.5z' })
                )
            );
        }
    }]);

    return FaTencentWeibo;
}(React.Component);

exports.default = FaTencentWeibo;
module.exports = exports['default'];