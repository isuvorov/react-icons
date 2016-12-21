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

var IoIosAlarmOutline = function (_React$Component) {
    _inherits(IoIosAlarmOutline, _React$Component);

    function IoIosAlarmOutline() {
        _classCallCheck(this, IoIosAlarmOutline);

        return _possibleConstructorReturn(this, (IoIosAlarmOutline.__proto__ || Object.getPrototypeOf(IoIosAlarmOutline)).apply(this, arguments));
    }

    _createClass(IoIosAlarmOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34 15l-4.2-4.1-0.7 0.7c2.7 2.5 4.4 6.2 4.4 10.2 0 3.4-1.2 6.5-3.3 8.9l2.8 3.5-1 0.8-2.7-3.4c-2.5 2.4-5.8 3.9-9.5 3.9-3.7 0-7-1.5-9.5-3.9l-2.8 3.4-0.9-0.8 2.8-3.5c-2.1-2.4-3.4-5.5-3.4-9 0-4 1.8-7.6 4.5-10.1l-0.7-0.7-4.2 4.1c-1-1.1-1.6-2.5-1.6-4.1 0-3.4 2.7-6.2 6.3-6.4h0.3c1.6 0 3.1 0.6 4.3 1.4l-4.3 4.1 0.9 0.9c2-1.5 4.4-2.5 7-2.8 0-0.6 0.7-1.2 1.3-1.2s1.2 0.6 1.2 1.2c2.6 0.3 5 1.3 7.1 2.8l0.8-0.9-4.2-4.1c1.2-0.8 2.7-1.4 4.2-1.4h0.4c3.5 0.2 6.3 3 6.3 6.4 0 1.6-0.7 3-1.6 4.1z m-28.3-1.9l7.1-6.9c-0.7-0.4-1.5-0.6-2.5-0.5-2.9 0.2-5.1 2.5-5.1 5.2 0 0.8 0.2 1.5 0.5 2.2z m26.6 8.5c0-6.9-5.6-12.4-12.5-12.4s-12.5 5.5-12.5 12.4 5.6 12.3 12.5 12.3 12.5-5.5 12.5-12.3z m-5.6-15.4l7.1 6.9c0.4-0.7 0.5-1.4 0.5-2.2 0-2.7-2.2-5-5.1-5.2-1-0.1-1.8 0.1-2.5 0.5z m-6.9 6.3h1.2v11.3h-8.7v-1.3h7.5v-10z' })
                )
            );
        }
    }]);

    return IoIosAlarmOutline;
}(React.Component);

exports.default = IoIosAlarmOutline;
module.exports = exports['default'];