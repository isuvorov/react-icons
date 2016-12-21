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

var FaHandLizardO = function (_React$Component) {
    _inherits(FaHandLizardO, _React$Component);

    function FaHandLizardO() {
        _classCallCheck(this, FaHandLizardO);

        return _possibleConstructorReturn(this, (FaHandLizardO.__proto__ || Object.getPrototypeOf(FaHandLizardO)).apply(this, arguments));
    }

    _createClass(FaHandLizardO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.3 2.6q1.2 0 2.3 0.6t1.8 1.4l11.1 15.2q2.3 3.1 2.3 7v6.9q0 1.5-1.1 2.6t-2.7 1.1h-7.4q-1.6 0-2.7-1.1t-1.1-2.6v-3.5l-5.5-2.7h-10.6q-1.6 0-2.6-1.1t-1.1-2.7v-0.6q0-2.3 1.6-3.9t4-1.7h8.1l0.8-2.5h-13.3q-1.9 0-3.4-1.3t-1.5-3.2q-1.3-1.5-1.3-3.5v-0.7q0-1.5 1.1-2.6t2.6-1.1h18.6z m15 31.1v-6.9q0-3.1-1.8-5.5l-11.2-15.2q-0.7-1-2-1h-18.6q-0.5 0-0.8 0.4t-0.4 0.8q0 0.7 0 1t0.2 0.8 0.5 0.8q0.2-0.6 0.7-1t1.1-0.3h16.1v0.6h-16.1q-0.5 0-0.9 0.4t-0.4 0.8q0 0.9 0.1 1.2 0.1 0.8 0.8 1.4t1.6 0.5h14.2q0.8 0 1.3 0.6t0.6 1.3q0 0.3-0.1 0.6l-1.3 3.7q-0.2 0.6-0.7 0.9t-1 0.4h-8.6q-1.3 0-2.2 0.9t-0.9 2.2v0.6q0 0.5 0.3 0.9t0.9 0.4h10.9q0.3 0 0.5 0.1l6.2 3.1q0.5 0.2 0.7 0.7t0.3 0.9v3.9q0 0.5 0.4 0.8t0.9 0.4h7.4q0.5 0 0.9-0.4t0.4-0.8z' })
                )
            );
        }
    }]);

    return FaHandLizardO;
}(React.Component);

exports.default = FaHandLizardO;
module.exports = exports['default'];