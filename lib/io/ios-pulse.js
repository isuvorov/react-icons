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

var IoIosPulse = function (_React$Component) {
    _inherits(IoIosPulse, _React$Component);

    function IoIosPulse() {
        _classCallCheck(this, IoIosPulse);

        return _possibleConstructorReturn(this, (IoIosPulse.__proto__ || Object.getPrototypeOf(IoIosPulse)).apply(this, arguments));
    }

    _createClass(IoIosPulse, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.5 22.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5c-1.2 0-2.1-0.8-2.4-1.8h-5.1c-0.2 0-0.5-0.2-0.6-0.4l-1.8-5.6-4.5 15.5c-0.1 0.2-0.3 0.4-0.6 0.4-0.3 0-0.5-0.2-0.6-0.5l-4.6-27.1-4.2 17.2c-0.1 0.3-0.3 0.5-0.6 0.5h-7.5v-1.2h7l4.9-19.7c0.1-0.3 0.3-0.4 0.6-0.4s0.5 0.2 0.6 0.5l4.6 27.3 4.2-14.9c0.1-0.2 0.3-0.3 0.6-0.3s0.5 0.1 0.6 0.3l2.4 7.2h4.6c0.2-1.1 1.2-2 2.4-2z' })
                )
            );
        }
    }]);

    return IoIosPulse;
}(React.Component);

exports.default = IoIosPulse;
module.exports = exports['default'];