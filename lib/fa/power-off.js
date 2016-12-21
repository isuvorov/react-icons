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

var FaPowerOff = function (_React$Component) {
    _inherits(FaPowerOff, _React$Component);

    function FaPowerOff() {
        _classCallCheck(this, FaPowerOff);

        return _possibleConstructorReturn(this, (FaPowerOff.__proto__ || Object.getPrototypeOf(FaPowerOff)).apply(this, arguments));
    }

    _createClass(FaPowerOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.3 20q0 3.5-1.4 6.7t-3.6 5.4-5.5 3.7-6.7 1.3-6.6-1.3-5.5-3.7-3.6-5.4-1.4-6.7q0-4.1 1.8-7.7t5-6q1-0.7 2.2-0.5t1.8 1.1q0.8 0.9 0.6 2.1t-1.1 1.9q-2.2 1.6-3.4 4t-1.2 5.1q0 2.3 0.9 4.4t2.5 3.7 3.6 2.4 4.4 0.9 4.5-0.9 3.6-2.4 2.5-3.7 0.9-4.4q0-2.7-1.2-5.1t-3.4-4q-0.9-0.7-1.1-1.9t0.5-2.1q0.7-1 1.9-1.1t2.1 0.5q3.3 2.4 5.1 6t1.8 7.7z m-14.3-17.1v14.2q0 1.2-0.8 2.1t-2.1 0.8-2-0.8-0.8-2.1v-14.2q0-1.2 0.8-2.1t2-0.8 2.1 0.8 0.8 2.1z' })
                )
            );
        }
    }]);

    return FaPowerOff;
}(React.Component);

exports.default = FaPowerOff;
module.exports = exports['default'];