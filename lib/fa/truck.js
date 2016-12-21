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

var FaTruck = function (_React$Component) {
    _inherits(FaTruck, _React$Component);

    function FaTruck() {
        _classCallCheck(this, FaTruck);

        return _possibleConstructorReturn(this, (FaTruck.__proto__ || Object.getPrototypeOf(FaTruck)).apply(this, arguments));
    }

    _createClass(FaTruck, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.9 31.2q0-1.2-0.8-2t-2-0.8-1.9 0.8-0.8 2 0.8 1.9 2 0.8 1.9-0.8 0.8-2z m-8.3-11.2h8.3v-5.6h-3.4q-0.3 0-0.5 0.2l-4.2 4.3q-0.2 0.2-0.2 0.4v0.7z m27.8 11.2q0-1.2-0.8-2t-1.9-0.8-2 0.8-0.8 2 0.8 1.9 2 0.8 1.9-0.8 0.8-2z m5.6-23.7v22.3q0 0.3-0.1 0.5t-0.3 0.4-0.3 0.3-0.5 0.1-0.5 0.1-0.6 0-0.5 0q0 2.3-1.6 3.9t-3.9 1.6-4-1.6-1.6-3.9h-8.4q0 2.3-1.6 3.9t-3.9 1.6-4-1.6-1.6-3.9h-1.4q-0.1 0-0.5 0t-0.6 0-0.5-0.1-0.5-0.1-0.3-0.3-0.3-0.4-0.1-0.5q0-0.6 0.4-1t1-0.4v-7q0-0.2 0-0.8t0-0.8 0-0.7 0.2-0.9 0.3-0.6 0.5-0.7l4.3-4.3q0.4-0.4 1.1-0.7t1.3-0.3h3.4v-4.1q0-0.6 0.5-1t0.9-0.4h22.3q0.6 0 1 0.4t0.4 1z' })
                )
            );
        }
    }]);

    return FaTruck;
}(React.Component);

exports.default = FaTruck;
module.exports = exports['default'];