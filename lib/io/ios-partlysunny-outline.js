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

var IoIosPartlysunnyOutline = function (_React$Component) {
    _inherits(IoIosPartlysunnyOutline, _React$Component);

    function IoIosPartlysunnyOutline() {
        _classCallCheck(this, IoIosPartlysunnyOutline);

        return _possibleConstructorReturn(this, (IoIosPartlysunnyOutline.__proto__ || Object.getPrototypeOf(IoIosPartlysunnyOutline)).apply(this, arguments));
    }

    _createClass(IoIosPartlysunnyOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.3 11.7v-4.2h1.2v4.2h-1.2z m-11.3 8.3v-1.2h4.3v1.2h-4.3z m3.4-8.4l0.8-0.8 2.5 2.5-0.8 0.8z m14 2.5l-0.8-0.9 2.5-2.5 0.8 0.9z m-13 13.4l-0.8-0.9 2.4-2.4 0.9 0.9z m5.7-4.5c-0.3 0.3-0.6 0.6-1 1-1.8-1-3-2.8-3-4.9 0-3.1 2.5-5.6 5.5-5.6 1.7 0 3.2 0.8 4.2 2-0.3 0.1-0.7 0.3-1.1 0.6-0.8-0.9-1.8-1.3-3.1-1.3-2.3 0-4.3 1.9-4.3 4.3 0 1.8 1.2 3.3 2.8 3.9z m8.3-4.2c-2.7 0-5 2.1-5 4.8v0.9l0.1 0.8c-0.4 0-0.9 0.1-1.1 0.1-1.5 0.2-2.6 1.4-2.6 2.9 0 0.8 0.3 1.5 0.8 2s1.3 0.9 2.1 0.9h12.2c2.1 0 3.9-1.7 3.9-3.9s-1.8-3.9-3.9-3.9c-0.1 0-0.3 0.1-0.4 0.1l-1.1 0.2-0.3-1.1c-0.2-1.1-0.8-2.1-1.7-2.8s-1.9-1-3-1z m0-1.3c2.8 0 5.3 2 5.9 4.8h0.6c2.8 0 5.1 2.2 5.1 5s-2.3 5.2-5.1 5.2h-12.2c-2.2 0-4.1-1.9-4.1-4.1 0-2.1 1.6-4 3.7-4.2v-0.6c0-3.4 2.7-6.1 6.1-6.1z' })
                )
            );
        }
    }]);

    return IoIosPartlysunnyOutline;
}(React.Component);

exports.default = IoIosPartlysunnyOutline;
module.exports = exports['default'];