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

var TiSocialGooglePlus = function (_React$Component) {
    _inherits(TiSocialGooglePlus, _React$Component);

    function TiSocialGooglePlus() {
        _classCallCheck(this, TiSocialGooglePlus);

        return _possibleConstructorReturn(this, (TiSocialGooglePlus.__proto__ || Object.getPrototypeOf(TiSocialGooglePlus)).apply(this, arguments));
    }

    _createClass(TiSocialGooglePlus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.5 22.5l-1.2-0.8c-0.3-0.4-0.8-0.7-0.8-1.4s0.5-1.1 1-1.6c1.3-1 2.8-2.2 2.8-4.7s-1.5-3.8-2.3-4.5h2l2-1.2h-6.8c-1.7 0-4 0.4-5.9 1.9-1.3 1.1-2 2.8-2 4.3 0 2.5 2 5.2 5.5 5.2h1c-0.1 0.3-0.3 0.6-0.3 1.1 0 1 0.5 1.7 1 2.2-1.5 0.2-4.2 0.3-6.3 1.5-2 1.2-2.5 2.8-2.5 4 0 2.5 2.3 4.7 7 4.7 5.6 0 8.6-3.2 8.6-6.2 0-2.2-1.3-3.2-2.8-4.5z m-4.2-3.7c-2.8 0-4.1-3.6-4.1-5.8 0-0.8 0.1-1.7 0.6-2.5 0.5-0.7 1.5-1.2 2.4-1.2 2.6 0 4.1 3.7 4.1 6 0 0.7 0 1.7-0.8 2.4-0.5 0.6-1.5 1.1-2.2 1.1z m0 13.2c-3.5 0-5.8-1.7-5.8-4s2.2-3.2 2.8-3.3c1.4-0.5 3.2-0.5 3.5-0.5h0.9c2.5 1.8 3.5 2.6 3.5 4.3 0 2-1.7 3.5-4.9 3.5z m11-12h-3.3v-1.7h3.3v-3.1l1.7-0.2v3.3h3.3v1.7h-3.3v3.3h-1.7z' })
                )
            );
        }
    }]);

    return TiSocialGooglePlus;
}(React.Component);

exports.default = TiSocialGooglePlus;
module.exports = exports['default'];