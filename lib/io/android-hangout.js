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

var IoAndroidHangout = function (_React$Component) {
    _inherits(IoAndroidHangout, _React$Component);

    function IoAndroidHangout() {
        _classCallCheck(this, IoAndroidHangout);

        return _possibleConstructorReturn(this, (IoAndroidHangout.__proto__ || Object.getPrototypeOf(IoAndroidHangout)).apply(this, arguments));
    }

    _createClass(IoAndroidHangout, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 3.8c7.5 0 13.7 6 13.7 13.4 0 7.1-5.9 15.3-13.7 19.1v-5.6c-7.6 0-13.8-6.1-13.8-13.5s6.2-13.4 13.8-13.4z m-0.8 14.2v-4.7h-4.9v4.7h2.4l-1.6 3.2h2.4z m6.4 0v-4.7h-4.9v4.7h2.5l-1.6 3.2h2.4z' })
                )
            );
        }
    }]);

    return IoAndroidHangout;
}(React.Component);

exports.default = IoAndroidHangout;
module.exports = exports['default'];