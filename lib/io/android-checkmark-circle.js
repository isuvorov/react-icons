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

var IoAndroidCheckmarkCircle = function (_React$Component) {
    _inherits(IoAndroidCheckmarkCircle, _React$Component);

    function IoAndroidCheckmarkCircle() {
        _classCallCheck(this, IoAndroidCheckmarkCircle);

        return _possibleConstructorReturn(this, (IoAndroidCheckmarkCircle.__proto__ || Object.getPrototypeOf(IoAndroidCheckmarkCircle)).apply(this, arguments));
    }

    _createClass(IoAndroidCheckmarkCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.1 16.9l5 5 14-13.9 2.3 2.2-16.3 16.3-7.3-7.3z m19.6 3.1h3.3c0 8.9-7.3 16.3-16.2 16.3s-16.3-7.4-16.3-16.3 7.3-16.2 16.3-16.2c2.1 0 4.2 0.4 6 1.2l-2.5 2.5c-1.1-0.3-2.3-0.5-3.5-0.5-7.2 0-13 5.8-13 13s5.8 13 13 13 12.9-5.8 12.9-13z' })
                )
            );
        }
    }]);

    return IoAndroidCheckmarkCircle;
}(React.Component);

exports.default = IoAndroidCheckmarkCircle;
module.exports = exports['default'];