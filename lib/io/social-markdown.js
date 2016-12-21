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

var IoSocialMarkdown = function (_React$Component) {
    _inherits(IoSocialMarkdown, _React$Component);

    function IoSocialMarkdown() {
        _classCallCheck(this, IoSocialMarkdown);

        return _possibleConstructorReturn(this, (IoSocialMarkdown.__proto__ || Object.getPrototypeOf(IoSocialMarkdown)).apply(this, arguments));
    }

    _createClass(IoSocialMarkdown, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.5 7.5c1.4 0 2.5 1.1 2.5 2.5v20c0 1.4-1.1 2.5-2.5 2.5h-30c-1.4 0-2.5-1.1-2.5-2.5v-20c0-1.4 1.1-2.5 2.5-2.5h30z m-12.8 20v-15h-4.4l-3.3 5.3-3.2-5.3h-4.4v15h4.4v-7.5l3.2 4.2 3.3-4.2v7.5h4.4z m6.6 0l5.4-7.5h-3.3v-7.5h-4.3v7.5h-3.3z' })
                )
            );
        }
    }]);

    return IoSocialMarkdown;
}(React.Component);

exports.default = IoSocialMarkdown;
module.exports = exports['default'];