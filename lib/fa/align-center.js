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

var FaAlignCenter = function (_React$Component) {
    _inherits(FaAlignCenter, _React$Component);

    function FaAlignCenter() {
        _classCallCheck(this, FaAlignCenter);

        return _possibleConstructorReturn(this, (FaAlignCenter.__proto__ || Object.getPrototypeOf(FaAlignCenter)).apply(this, arguments));
    }

    _createClass(FaAlignCenter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm40 30v2.9q0 0.5-0.4 1t-1 0.4h-37.2q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.6 0.4-1t1-0.4h37.2q0.5 0 1 0.4t0.4 1z m-8.6-8.6v2.9q0 0.6-0.4 1t-1 0.4h-20q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.5 0.4-1t1-0.4h20q0.6 0 1 0.4t0.4 1z m5.7-8.5v2.8q0 0.6-0.4 1t-1 0.4h-31.4q-0.6 0-1-0.4t-0.4-1v-2.8q0-0.6 0.4-1t1-0.5h31.4q0.6 0 1 0.5t0.4 1z m-8.5-8.6v2.8q0 0.6-0.5 1t-1 0.5h-14.2q-0.6 0-1-0.5t-0.5-1v-2.8q0-0.6 0.5-1t1-0.4h14.2q0.6 0 1 0.4t0.5 1z' })
                )
            );
        }
    }]);

    return FaAlignCenter;
}(React.Component);

exports.default = FaAlignCenter;
module.exports = exports['default'];