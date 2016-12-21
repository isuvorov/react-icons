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

var IoIosPulseStrong = function (_React$Component) {
    _inherits(IoIosPulseStrong, _React$Component);

    function IoIosPulseStrong() {
        _classCallCheck(this, IoIosPulseStrong);

        return _possibleConstructorReturn(this, (IoIosPulseStrong.__proto__ || Object.getPrototypeOf(IoIosPulseStrong)).apply(this, arguments));
    }

    _createClass(IoIosPulseStrong, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.8 21.3c2.1 0 3.7 1.6 3.7 3.7s-1.6 3.8-3.7 3.8c-1.7 0-3-1-3.6-2.4h-3.9c-0.6 0-1.1-0.3-1.2-0.9l-1.3-3.6-3.9 13.5c-0.1 0.5-0.6 0.9-1.1 0.9h-0.1c-0.6 0-1.1-0.4-1.2-1l-4-24-3.5 14.2c-0.2 0.5-0.7 0.9-1.2 0.9h-8.8v-2.5h7.7l4.8-19.1c0.2-0.6 0.6-1.1 1.3-1.1s1.1 0.6 1.2 1.1l4.1 24.6 3.5-12.1c0.1-0.6 0.6-0.9 1.1-0.9 0.6 0 1.1 0.3 1.2 0.9l2.3 6.6h3c0.4-1.5 1.9-2.6 3.6-2.6z' })
                )
            );
        }
    }]);

    return IoIosPulseStrong;
}(React.Component);

exports.default = IoIosPulseStrong;
module.exports = exports['default'];