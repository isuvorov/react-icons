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

var IoAndroidStopwatch = function (_React$Component) {
    _inherits(IoAndroidStopwatch, _React$Component);

    function IoAndroidStopwatch() {
        _classCallCheck(this, IoAndroidStopwatch);

        return _possibleConstructorReturn(this, (IoAndroidStopwatch.__proto__ || Object.getPrototypeOf(IoAndroidStopwatch)).apply(this, arguments));
    }

    _createClass(IoAndroidStopwatch, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.1 24v-10.2h3.8v10.2h-3.8z m13.8-10.7c1.9 2.6 3.1 5.8 3.1 9.2 0 8.3-6.7 15-15 15s-15-6.7-15-15 6.7-15 15-15c3.4 0 6.6 1.2 9.2 3.1l2.4-2.3 2.6 2.6z m-3.6 17.5c2.2-2.2 3.4-5.2 3.4-8.3s-1.2-6.1-3.4-8.3-5.2-3.4-8.3-3.4-6.1 1.2-8.3 3.4-3.4 5.2-3.4 8.3 1.2 6.1 3.4 8.3 5.2 3.4 8.3 3.4 6.1-1.2 8.3-3.4z m-13.3-24.5v-3.8h10v3.8h-10z' })
                )
            );
        }
    }]);

    return IoAndroidStopwatch;
}(React.Component);

exports.default = IoAndroidStopwatch;
module.exports = exports['default'];