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

var IoIosGameControllerBOutline = function (_React$Component) {
    _inherits(IoIosGameControllerBOutline, _React$Component);

    function IoIosGameControllerBOutline() {
        _classCallCheck(this, IoIosGameControllerBOutline);

        return _possibleConstructorReturn(this, (IoIosGameControllerBOutline.__proto__ || Object.getPrototypeOf(IoIosGameControllerBOutline)).apply(this, arguments));
    }

    _createClass(IoIosGameControllerBOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.6 15.9c0.8 0 1.5 0.7 1.5 1.6s-0.7 1.6-1.5 1.6-1.6-0.7-1.6-1.6 0.7-1.6 1.6-1.6z m3.4 3.5c0.9 0 1.6 0.7 1.6 1.5s-0.7 1.6-1.6 1.6-1.6-0.7-1.6-1.6 0.7-1.5 1.6-1.5z m-17-5c1.8 0 3.1 1.4 3.1 3.1s-1.3 3.1-3.1 3.1-3-1.4-3-3.1 1.3-3.1 3-3.1z m0 4.6c0.9 0 1.5-0.6 1.5-1.5s-0.6-1.5-1.5-1.5-1.4 0.6-1.4 1.5 0.6 1.5 1.4 1.5z m17-6.5c0.9 0 1.6 0.7 1.6 1.6s-0.7 1.5-1.6 1.5-1.6-0.7-1.6-1.5 0.7-1.6 1.6-1.6z m3.4 3.4c0.9 0 1.6 0.7 1.6 1.6s-0.7 1.6-1.6 1.6-1.5-0.7-1.5-1.6 0.7-1.6 1.5-1.6z m5.5 3.6c1.6 6.8 1.4 11.8-0.5 12.8-0.4 0.1-0.7 0.2-1.1 0.2-1.7 0-3.5-1.9-5.3-4.1-2-2.5-2.5-2.5-8.6-2.5h-1.8c-6.1 0-6.6 0-8.6 2.5-1.8 2.2-3.6 4.1-5.3 4.1-0.4 0-0.7-0.1-1.1-0.2-1.9-1-2.2-6-0.5-12.8s3.4-10.7 6.9-11.7c0.7-0.2 1.4-0.3 2-0.3 2.2 0 3.7 1.2 7.5 1.2s5.3-1.2 7.5-1.2c0.6 0 1.2 0.1 2 0.3 3.5 1 5.3 4.8 6.9 11.7z m-1.1 11.7c0.8-0.4 1.8-3.8-0.1-11.4-1.6-7.1-3.3-10-6.1-10.8-0.6-0.2-1.1-0.2-1.6-0.2-0.8 0-1.5 0.1-2.3 0.3-1.3 0.4-2.9 0.8-5.2 0.8s-3.9-0.4-5.2-0.8c-0.8-0.2-1.5-0.3-2.3-0.3-0.5 0-1 0-1.6 0.2-2.8 0.8-4.5 3.7-6.1 10.8-1.9 7.6-0.9 11-0.1 11.4 0.1 0.1 0.3 0.1 0.5 0.1 0.4 0 1.1-0.4 1.8-1s1.4-1.4 2.5-2.6 1.8-2.2 3.4-2.7c1.3-0.4 3-0.4 6.2-0.4h1.8c3.2 0 4.9 0 6.2 0.4 1.6 0.5 2.4 1.4 3.4 2.7s1.8 2 2.5 2.6 1.4 0.9 1.8 0.9c0.2 0 0.4 0 0.5 0z' })
                )
            );
        }
    }]);

    return IoIosGameControllerBOutline;
}(React.Component);

exports.default = IoIosGameControllerBOutline;
module.exports = exports['default'];