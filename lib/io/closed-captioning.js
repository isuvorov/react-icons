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

var IoClosedCaptioning = function (_React$Component) {
    _inherits(IoClosedCaptioning, _React$Component);

    function IoClosedCaptioning() {
        _classCallCheck(this, IoClosedCaptioning);

        return _possibleConstructorReturn(this, (IoClosedCaptioning.__proto__ || Object.getPrototypeOf(IoClosedCaptioning)).apply(this, arguments));
    }

    _createClass(IoClosedCaptioning, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm0 5h40v30h-40v-30z m36.3 15c0-2.1 0-3.4-0.4-6.2s-1.8-4.4-4.6-4.7-7.1-0.4-10.8-0.4h-1c-3.7 0-8 0-10.8 0.4s-4.3 1.8-4.6 4.6-0.3 4.2-0.3 6.3 0.1 3.7 0.3 6.3 1.4 4.3 4.6 4.6 7.5 0.4 11.3 0.4 8.2 0 11.3-0.4 4.5-2.1 4.6-4.6 0.4-4.2 0.4-6.3z m-7.2 2.2v-0.3h4.1c0 2.1-0.5 3.7-1.5 4.8s-2.5 1.7-4.7 1.7c-1.1 0-2.1-0.2-2.9-0.4s-1.4-0.7-1.9-1.4-0.9-1.4-1.2-2.5-0.4-2.4-0.4-4 0.3-3.1 0.6-4.2 0.7-1.9 1.3-2.5 1.3-1.1 2.1-1.4 1.7-0.4 2.7-0.4c1.9 0 3.4 0.6 4.4 1.7s1.5 2.9 1.5 4.8h-4.1v-0.1c0-1.5-0.9-2.5-2.1-2.5s-1.9 0.8-2.2 2.3c0 0-0.1 0.9-0.1 2.3s0.1 2.2 0.1 2.2c0.1 1.3 1 2.2 2.2 2.2s2.1-0.7 2.1-2.2v-0.1z m-13.9 0v-0.3h4.2c0 2.1-0.6 3.7-1.5 4.8s-2.5 1.7-4.8 1.7c-1.1 0-2-0.2-2.8-0.4s-1.4-0.7-1.9-1.4-1-1.4-1.2-2.5-0.4-2.4-0.4-4 0.2-3.1 0.5-4.2 0.7-1.9 1.4-2.5 1.3-1.1 2.1-1.4 1.7-0.4 2.6-0.4c2 0 3.5 0.6 4.5 1.7s1.5 2.9 1.5 4.8h-4.1v-0.1c0-1.5-0.9-2.5-2.1-2.5s-2 0.8-2.2 2.3c0 0-0.1 0.9-0.1 2.3s0.1 2.2 0.1 2.2c0.1 1.3 1 2.2 2.1 2.2s2.1-0.7 2.1-2.2v-0.1z' })
                )
            );
        }
    }]);

    return IoClosedCaptioning;
}(React.Component);

exports.default = IoClosedCaptioning;
module.exports = exports['default'];