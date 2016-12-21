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

var IoSocialHackernewsOutline = function (_React$Component) {
    _inherits(IoSocialHackernewsOutline, _React$Component);

    function IoSocialHackernewsOutline() {
        _classCallCheck(this, IoSocialHackernewsOutline);

        return _possibleConstructorReturn(this, (IoSocialHackernewsOutline.__proto__ || Object.getPrototypeOf(IoSocialHackernewsOutline)).apply(this, arguments));
    }

    _createClass(IoSocialHackernewsOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.5 7.5h-25v25h25v-25z m2.5-2.5v30h-30v-30h30z m-11.8 7.4h3.5l-5 9.4v5.6h-3.1v-5.6l-5.2-9.4h3.7l3.1 6.6z' })
                )
            );
        }
    }]);

    return IoSocialHackernewsOutline;
}(React.Component);

exports.default = IoSocialHackernewsOutline;
module.exports = exports['default'];