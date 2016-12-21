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

var IoIosChatbubble = function (_React$Component) {
    _inherits(IoIosChatbubble, _React$Component);

    function IoIosChatbubble() {
        _classCallCheck(this, IoIosChatbubble);

        return _possibleConstructorReturn(this, (IoIosChatbubble.__proto__ || Object.getPrototypeOf(IoIosChatbubble)).apply(this, arguments));
    }

    _createClass(IoIosChatbubble, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 7.5c8.3 0 15 5.4 15 12s-6.6 11.8-14.9 11.8c-2.1 0-4.1-0.3-5.9-0.9h-0.1c-0.3-0.1-0.5-0.2-0.8-0.2s-0.7 0.1-1 0.2c0 0-0.7 0.3-0.7 0.3l-3.9 1.7-0.2 0.1h-0.5c-0.4-0.1-0.6-0.5-0.5-0.8s1.3-4.4 1.3-4.5c0-0.3-0.1-0.6-0.2-0.9l-0.3-0.2c-1.4-1.9-2.3-4.1-2.3-6.6 0-6.6 6.7-12 15-12z' })
                )
            );
        }
    }]);

    return IoIosChatbubble;
}(React.Component);

exports.default = IoIosChatbubble;
module.exports = exports['default'];