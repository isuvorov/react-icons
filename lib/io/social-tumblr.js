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

var IoSocialTumblr = function (_React$Component) {
    _inherits(IoSocialTumblr, _React$Component);

    function IoSocialTumblr() {
        _classCallCheck(this, IoSocialTumblr);

        return _possibleConstructorReturn(this, (IoSocialTumblr.__proto__ || Object.getPrototypeOf(IoSocialTumblr)).apply(this, arguments));
    }

    _createClass(IoSocialTumblr, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.1 30.9c1.6 0 3.3-0.4 4.9-1.5v5.1c-1.4 0.6-2.7 1.1-3.7 1.4s-2.2 0.3-3.6 0.3c-1.4 0-2.7-0.1-3.9-0.5-1.1-0.4-2.2-0.9-2.9-1.6s-1.4-1.4-1.7-2.2-0.5-2-0.5-3.5v-10.9h-3.7v-4.5c1.3-0.4 2.3-1.1 3.3-1.9s1.5-1.6 2-2.7 0.9-2.9 1.1-4.7h4.9v8.8h7.5v5h-7.5v7.9c0 1.9 0 3.1 0.3 3.7 0.1 0.5 0.5 0.9 1.1 1.2 0.7 0.5 1.4 0.6 2.4 0.6z' })
                )
            );
        }
    }]);

    return IoSocialTumblr;
}(React.Component);

exports.default = IoSocialTumblr;
module.exports = exports['default'];