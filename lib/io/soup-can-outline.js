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

var IoSoupCanOutline = function (_React$Component) {
    _inherits(IoSoupCanOutline, _React$Component);

    function IoSoupCanOutline() {
        _classCallCheck(this, IoSoupCanOutline);

        return _possibleConstructorReturn(this, (IoSoupCanOutline.__proto__ || Object.getPrototypeOf(IoSoupCanOutline)).apply(this, arguments));
    }

    _createClass(IoSoupCanOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 11.3c-6.9 0-12.5-2.3-12.5-5s5.6-5 12.5-5 12.5 2.2 12.5 5-5.6 5-12.5 5z m0-8.7c-5.5 0-9.8 1.5-9.8 3.3s4.3 3.4 9.8 3.4 9.8-1.5 9.8-3.4-4.3-3.3-9.8-3.3z m0.1 9.9c6.9 0 12.3-2.3 12.4-5 0 0.4 0 2.6-0.6 3.1v18.8c0 2.7-5 5-11.9 5s-11.9-2.3-11.9-5v-18.8c-0.6-0.4-0.6-3.1-0.6-3.1 0 2.7 5.7 5 12.6 5z m9.3 16.9v-6.3c-1.4 0.8-3.4 1.4-5.6 1.7h-0.2c-0.5 1.5-1.9 2.7-3.6 2.7s-3.1-1.2-3.6-2.7h-0.1c-2.3-0.3-4.3-0.9-5.7-1.7v6.3c0.1 0.1 0.7 0.8 2.4 1.4 1.8 0.7 4.3 1.1 7 1.1s5.2-0.4 7.1-1.1c1.6-0.6 2.3-1.3 2.3-1.4z m0-8.8v-7.1c-2.6 1-5.9 1.5-9.3 1.5-3.5 0-6.8-0.5-9.5-1.5v7.1c1.4 0.8 3.4 1.4 5.7 1.7h0.3c0.5-1.4 1.8-2.3 3.4-2.3s2.9 0.9 3.4 2.3h0.3c2.3-0.3 4.3-0.9 5.7-1.7z m-9.4 15.7z m11.9-3.8l0.6 1.3c0 0.5-0.2 1-0.6 1.5-1.7 2-6.4 3.5-11.9 3.5s-10.2-1.5-11.9-3.5c-0.4-0.5-0.6-1-0.6-1.5l0.6-1.3v-1.2c0 2.7 4.9 5 11.9 5s11.9-2.2 11.9-5v1.2z' })
                )
            );
        }
    }]);

    return IoSoupCanOutline;
}(React.Component);

exports.default = IoSoupCanOutline;
module.exports = exports['default'];