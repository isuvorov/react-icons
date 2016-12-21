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

var IoSocialEuroOutline = function (_React$Component) {
    _inherits(IoSocialEuroOutline, _React$Component);

    function IoSocialEuroOutline() {
        _classCallCheck(this, IoSocialEuroOutline);

        return _possibleConstructorReturn(this, (IoSocialEuroOutline.__proto__ || Object.getPrototypeOf(IoSocialEuroOutline)).apply(this, arguments));
    }

    _createClass(IoSocialEuroOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24.2 5c-4.1 0-7.1 0.7-9 2.1-1.7 1.3-2.5 3.1-2.5 5.8v2.2h-3.9v1.2h3.9v6.3h-3.9v1.2h3.9v3.3c0 2.7 0.8 4.5 2.5 5.8 1.9 1.4 4.9 2.1 9 2.1 2.4 0 4.6-0.2 6.9-0.6l-0.4-2.8c-2.3 0.4-4.3 0.6-6.2 0.6-2.9 0-4.7-0.5-5.8-1.5-1.5-1.2-1.7-3.1-1.7-4.7v-2.2h9.3l0.3-1.2h-9.6v-6.3h10.5l0.2-1.2h-10.7v-1.5c0-1.3 0.2-3.1 1.7-4.3 1.2-1 3-1.5 5.8-1.5 1.8 0 3.9 0.2 6.2 0.6l0.4-2.8c-2.3-0.4-4.5-0.6-6.9-0.6z m0-1.2c2.8 0 5.3 0.2 8.3 0.9l-0.7 5.1c-2.9-0.5-5.3-0.7-7.3-0.7-5 0-6.2 1.7-6.2 4.5v0.2h10.8l-0.6 3.8h-10.2v3.7h9.7l-0.6 3.8h-9.1v0.9c0 3.5 1.2 4.9 6.2 4.9 2 0 4.4-0.2 7.3-0.7l0.7 5.1c-3 0.7-5.5 1-8.3 1-9 0-12.8-3.3-12.8-9.2v-2h-3.9v-3.8h3.9v-3.7h-3.9v-3.8h3.9v-0.9c0-5.9 3.8-9.1 12.8-9.1z' })
                )
            );
        }
    }]);

    return IoSocialEuroOutline;
}(React.Component);

exports.default = IoSocialEuroOutline;
module.exports = exports['default'];