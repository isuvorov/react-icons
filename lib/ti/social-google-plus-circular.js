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

var TiSocialGooglePlusCircular = function (_React$Component) {
    _inherits(TiSocialGooglePlusCircular, _React$Component);

    function TiSocialGooglePlusCircular() {
        _classCallCheck(this, TiSocialGooglePlusCircular);

        return _possibleConstructorReturn(this, (TiSocialGooglePlusCircular.__proto__ || Object.getPrototypeOf(TiSocialGooglePlusCircular)).apply(this, arguments));
    }

    _createClass(TiSocialGooglePlusCircular, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.3 21.8l-0.6-0.5c-0.2-0.1-0.5-0.3-0.5-0.8l0.5-1c0.8-0.7 1.6-1.3 1.6-2.8s-1-2.4-1.3-2.7h1.2l1.1-0.7h-4c-1 0-2.3 0.2-3.5 1-0.8 0.7-1.3 1.7-1.3 2.7 0 1.5 1.2 3.2 3.3 3.2h0.7c-0.2 0.1-0.2 0.3-0.2 0.6 0 0.7 0.4 1 0.7 1.4-0.8 0-2.5 0.1-3.8 0.8-1.2 0.7-1.5 1.7-1.5 2.3 0 1.5 1.3 2.9 4.1 2.9 3.4 0 5.2-1.9 5.2-3.7 0-1.2-0.8-1.8-1.7-2.7z m-2.6-2.1c-1.7 0-2.5-2.2-2.5-3.5 0.1-0.7 0.1-1.2 0.5-1.5s0.8-0.7 1.3-0.7c1.7 0 2.5 2.2 2.5 3.7 0 0.3 0 1-0.5 1.5-0.2 0.1-0.8 0.5-1.3 0.5z m0.1 7.8c-2.1 0-3.5-1-3.5-2.3 0-1.4 1.4-1.9 1.7-2 0.8-0.4 1.8-0.4 2-0.4h0.5c1.5 1 2.2 1.7 2.2 2.7 0 1.2-1 2-2.9 2z m6.2-7.5h-1.7v-1.7h1.7v-1.6h1.7v1.6h1.6v1.7h-1.6v1.7h-1.7z m-5 15c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15z m0-26.7c-6.5 0-11.7 5.2-11.7 11.7s5.2 11.7 11.7 11.7 11.7-5.2 11.7-11.7-5.2-11.7-11.7-11.7z' })
                )
            );
        }
    }]);

    return TiSocialGooglePlusCircular;
}(React.Component);

exports.default = TiSocialGooglePlusCircular;
module.exports = exports['default'];