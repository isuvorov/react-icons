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

var GoHubot = function (_React$Component) {
    _inherits(GoHubot, _React$Component);

    function GoHubot() {
        _classCallCheck(this, GoHubot);

        return _possibleConstructorReturn(this, (GoHubot.__proto__ || Object.getPrototypeOf(GoHubot)).apply(this, arguments));
    }

    _createClass(GoHubot, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 2.5c-11.1 0-20 8.9-20 20v10s2.5 5 5 5h30s5-2.5 5-5v-10c0-11.1-8.9-20-20-20z m3.8 30h-7.5c-0.8 0-1.3-0.5-1.3-1.2s0.5-1.3 1.3-1.3h7.5c0.7 0 1.2 0.5 1.2 1.3s-0.5 1.2-1.2 1.2z m11.2-5c0 1.3-1.2 2.5-2.5 2.5h-5c0-1.2-1.2-2.5-2.5-2.5h-10s-2.5 1.3-2.5 2.5h-5s-2.5-1.2-2.5-2.5v-14.1c3-5 8.6-8.4 15-8.4s12 3.4 15 8.4v14.1z m-5-15h-20s-2.5 1.3-2.5 2.5v5s1.3 2.5 2.5 2.5h20s2.5-1.2 2.5-2.5v-5s-1.2-2.5-2.5-2.5z m0 5l-2.5 2.5h-5l-2.5-2.5-2.5 2.5h-5l-2.5-2.5v-2.5h2.5l2.5 2.5 2.5-2.5h5l2.5 2.5 2.5-2.5h2.5v2.5z' })
                )
            );
        }
    }]);

    return GoHubot;
}(React.Component);

exports.default = GoHubot;
module.exports = exports['default'];