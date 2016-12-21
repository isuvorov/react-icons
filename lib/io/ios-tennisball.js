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

var IoIosTennisball = function (_React$Component) {
    _inherits(IoIosTennisball, _React$Component);

    function IoIosTennisball() {
        _classCallCheck(this, IoIosTennisball);

        return _possibleConstructorReturn(this, (IoIosTennisball.__proto__ || Object.getPrototypeOf(IoIosTennisball)).apply(this, arguments));
    }

    _createClass(IoIosTennisball, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm3.5 19.7z m16.6 16.6z m-0.3-32.5c8.9 0 16.2 7.2 16.2 16.2 0 0.6 0 1.3-0.1 1.9-0.8 7.6-7 13.6-14.6 14.3-0.5 0.1-1 0.1-1.6 0.1-8.9 0-16.2-7.3-16.2-16.3v-0.3c0-0.5 0-0.9 0.1-1.3 0.7-7.5 6.7-13.7 14.3-14.6 0.4 0 0.8 0 1.2 0h0.7z m-9.8 17.1c2 0.7 3.7 2 5.3 3.6s2.8 3.2 3.6 5.3c0.6 1.6 1.1 3.4 1.2 5.1 0.4 0 0.8 0 1.2-0.1-0.2-4.1-1.9-8.2-5.1-11.3s-7.2-4.8-11.3-5.1c-0.1 0.4-0.1 0.9-0.1 1.3 1.7 0.1 3.5 0.5 5.2 1.2z m13-4.2c3.2 3.2 7.3 4.9 11.5 5.2 0.1-0.4 0.1-0.9 0.1-1.3-1.9-0.1-3.6-0.4-5.3-1.1-2-0.8-3.8-2.1-5.4-3.6s-2.8-3.4-3.6-5.4c-0.7-1.8-1.1-3.5-1.2-5.3-0.4 0-0.8 0-1.2 0 0.2 4.3 1.9 8.3 5.1 11.5z' })
                )
            );
        }
    }]);

    return IoIosTennisball;
}(React.Component);

exports.default = IoIosTennisball;
module.exports = exports['default'];