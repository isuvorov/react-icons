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

var MdForward30 = function (_React$Component) {
    _inherits(MdForward30, _React$Component);

    function MdForward30() {
        _classCallCheck(this, MdForward30);

        return _possibleConstructorReturn(this, (MdForward30.__proto__ || Object.getPrototypeOf(MdForward30)).apply(this, arguments));
    }

    _createClass(MdForward30, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm6.6 21.6c0-7.3 6.1-13.2 13.4-13.2v-6.8l8.4 8.4-8.4 8.4v-6.8c-5.5 0-10 4.6-10 10s4.5 10 10 10 10-4.5 10-10h3.4c0 7.4-6.1 13.4-13.4 13.4s-13.4-6-13.4-13.4z m15.6 3.7c0 0.3 0.5 0.6 0.8 0.6 0.1 0 0.4 0 0.5-0.2l0.3-0.4s0.2-0.3 0.2-0.5v-3.3s-0.2-0.3-0.2-0.5c0-0.2-0.6-0.5-0.8-0.5-0.2 0-0.3 0-0.5 0.2l-0.3 0.3s-0.2 0.3-0.2 0.5v3.3s0.2 0.4 0.2 0.5z m3.3-1.6c0 0.4 0 1-0.2 1.3l-0.5 1s-0.5 0.5-0.8 0.5-0.7 0.1-1 0.1c-0.8 0-1.3-0.3-1.8-0.6-0.3-0.1-0.3-0.5-0.5-1s-0.2-0.9-0.2-1.3v-1.2c0-0.5 0-1 0.2-1.3l0.5-1s0.5-0.5 0.8-0.5 0.7-0.2 1-0.2 0.7 0 1 0.2 0.5 0.3 0.8 0.5 0.4 0.5 0.5 1 0.2 0.8 0.2 1.3v1.2z m-8.9-1.2c0.7 0 1.2-0.4 1.2-1v-0.3s-0.1-0.2-0.1-0.3-0.2-0.2-0.4-0.2h-0.8s-0.2 0.2-0.3 0.2-0.2 0.1-0.2 0.3v0.3h-1.7c0-0.8 0.7-1.8 1.4-1.8 0.2 0 0.6-0.2 0.8-0.2 0.7 0 1.4 0.3 1.9 0.5 0.4 0.2 0.6 0.9 0.6 1.5v0.5s-0.2 0.3-0.2 0.5-0.1 0.3-0.3 0.3-0.4 0.2-0.5 0.4c0.3 0.2 0.7 0.3 0.8 0.6s0.3 0.7 0.3 1 0 0.7-0.1 0.9-0.3 0.5-0.5 0.6-0.5 0.3-0.9 0.3-0.7 0.2-1 0.2-0.6 0-0.7-0.2-0.6-0.1-0.9-0.3c-0.4-0.2-0.7-1-0.7-1.6h1.4v0.3s0.2 0.2 0.2 0.3 0.1 0.2 0.3 0.2h0.8s0.2-0.2 0.3-0.2 0.2-0.1 0.2-0.3v-0.9s-0.2-0.1-0.2-0.3-0.1-0.1-0.3-0.1h-1v-1.2h0.6z' })
                )
            );
        }
    }]);

    return MdForward30;
}(React.Component);

exports.default = MdForward30;
module.exports = exports['default'];