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

var IoIosTimer = function (_React$Component) {
    _inherits(IoIosTimer, _React$Component);

    function IoIosTimer() {
        _classCallCheck(this, IoIosTimer);

        return _possibleConstructorReturn(this, (IoIosTimer.__proto__ || Object.getPrototypeOf(IoIosTimer)).apply(this, arguments));
    }

    _createClass(IoIosTimer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 3.8c8.9 0 16.2 7.2 16.2 16.2s-7.3 16.3-16.2 16.3-16.3-7.3-16.3-16.3 7.3-16.2 16.3-16.2z m-8.3 7.9c-0.2 0.2 6.7 9.4 6.7 9.4l0.1 0.1c0.4 0.4 0.8 0.8 1.5 0.8 1 0 1.9-0.9 1.9-2 0-0.5-0.2-1-0.6-1.4l-0.3-0.2s-9.1-6.8-9.3-6.7z m8.3 23.2c8.2 0 15-6.6 15-14.9s-6.8-15-15-15v7.5h1.2v-6.1c6.9 0.7 12.3 6.6 12.3 13.6 0 7.5-6 13.6-13.5 13.6s-13.7-6.1-13.7-13.6c0-3.7 1.5-7.2 4-9.7l-0.9-0.9c-2.7 2.7-4.4 6.5-4.4 10.6 0 8.3 6.7 14.9 15 14.9z' })
                )
            );
        }
    }]);

    return IoIosTimer;
}(React.Component);

exports.default = IoIosTimer;
module.exports = exports['default'];