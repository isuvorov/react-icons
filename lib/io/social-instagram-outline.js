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

var IoSocialInstagramOutline = function (_React$Component) {
    _inherits(IoSocialInstagramOutline, _React$Component);

    function IoSocialInstagramOutline() {
        _classCallCheck(this, IoSocialInstagramOutline);

        return _possibleConstructorReturn(this, (IoSocialInstagramOutline.__proto__ || Object.getPrototypeOf(IoSocialInstagramOutline)).apply(this, arguments));
    }

    _createClass(IoSocialInstagramOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 8.8v22.5c0 2.1-1.7 3.7-3.7 3.7h-22.5c-2.1 0-3.8-1.6-3.8-3.7v-22.5c0-2.1 1.7-3.8 3.8-3.8h22.5c2 0 3.7 1.7 3.7 3.8z m-15 5c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.3 6.2 6.3 6.3-2.9 6.3-6.3-2.9-6.2-6.3-6.2z m12.5-1.3v-3.7c0-0.8-0.5-1.3-1.2-1.3h-3.8c-0.7 0-1.2 0.5-1.2 1.3v3.7c0 0.7 0.5 1.3 1.2 1.3h3.8c0.7 0 1.2-0.6 1.2-1.3z m-1.2 20c0.7 0 1.2-0.5 1.2-1.2v-13.8h-4.1c0.3 0.8 0.4 1.6 0.4 2.5 0 2.3-0.9 4.5-2.5 6.2s-4 2.6-6.3 2.6-4.5-1-6.2-2.6-2.5-3.9-2.5-6.2c0-0.9 0.1-1.7 0.3-2.5h-4.1v13.8c0 0.7 0.6 1.2 1.3 1.2h22.5z' })
                )
            );
        }
    }]);

    return IoSocialInstagramOutline;
}(React.Component);

exports.default = IoSocialInstagramOutline;
module.exports = exports['default'];