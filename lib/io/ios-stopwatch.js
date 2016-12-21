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

var IoIosStopwatch = function (_React$Component) {
    _inherits(IoIosStopwatch, _React$Component);

    function IoIosStopwatch() {
        _classCallCheck(this, IoIosStopwatch);

        return _possibleConstructorReturn(this, (IoIosStopwatch.__proto__ || Object.getPrototypeOf(IoIosStopwatch)).apply(this, arguments));
    }

    _createClass(IoIosStopwatch, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.1 11.5c2.5 2.7 3.9 6.2 3.9 10 0 8.1-6.7 14.8-15 14.8s-15-6.7-15-14.8c0-3.8 1.4-7.4 4-10.1l0.1-0.1h-1.4l-0.7 0.7-1.8-1.8 3.2-3.2 1.8 1.8-0.7 0.7v1.4c2.5-2.4 5.7-3.9 9.1-4.2h0.2v-3h2.5v3c3.3 0.3 6.4 1.7 8.8 3.8l0.4 0.4v-1.4l-0.7-0.7 1.8-1.8 3.2 3.2-1.8 1.8-0.7-0.7h-1.4z m-10.5 13.3c1.1-0.3 1.9-1.1 1.9-2.3 0-1.1-0.8-2.1-1.9-2.4v-10.1h-1.2v10.1c-1 0.3-1.9 1.3-1.9 2.4 0 1.2 0.8 2 1.9 2.3l0.6 1.5z' })
                )
            );
        }
    }]);

    return IoIosStopwatch;
}(React.Component);

exports.default = IoIosStopwatch;
module.exports = exports['default'];