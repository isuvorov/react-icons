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

var TiSocialLinkedinCircular = function (_React$Component) {
    _inherits(TiSocialLinkedinCircular, _React$Component);

    function TiSocialLinkedinCircular() {
        _classCallCheck(this, TiSocialLinkedinCircular);

        return _possibleConstructorReturn(this, (TiSocialLinkedinCircular.__proto__ || Object.getPrototypeOf(TiSocialLinkedinCircular)).apply(this, arguments));
    }

    _createClass(TiSocialLinkedinCircular, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.7 25.5h-2.6v-8.7h2.6v8.7z m-1.3-9.8c-1 0-1.5-0.4-1.5-1.3 0-0.4 0.2-0.7 0.5-1 0.2-0.2 0.6-0.3 1-0.3 0.9 0 1.4 0.4 1.4 1.3s-0.4 1.3-1.4 1.3z m11.2 9.8h-2.7v-4.8c0-1.3-0.5-1.9-1.3-1.9-0.7 0-1.2 0.3-1.4 1-0.1 0.1-0.1 0.4-0.1 0.7v5h-2.8v-5.9c0-1.3 0-2.2 0-2.8h2.3l0.2 1.2c0.6-0.9 1.5-1.4 2.7-1.4 0.9 0 1.7 0.3 2.3 1 0.5 0.6 0.8 1.6 0.8 2.8v5.1z m-6.6 9.5c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15z m0-26.7c-6.4 0-11.7 5.3-11.7 11.7s5.3 11.7 11.7 11.7 11.7-5.3 11.7-11.7-5.3-11.7-11.7-11.7z' })
                )
            );
        }
    }]);

    return TiSocialLinkedinCircular;
}(React.Component);

exports.default = TiSocialLinkedinCircular;
module.exports = exports['default'];