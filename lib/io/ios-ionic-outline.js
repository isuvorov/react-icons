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

var IoIosIonicOutline = function (_React$Component) {
    _inherits(IoIosIonicOutline, _React$Component);

    function IoIosIonicOutline() {
        _classCallCheck(this, IoIosIonicOutline);

        return _possibleConstructorReturn(this, (IoIosIonicOutline.__proto__ || Object.getPrototypeOf(IoIosIonicOutline)).apply(this, arguments));
    }

    _createClass(IoIosIonicOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33 10.5c1.9 2.7 3 6 3 9.5 0 9-7.2 16.3-16.2 16.3s-16.3-7.3-16.3-16.3 7.3-16.2 16.3-16.2c3.5 0 6.7 1 9.4 2.9 0.5-0.4 1-0.6 1.6-0.6 1.5 0 2.8 1.2 2.8 2.7 0 0.7-0.2 1.3-0.6 1.7z m-2.2-3.4c-0.9 0-1.7 0.8-1.7 1.7s0.8 1.7 1.7 1.7 1.8-0.7 1.8-1.7-0.8-1.7-1.8-1.7z m-0.4 23.5c1.4-1.4 2.4-3 3.2-4.8 0.8-1.9 1.2-3.8 1.2-5.8s-0.4-4-1.2-5.9c-0.4-1-1-1.9-1.6-2.8-0.4 0.2-0.8 0.3-1.2 0.3-1.4 0-2.7-1.3-2.7-2.8 0-0.4 0.2-0.8 0.3-1.1-0.8-0.7-1.8-1.2-2.8-1.6-1.9-0.8-3.8-1.1-5.8-1.1s-4 0.3-5.9 1.1c-1.8 0.8-3.4 1.9-4.8 3.3s-2.4 2.9-3.2 4.7c-0.8 1.9-1.1 3.9-1.1 5.9s0.3 3.9 1.1 5.8c0.8 1.8 1.8 3.4 3.2 4.8s3 2.4 4.8 3.2c1.9 0.8 3.8 1.2 5.9 1.2s3.9-0.4 5.8-1.2c1.8-0.8 3.4-1.8 4.8-3.2z m-10.6-18.1c4.1 0 7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5-7.5-3.4-7.5-7.5 3.3-7.5 7.5-7.5z m0 13.8c3.4 0 6.2-2.9 6.2-6.3s-2.8-6.2-6.2-6.2-6.2 2.8-6.2 6.2 2.7 6.3 6.2 6.3z' })
                )
            );
        }
    }]);

    return IoIosIonicOutline;
}(React.Component);

exports.default = IoIosIonicOutline;
module.exports = exports['default'];