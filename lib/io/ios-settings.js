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

var IoIosSettings = function (_React$Component) {
    _inherits(IoIosSettings, _React$Component);

    function IoIosSettings() {
        _classCallCheck(this, IoIosSettings);

        return _possibleConstructorReturn(this, (IoIosSettings.__proto__ || Object.getPrototypeOf(IoIosSettings)).apply(this, arguments));
    }

    _createClass(IoIosSettings, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25 8.1c-0.7 0-1.2 0.6-1.2 1.3s0.5 1.2 1.2 1.2 1.3-0.5 1.3-1.2-0.6-1.3-1.3-1.3z m0-1.2c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5z m0 22.5c-0.7 0-1.2 0.5-1.2 1.2s0.5 1.3 1.2 1.3 1.3-0.6 1.3-1.3-0.6-1.2-1.3-1.2z m0-1.3c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5z m-15-9.3c-0.7 0-1.2 0.5-1.2 1.2s0.5 1.3 1.2 1.3 1.3-0.6 1.3-1.3-0.6-1.2-1.3-1.2z m0-1.3c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5z m3.7 1.9h21.3v1.2h-21.3c0-0.2 0.1-0.4 0.1-0.6s-0.1-0.4-0.1-0.6z m-7.4 0.6c0 0.2 0 0.4 0 0.6h-6.3v-1.2h6.3c0 0.2 0 0.4 0 0.6z m22.4 10h6.3v1.3h-6.3c0-0.3 0.1-0.4 0.1-0.7s-0.1-0.4-0.1-0.6z m-7.4 0.6c0 0.3 0 0.4 0 0.7h-21.3v-1.3h21.3c0 0.2 0 0.4 0 0.6z m7.4-21.8h6.3v1.2h-6.3c0-0.2 0.1-0.4 0.1-0.6s-0.1-0.4-0.1-0.6z m-7.4 0c0 0.2 0 0.3 0 0.6s0 0.4 0 0.6h-21.3v-1.2h21.3z' })
                )
            );
        }
    }]);

    return IoIosSettings;
}(React.Component);

exports.default = IoIosSettings;
module.exports = exports['default'];