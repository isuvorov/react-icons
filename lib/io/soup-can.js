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

var IoSoupCan = function (_React$Component) {
    _inherits(IoSoupCan, _React$Component);

    function IoSoupCan() {
        _classCallCheck(this, IoSoupCan);

        return _possibleConstructorReturn(this, (IoSoupCan.__proto__ || Object.getPrototypeOf(IoSoupCan)).apply(this, arguments));
    }

    _createClass(IoSoupCan, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm7.5 6.3c0-3.4 4.1-5 12.5-5s12.5 1.6 12.5 5-4.1 5-12.5 5-12.5-1.7-12.5-5z m12.5 28.1c-3.4 0-6.2-0.5-8.5-1.4s-3.4-2.2-3.4-3.6v-10c0 0.7 0.3 1.5 1 2.1s1.7 1.2 2.9 1.6 2.6 0.8 4.3 1c0 1 0.5 1.8 1.2 2.5s1.6 0.9 2.5 0.9 1.8-0.3 2.5-0.9 1.2-1.5 1.3-2.5c2.4-0.3 4.3-0.9 5.8-1.8s2.3-1.8 2.3-2.9v10c0 1.4-1.1 2.6-3.4 3.6s-5.1 1.4-8.5 1.4z m0-21.9c3.4 0 6.4-0.5 8.8-1.4s3.7-2.2 3.7-3.6v0.6c0 0.4-0.1 0.9-0.2 1.4s-0.2 0.9-0.4 1.1v7.5c0 1.1-0.8 2.1-2.3 3s-3.4 1.5-5.9 1.8c-0.2-0.9-0.7-1.5-1.4-2s-1.4-0.9-2.3-0.9-1.6 0.3-2.3 0.9-1.2 1.1-1.4 2c-2.5-0.3-4.4-0.9-5.9-1.8s-2.3-1.9-2.3-3v-7.5c-0.4-0.4-0.6-1.4-0.6-3.1 0 1.4 1.2 2.7 3.7 3.6s5.4 1.4 8.8 1.4z m11.9 18.1v1.9l0.6 1.3c0 0.5-0.2 1-0.6 1.5-0.9 1-2.4 1.9-4.6 2.5s-4.6 1-7.3 1-5.2-0.4-7.3-1-3.7-1.5-4.6-2.5c-0.4-0.5-0.6-1-0.6-1.5l0.6-1.3v-1.9c0 1.4 1.1 2.7 3.4 3.6s5.1 1.4 8.5 1.4 6.3-0.4 8.5-1.4 3.4-2.2 3.4-3.6z' })
                )
            );
        }
    }]);

    return IoSoupCan;
}(React.Component);

exports.default = IoSoupCan;
module.exports = exports['default'];