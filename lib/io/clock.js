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

var IoClock = function (_React$Component) {
    _inherits(IoClock, _React$Component);

    function IoClock() {
        _classCallCheck(this, IoClock);

        return _possibleConstructorReturn(this, (IoClock.__proto__ || Object.getPrototypeOf(IoClock)).apply(this, arguments));
    }

    _createClass(IoClock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 2.5c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5-17.5-7.8-17.5-17.5 7.8-17.5 17.5-17.5z m10.6 28.1c0.8-0.8 1.5-1.6 2.1-2.6l-2.2-1.2 0.7-1.1 2.1 1.3c1-2 1.6-4.1 1.7-6.4h-2.5v-1.2h2.5c-0.1-2.3-0.7-4.4-1.7-6.4l-2.1 1.3-0.7-1.1 2.2-1.2c-0.6-1-1.3-1.8-2.1-2.6s-1.6-1.5-2.6-2.1l-1.2 2.2-1.1-0.7 1.3-2.1c-2-1-4.1-1.6-6.4-1.7v2.5h-1.2v-2.5c-2.3 0.1-4.4 0.7-6.4 1.7l1.3 2.1-1.1 0.7-1.2-2.2c-1 0.6-1.8 1.3-2.6 2.1s-1.5 1.6-2.1 2.6l2.2 1.2-0.7 1.1-2.1-1.3c-1 2-1.6 4.1-1.7 6.4h2.5v1.2h-2.5c0.1 2.3 0.7 4.4 1.7 6.4l2.1-1.3 0.7 1.1-2.2 1.2c0.6 1 1.3 1.8 2.1 2.6s1.6 1.5 2.6 2.1l1.2-2.2 1.1 0.7-1.3 2.1c2 1 4.1 1.6 6.4 1.7v-2.5h1.2v2.5c2.3-0.1 4.4-0.7 6.4-1.7l-1.3-2.1 1.1-0.7 1.2 2.2c1-0.6 1.8-1.3 2.6-2.1z m0.7-11.8v2.5h-9.2c-0.5 0.7-1.2 1.2-2.1 1.2-1.4 0-2.5-1.1-2.5-2.5 0-0.9 0.5-1.7 1.3-2.2v-5.3h2.5v5.3c0.3 0.2 0.7 0.6 0.9 1h9.1z' })
                )
            );
        }
    }]);

    return IoClock;
}(React.Component);

exports.default = IoClock;
module.exports = exports['default'];