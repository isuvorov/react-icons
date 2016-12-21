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

var IoClipboard = function (_React$Component) {
    _inherits(IoClipboard, _React$Component);

    function IoClipboard() {
        _classCallCheck(this, IoClipboard);

        return _possibleConstructorReturn(this, (IoClipboard.__proto__ || Object.getPrototypeOf(IoClipboard)).apply(this, arguments));
    }

    _createClass(IoClipboard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.3 12.5c0.1-1.6 0.7-2.7 2.1-3.1l0.1-0.1c1-0.2 1.7-0.5 1.7-1.6v-1.6c0-2 1.6-3.6 3.6-3.6s3.5 1.6 3.5 3.6v1.6c0 1 0.7 1.4 1.7 1.7h0.1c1.4 0.4 2 1.5 2.2 3.1h-15z m7.5-7.5c-0.7 0-1.1 0.5-1.1 1.1s0.4 1.1 1.1 1.1 1-0.5 1-1.1-0.4-1.1-1-1.1z m11.6 0c1.2 0 2.1 0.9 2.1 2.2v28.1c0 1.3-0.9 2.2-2.1 2.2h-23.2c-1.2 0-2.2-0.9-2.2-2.2v-28.1c0-1.3 1-2.2 2.2-2.2h5.7v1c0 0.9-0.7 1.5-1.5 1.5h-2.9c-0.5 0-0.9 0.5-0.9 1v25.6c0 0.4 0.4 0.9 0.8 0.9h20.7c0.5 0 0.9-0.5 0.9-0.9v-25.6c0-0.5-0.4-1-0.9-1h-2.9c-0.8 0-1.6-0.6-1.6-1.5v-1h5.8z m-20.4 12.5v-2.5h8.8v2.5h-8.8z m0 15v-2.5h12.5v2.5h-12.5z m0-5v-2.5h10.1v2.5h-10.1z m0-5v-2.5h16.3v2.5h-16.3z' })
                )
            );
        }
    }]);

    return IoClipboard;
}(React.Component);

exports.default = IoClipboard;
module.exports = exports['default'];