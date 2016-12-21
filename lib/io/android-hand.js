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

var IoAndroidHand = function (_React$Component) {
    _inherits(IoAndroidHand, _React$Component);

    function IoAndroidHand() {
        _classCallCheck(this, IoAndroidHand);

        return _possibleConstructorReturn(this, (IoAndroidHand.__proto__ || Object.getPrototypeOf(IoAndroidHand)).apply(this, arguments));
    }

    _createClass(IoAndroidHand, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.3 21.4c1.2 1.2 1.4 2.8 0.3 4 0 0-7.5 8-9.9 9.4-2.2 1.7-5.1 2.7-7.8 2.7-4.3 0-7.9-2.8-9.1-6.6v-0.1c0-0.1-0.1-0.2-0.1-0.3l-4.5-14.7c-0.4-1.2 0.1-2.5 1.3-2.9s2.3 0.2 2.7 1.4l2.7 6.9c0.1 0.3 0.1 0.1 0.1-0.1l-1.7-12.6c-0.2-1.2 0.6-2.3 1.7-2.6s2.4 0.7 2.6 1.8l2 10.8c0 0.2 0.1 0.2 0.1 0v-13.8c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2l0.6 13.7c0 0.3 0.3 0.3 0.3 0l1.8-10.5c0.2-1.2 1.3-2.1 2.4-2s2.2 1.4 2 2.5l-1.6 13.5c-0.1 0.9-0.3 2.3 0.1 2.8 0.6 0.7 1.6 0.7 2.4-0.2l3.3-3.2c1.2-1.2 2.8-1.1 3.9 0.1z' })
                )
            );
        }
    }]);

    return IoAndroidHand;
}(React.Component);

exports.default = IoAndroidHand;
module.exports = exports['default'];