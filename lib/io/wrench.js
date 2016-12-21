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

var IoWrench = function (_React$Component) {
    _inherits(IoWrench, _React$Component);

    function IoWrench() {
        _classCallCheck(this, IoWrench);

        return _possibleConstructorReturn(this, (IoWrench.__proto__ || Object.getPrototypeOf(IoWrench)).apply(this, arguments));
    }

    _createClass(IoWrench, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.6 9c1.1 1.1 1.5 2.4 1.4 3.4s-0.5 3.1-2.5 5.1-6 3.3-8.8 1.9c-0.4-0.3-1-0.4-1.7 0.2-0.7 0.7-15.7 16.8-15.7 16.8-1.4 1.5-3.8 1.4-5.2 0s-1.5-3.8 0-5.2c0 0 16.2-15.1 16.8-15.7s0.4-1.3 0.2-1.8c-1.5-3.6 0.2-6.9 1.9-8.7 1.7-1.9 4-2.4 5.1-2.5 1-0.1 2.4 0.4 3.4 1.4l-4.4 4.4 0.7 4.4 4.3 0.7z m-29 25.6c0.5-0.5 0.5-1.3 0-1.8s-1.2-0.5-1.7 0-0.5 1.3 0 1.8 1.2 0.5 1.7 0z' })
                )
            );
        }
    }]);

    return IoWrench;
}(React.Component);

exports.default = IoWrench;
module.exports = exports['default'];