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

var FaInbox = function (_React$Component) {
    _inherits(FaInbox, _React$Component);

    function FaInbox() {
        _classCallCheck(this, FaInbox);

        return _possibleConstructorReturn(this, (FaInbox.__proto__ || Object.getPrototypeOf(FaInbox)).apply(this, arguments));
    }

    _createClass(FaInbox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.8 21.4h7.1q0 0-0.1-0.1t0-0.2l-4.8-11.1h-15.8l-4.7 11.1q0 0 0 0.2t-0.1 0.1h7.1l2.1 4.3h7.1z m11.5 0.7v10.8q0 0.5-0.4 1t-1 0.4h-31.5q-0.6 0-1-0.4t-0.4-1v-10.8q0-1.4 0.6-2.7l5.3-12.4q0.2-0.5 0.8-0.9t1.2-0.4h18.5q0.6 0 1.2 0.4t0.8 0.9l5.3 12.4q0.6 1.3 0.6 2.7z' })
                )
            );
        }
    }]);

    return FaInbox;
}(React.Component);

exports.default = FaInbox;
module.exports = exports['default'];