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

var IoMouse = function (_React$Component) {
    _inherits(IoMouse, _React$Component);

    function IoMouse() {
        _classCallCheck(this, IoMouse);

        return _possibleConstructorReturn(this, (IoMouse.__proto__ || Object.getPrototypeOf(IoMouse)).apply(this, arguments));
    }

    _createClass(IoMouse, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 2.5z m9.6 12.6c0.2-0.1 0.2-0.1 0.3-0.1h0.1v13.8c0 2.8-1.6 5.5-4.1 7.1-0.4 0.2-0.7 0.4-1.1 0.5v0.1c-1.4 0.7-3.1 1-4.8 1-5.5 0-10-3.9-10-8.7v-13.8h0.1c0.1 0 0.2 0 0.4 0.1 2.6 1 5.9 1.8 9.5 1.8s6.9-0.8 9.5-1.8h0.1z m-4.8 21.3c0.4-0.1 0.7-0.3 1.1-0.5-0.4 0.2-0.7 0.3-1.1 0.5z m1.1-0.5c-0.4 0.2-0.7 0.3-1.1 0.5 0.4-0.2 0.7-0.3 1.1-0.5z m-5.6-33.4c5.4 0.2 9.7 4 9.7 8.8v1.7c-0.2 0.2-0.3 0.4-0.5 0.4 0 0.1-0.2 0-0.3 0.1-1.8 0.8-3.9 1.3-6.4 1.5h-0.2c-0.9 0-1.4 0-1.4-0.8v-6.7c0-0.7-0.5-1.2-1.2-1.2s-1.3 0.5-1.3 1.2v6.6c0 0.9-0.4 0.9-1.3 0.9h-0.1c-2.5-0.2-4.8-0.7-6.6-1.5-0.1 0-0.1-0.1-0.2-0.1-0.2 0-0.3-0.2-0.5-0.4v-1.7c0-4.8 4.5-8.7 9.9-8.8h0.4z' })
                )
            );
        }
    }]);

    return IoMouse;
}(React.Component);

exports.default = IoMouse;
module.exports = exports['default'];