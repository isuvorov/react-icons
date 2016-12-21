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

var IoSocialTwitter = function (_React$Component) {
    _inherits(IoSocialTwitter, _React$Component);

    function IoSocialTwitter() {
        _classCallCheck(this, IoSocialTwitter);

        return _possibleConstructorReturn(this, (IoSocialTwitter.__proto__ || Object.getPrototypeOf(IoSocialTwitter)).apply(this, arguments));
    }

    _createClass(IoSocialTwitter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm38.4 8.6c-1 1.6-2.3 2.8-3.8 3.9v0.9c0 10-7.6 21.6-21.5 21.6-4.3 0-8.2-1.2-11.6-3.4 0.6 0 1.2 0.1 1.8 0.1 3.5 0 6.8-1.2 9.4-3.3-3.3 0-6.1-2.2-7.1-5.2 0.5 0.1 1 0.2 1.4 0.2 0.7 0 1.5-0.2 2.1-0.4-3.5-0.7-6.1-3.7-6.1-7.4v-0.1c1 0.6 2.2 1 3.4 1-2-1.3-3.3-3.7-3.3-6.3 0-1.4 0.4-2.7 1-3.8 3.7 4.6 9.3 7.6 15.5 7.9-0.1-0.5-0.1-1.1-0.1-1.7 0-4.2 3.3-7.6 7.5-7.6 2.2 0 4.1 0.9 5.5 2.4 1.7-0.3 3.4-1 4.9-1.9-0.6 1.8-1.8 3.3-3.4 4.3 1.6-0.2 3-0.6 4.4-1.2z' })
                )
            );
        }
    }]);

    return IoSocialTwitter;
}(React.Component);

exports.default = IoSocialTwitter;
module.exports = exports['default'];