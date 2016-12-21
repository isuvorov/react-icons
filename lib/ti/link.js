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

var TiLink = function (_React$Component) {
    _inherits(TiLink, _React$Component);

    function TiLink() {
        _classCallCheck(this, TiLink);

        return _possibleConstructorReturn(this, (TiLink.__proto__ || Object.getPrototypeOf(TiLink)).apply(this, arguments));
    }

    _createClass(TiLink, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.5 10.5c-0.8-0.7-1.9-0.7-2.6 0l-2.9 2.9-0.5-0.5c-2-2-5.4-2-7.3 0l-7 6.9c-0.9 1-1.5 2.3-1.5 3.7s0.6 2.7 1.5 3.7l0.5 0.5-2.8 2.8c-0.7 0.8-0.7 1.9 0 2.6 0.3 0.4 0.8 0.6 1.3 0.6s0.9-0.2 1.3-0.6l2.8-2.8 0.5 0.5c1 0.9 2.3 1.5 3.7 1.5s2.7-0.6 3.7-1.5l6.9-7c1-1 1.5-2.3 1.5-3.6s-0.5-2.7-1.5-3.7l-0.5-0.5 2.9-2.9c0.7-0.7 0.7-1.8 0-2.6z m-5 10.7l-6.9 7c-0.3 0.3-0.7 0.4-1.1 0.4s-0.8-0.1-1.1-0.4l-0.5-0.5 1.2-1.2c0.7-0.8 0.7-1.9 0-2.6-0.3-0.4-0.8-0.6-1.3-0.6s-0.9 0.2-1.3 0.6l-1.2 1.2-0.5-0.5c-0.3-0.3-0.4-0.7-0.4-1.1s0.1-0.8 0.4-1.1l7-6.9c0.3-0.3 0.6-0.5 1-0.5s0.8 0.2 1.1 0.5l0.5 0.5-1.2 1.2c-0.7 0.7-0.7 1.9 0 2.6 0.4 0.3 0.8 0.5 1.3 0.5s0.9-0.1 1.3-0.5l1.2-1.2 0.5 0.5c0.3 0.3 0.4 0.7 0.4 1.1s-0.1 0.7-0.4 1z' })
                )
            );
        }
    }]);

    return TiLink;
}(React.Component);

exports.default = TiLink;
module.exports = exports['default'];