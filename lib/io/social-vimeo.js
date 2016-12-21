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

var IoSocialVimeo = function (_React$Component) {
    _inherits(IoSocialVimeo, _React$Component);

    function IoSocialVimeo() {
        _classCallCheck(this, IoSocialVimeo);

        return _possibleConstructorReturn(this, (IoSocialVimeo.__proto__ || Object.getPrototypeOf(IoSocialVimeo)).apply(this, arguments));
    }

    _createClass(IoSocialVimeo, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.8 8.9c0.5 2.6 0 5.2-1 7.6s-2.5 4.6-4 6.8c-2.1 2.8-4.1 5.5-6.7 7.9-1.5 1.4-3.2 2.7-5.1 3.4-2.5 0.9-4.1 0.4-5.6-1.7-1.1-1.5-1.7-3.1-2.2-4.9-0.9-3.5-1.9-7.1-2.9-10.5-0.3-0.9-0.7-1.7-1.2-2.6-0.2-0.4-0.6-0.8-0.9-1.1-0.4-0.3-0.9-0.2-1.4 0-0.8 0.5-2.2 1.4-2.2 1.4l-1.6-2.1c2-1.8 6.4-5.5 6.4-5.5 0.9-0.7 2.6-2 3.8-2.1 1.6-0.3 2.9 0.3 3.9 1.7 0.8 1.3 1.1 2.9 1.4 4.4 0.5 3.2 0.8 6.5 1.8 9.6 0.2 0.8 0.6 1.5 1 2.2 0.5 0.9 1.1 1.1 1.9 0.4 0.3-0.2 0.6-0.4 0.8-0.7 1.6-1.9 2.9-4.1 3.8-6.4 0.2-0.7 0.2-1.3 0.2-2.1 0-1-0.8-1.9-2-2s-1.8 0.1-3 0.5c0.5-1.8 1.9-4.8 4.2-6.5 2.3-1.7 5.6-1.9 7.4-1.3s2.8 1.8 3.2 3.6z' })
                )
            );
        }
    }]);

    return IoSocialVimeo;
}(React.Component);

exports.default = IoSocialVimeo;
module.exports = exports['default'];