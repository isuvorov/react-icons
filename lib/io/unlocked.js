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

var IoUnlocked = function (_React$Component) {
    _inherits(IoUnlocked, _React$Component);

    function IoUnlocked() {
        _classCallCheck(this, IoUnlocked);

        return _possibleConstructorReturn(this, (IoUnlocked.__proto__ || Object.getPrototypeOf(IoUnlocked)).apply(this, arguments));
    }

    _createClass(IoUnlocked, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm6.7 37.5c-0.9 0-1.7-0.8-1.7-1.7v-16.6c0-0.9 0.8-1.7 1.7-1.7h1.7v-2.4c0-3.3 1.4-6.8 3.4-9s5-3.6 8.2-3.6c3.2 0 6.2 1.4 8.2 3.6 1.6 1.6 2.6 4 3.1 6.4h-4.2c-0.4-1.4-1-2.7-1.9-3.7v0c-1.4-1.5-3.2-2.3-5.2-2.3-2 0-3.8 0.8-5.2 2.2v0.1c-1.4 1.5-2.2 4.2-2.2 6.3v2.4h20.7c0.9 0 1.7 0.8 1.7 1.7v16.6c0 0.9-0.8 1.7-1.7 1.7h-26.6z' })
                )
            );
        }
    }]);

    return IoUnlocked;
}(React.Component);

exports.default = IoUnlocked;
module.exports = exports['default'];