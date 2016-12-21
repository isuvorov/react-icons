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

var IoCube = function (_React$Component) {
    _inherits(IoCube, _React$Component);

    function IoCube() {
        _classCallCheck(this, IoCube);

        return _possibleConstructorReturn(this, (IoCube.__proto__ || Object.getPrototypeOf(IoCube)).apply(this, arguments));
    }

    _createClass(IoCube, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34 13.1c0.5 0 1 0.5 1 1v14.3c0 0.7-0.5 1.3-1.1 1.7v0.1l-13.7 7.1v0.1c-0.1 0.1-0.3 0.1-0.4 0.1-0.6 0-1.1-0.5-1.1-0.9v-14.5c0-0.7 0.4-1.3 1.1-1.7l0.2-0.2 13.6-7c0.1-0.1 0.2-0.1 0.4-0.1z m-1-3.8s0.6 0.2 0.6 0.7c0 0.5-0.6 0.9-0.6 0.9l-14.5 7.6c-0.3 0.2-0.6 0.2-1 0.2s-0.7 0-1-0.2l-0.2-0.1-14.3-7.5s-0.6-0.4-0.6-0.9c0-0.5 0.6-0.7 0.6-0.7l14.2-6.4s0.8-0.4 1.3-0.4 1.3 0.4 1.3 0.4z m-17.8 11.1c0.7 0.4 1 1 1 1.7v14.5c0 0.4-0.4 0.9-1 0.9-0.1 0-0.3-0.1-0.4-0.2l-13.7-7.1v-0.1c-0.6-0.4-1.1-1-1.1-1.7v-14.3c0-0.5 0.5-1 1-1 0.2 0 0.3 0 0.4 0.1l0.2 0.1 13.3 6.9z' })
                )
            );
        }
    }]);

    return IoCube;
}(React.Component);

exports.default = IoCube;
module.exports = exports['default'];