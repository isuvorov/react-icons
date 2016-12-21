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

var IoIosTime = function (_React$Component) {
    _inherits(IoIosTime, _React$Component);

    function IoIosTime() {
        _classCallCheck(this, IoIosTime);

        return _possibleConstructorReturn(this, (IoIosTime.__proto__ || Object.getPrototypeOf(IoIosTime)).apply(this, arguments));
    }

    _createClass(IoIosTime, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 2.5c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5-17.5-7.8-17.5-17.5 7.8-17.5 17.5-17.5z m0 3.1c-0.3 0-0.6 0.3-0.6 0.7s0.3 0.6 0.6 0.6 0.6-0.3 0.6-0.6-0.3-0.7-0.6-0.7z m-13.7 15c0.3 0 0.6-0.3 0.6-0.6s-0.3-0.6-0.6-0.6-0.7 0.3-0.7 0.6 0.3 0.6 0.7 0.6z m2.1 6.8c0.4-0.1 0.4-0.5 0.2-0.8s-0.5-0.4-0.8-0.3-0.4 0.6-0.2 0.9 0.5 0.4 0.8 0.2z m0.2-14c0.2-0.3 0.2-0.7-0.2-0.8s-0.7-0.1-0.8 0.2-0.1 0.7 0.2 0.9 0.6 0.1 0.8-0.3z m4.2-5.8c-0.3 0.1-0.4 0.5-0.2 0.8s0.5 0.4 0.8 0.2 0.4-0.5 0.3-0.8-0.6-0.4-0.9-0.2z m0.9 24.6c0.1-0.3 0.1-0.6-0.3-0.8s-0.7-0.1-0.8 0.2-0.1 0.7 0.2 0.8 0.7 0.1 0.9-0.2z m6.3 2.2c0.3 0 0.6-0.3 0.6-0.6s-0.3-0.7-0.6-0.7-0.6 0.3-0.6 0.7 0.3 0.6 0.6 0.6z m0.6-13.3c0.7-0.3 0.8-1.1 0.5-1.7-0.2-0.4-0.7-0.6-1.1-0.6l-3-5c-0.1-0.4-0.5-0.4-0.8-0.2s-0.3 0.5-0.2 0.9l2.9 4.9c-0.2 0.4-0.2 0.8 0 1.2 0.2 0.2 0.3 0.4 0.5 0.5v9.5c0 0.3 0.3 0.6 0.6 0.6s0.6-0.3 0.6-0.6v-9.5z m6.6 11.3c0.3-0.1 0.4-0.5 0.2-0.8s-0.5-0.4-0.8-0.2-0.4 0.5-0.3 0.8 0.6 0.4 0.9 0.2z m0.2-24c0.2-0.3 0.1-0.7-0.2-0.8s-0.7-0.1-0.9 0.2 0 0.6 0.3 0.8 0.7 0.1 0.8-0.2z m5 18.8c0.2-0.3 0.1-0.7-0.2-0.9s-0.6 0-0.8 0.3-0.1 0.7 0.2 0.8 0.7 0.1 0.8-0.2z m-0.2-13.5c0.3-0.2 0.4-0.6 0.2-0.9s-0.5-0.4-0.8-0.2-0.3 0.5-0.2 0.8 0.5 0.4 0.8 0.3z m1.6 6.9c0.3 0 0.6-0.3 0.6-0.6s-0.3-0.6-0.6-0.6-0.7 0.3-0.7 0.6 0.3 0.6 0.7 0.6z' })
                )
            );
        }
    }]);

    return IoIosTime;
}(React.Component);

exports.default = IoIosTime;
module.exports = exports['default'];