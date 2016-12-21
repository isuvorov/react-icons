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

var IoIosTimeOutline = function (_React$Component) {
    _inherits(IoIosTimeOutline, _React$Component);

    function IoIosTimeOutline() {
        _classCallCheck(this, IoIosTimeOutline);

        return _possibleConstructorReturn(this, (IoIosTimeOutline.__proto__ || Object.getPrototypeOf(IoIosTimeOutline)).apply(this, arguments));
    }

    _createClass(IoIosTimeOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 2.5c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5-17.5-7.8-17.5-17.5 7.8-17.5 17.5-17.5z m11.5 29c1.5-1.5 2.7-3.2 3.5-5.2 0.9-2 1.3-4.1 1.3-6.3s-0.4-4.3-1.3-6.3c-0.8-2-2-3.7-3.5-5.2s-3.2-2.7-5.2-3.5c-2-0.9-4.1-1.2-6.3-1.2s-4.3 0.3-6.3 1.2c-2 0.8-3.7 2-5.2 3.5s-2.7 3.2-3.5 5.2c-0.9 2-1.2 4.1-1.2 6.3s0.3 4.3 1.2 6.3c0.8 2 2 3.7 3.5 5.2s3.2 2.7 5.2 3.5c2 0.9 4.1 1.3 6.3 1.3s4.3-0.4 6.3-1.3c2-0.8 3.7-2 5.2-3.5z m-12.1-25.2c0-0.4 0.2-0.7 0.6-0.7s0.6 0.3 0.6 0.7-0.2 0.6-0.6 0.6-0.6-0.3-0.6-0.6z m0 27.5c0-0.4 0.2-0.7 0.6-0.7s0.6 0.3 0.6 0.7-0.2 0.6-0.6 0.6-0.6-0.3-0.6-0.6z m13.7-13.8c0-0.4 0.3-0.6 0.7-0.6s0.6 0.2 0.6 0.6-0.3 0.6-0.6 0.6-0.7-0.2-0.7-0.6z m-27.5 0c0-0.4 0.3-0.6 0.7-0.6s0.6 0.2 0.6 0.6-0.3 0.6-0.6 0.6-0.7-0.2-0.7-0.6z m6.9-11.9c0-0.4 0.2-0.6 0.6-0.6s0.7 0.2 0.7 0.6-0.3 0.7-0.7 0.7-0.6-0.3-0.6-0.7z m13.8 23.8c0-0.4 0.2-0.6 0.6-0.6s0.6 0.2 0.6 0.6-0.2 0.6-0.6 0.6-0.6-0.2-0.6-0.6z m5-18.8c0-0.4 0.2-0.6 0.6-0.6s0.6 0.2 0.6 0.6-0.2 0.7-0.6 0.7-0.6-0.3-0.6-0.7z m-23.8 13.8c0-0.4 0.2-0.6 0.6-0.6s0.7 0.2 0.7 0.6-0.3 0.6-0.7 0.6-0.6-0.2-0.6-0.6z m0-13.8c0-0.4 0.2-0.6 0.6-0.6s0.7 0.2 0.7 0.6-0.3 0.7-0.7 0.7-0.6-0.3-0.6-0.7z m23.8 13.8c0-0.4 0.2-0.6 0.6-0.6s0.6 0.2 0.6 0.6-0.2 0.6-0.6 0.6-0.6-0.2-0.6-0.6z m-5-18.8c0-0.4 0.2-0.6 0.6-0.6s0.6 0.2 0.6 0.6-0.2 0.7-0.6 0.7-0.6-0.3-0.6-0.7z m-13.8 23.8c0-0.4 0.2-0.6 0.6-0.6s0.7 0.2 0.7 0.6-0.3 0.6-0.7 0.6-0.6-0.2-0.6-0.6z m8.6-12.5c0.3 0.6 0.2 1.4-0.5 1.7v9.5c0 0.3-0.3 0.7-0.6 0.7s-0.6-0.4-0.6-0.7v-9.5c-0.2-0.1-0.3-0.3-0.5-0.5-0.2-0.4-0.2-0.8 0-1.2l-2.9-4.9c-0.1-0.4-0.1-0.7 0.2-0.9s0.7-0.1 0.8 0.2l3 5c0.4 0 0.9 0.2 1.1 0.6z' })
                )
            );
        }
    }]);

    return IoIosTimeOutline;
}(React.Component);

exports.default = IoIosTimeOutline;
module.exports = exports['default'];