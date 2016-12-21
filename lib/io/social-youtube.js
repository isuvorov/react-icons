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

var IoSocialYoutube = function (_React$Component) {
    _inherits(IoSocialYoutube, _React$Component);

    function IoSocialYoutube() {
        _classCallCheck(this, IoSocialYoutube);

        return _possibleConstructorReturn(this, (IoSocialYoutube.__proto__ || Object.getPrototypeOf(IoSocialYoutube)).apply(this, arguments));
    }

    _createClass(IoSocialYoutube, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39.8 11.6c0.1 2.9 0.2 5.6 0.2 8.4s-0.1 5.5-0.2 8.4c0 3.5-2.6 6.3-5.8 6.3-4.5 0.2-9.2 0.3-14 0.3s-9.5-0.1-14-0.3c-3.2 0-5.8-2.8-5.8-6.3-0.1-2.9-0.2-5.6-0.2-8.4s0.2-5.5 0.3-8.4c0-3.5 2.5-6.3 5.7-6.3 4.3-0.2 8.8-0.3 13.3-0.3h1.4c4.5 0 9 0.1 13.3 0.3 3.2 0 5.8 2.8 5.8 6.3z m-23.6 16.1l11.3-7.7-11.3-7.7v15.4z' })
                )
            );
        }
    }]);

    return IoSocialYoutube;
}(React.Component);

exports.default = IoSocialYoutube;
module.exports = exports['default'];