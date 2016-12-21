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

var IoSocialPinterestOutline = function (_React$Component) {
    _inherits(IoSocialPinterestOutline, _React$Component);

    function IoSocialPinterestOutline() {
        _classCallCheck(this, IoSocialPinterestOutline);

        return _possibleConstructorReturn(this, (IoSocialPinterestOutline.__proto__ || Object.getPrototypeOf(IoSocialPinterestOutline)).apply(this, arguments));
    }

    _createClass(IoSocialPinterestOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 2.5c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5-17.5-7.8-17.5-17.5 7.8-17.5 17.5-17.5z m10.6 28.1c2.8-2.8 4.4-6.6 4.4-10.6s-1.6-7.8-4.4-10.6-6.6-4.4-10.6-4.4-7.8 1.6-10.6 4.4-4.4 6.6-4.4 10.6 1.6 7.8 4.4 10.6c1.1 1.1 2.4 2 3.7 2.7 0.1-0.5 0.2-0.8 0.3-1.3 0.3-1.4 2.2-9.5 2.2-9.5s-0.6-1.2-0.6-2.8c0-2.6 1.6-4.5 3.4-4.5 1.6 0 2.4 1.2 2.4 2.6 0 1.6-1 4-1.6 6.2-0.5 1.9 1 3.3 2.8 3.3 3.2 0 5.5-4.2 5.5-9.3 0-3.8-2.6-6.6-7.3-6.6-5.3 0-8.6 3.9-8.6 8.4 0 1.5 0.5 2.5 1.2 3.4 0.3 0.4 0.4 0.5 0.2 0.9 0 0.4-0.3 1.1-0.3 1.4-0.2 0.5-0.5 0.7-0.9 0.5-2.4-1-3.6-3.7-3.6-6.7 0-5 4.2-10.9 12.5-10.9 6.7 0 11.1 4.9 11.1 10 0 6.9-3.8 12-9.5 12-1.8 0-3.6-1-4.3-2.2 0 0-0.9 4.1-1.1 4.8-0.2 0.5-0.3 1.1-0.6 1.5 1.2 0.3 2.4 0.5 3.7 0.5 4 0 7.8-1.6 10.6-4.4z' })
                )
            );
        }
    }]);

    return IoSocialPinterestOutline;
}(React.Component);

exports.default = IoSocialPinterestOutline;
module.exports = exports['default'];