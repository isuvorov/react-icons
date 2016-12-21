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

var GoAlert = function (_React$Component) {
    _inherits(GoAlert, _React$Component);

    function GoAlert() {
        _classCallCheck(this, GoAlert);

        return _possibleConstructorReturn(this, (GoAlert.__proto__ || Object.getPrototypeOf(GoAlert)).apply(this, arguments));
    }

    _createClass(GoAlert, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39.3 31.3l-17.1-30c-0.5-0.8-1.3-1.3-2.2-1.3s-1.7 0.5-2.2 1.3l-17.1 30c-0.4 0.7-0.4 1.7 0 2.5s1.3 1.2 2.2 1.2h34.2c0.9 0 1.7-0.5 2.2-1.2s0.4-1.8 0-2.5z m-16.8-1.3h-5v-5h5v5z m0-7.5h-5v-10h5v10z' })
                )
            );
        }
    }]);

    return GoAlert;
}(React.Component);

exports.default = GoAlert;
module.exports = exports['default'];