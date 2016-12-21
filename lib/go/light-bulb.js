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

var GoLightBulb = function (_React$Component) {
    _inherits(GoLightBulb, _React$Component);

    function GoLightBulb() {
        _classCallCheck(this, GoLightBulb);

        return _possibleConstructorReturn(this, (GoLightBulb.__proto__ || Object.getPrototypeOf(GoLightBulb)).apply(this, arguments));
    }

    _createClass(GoLightBulb, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 2.5c-6.9 0-12.5 5.6-12.5 12.5 0 4.1 2 7.7 5 10v7.5c0 1.4 1.1 2.5 2.5 2.5 0 1.4 1.1 2.5 2.5 2.5h5c1.4 0 2.5-1.1 2.5-2.5 1.4 0 2.5-1.1 2.5-2.5v-7.5c3-2.3 5-5.9 5-10 0-6.9-5.6-12.5-12.5-12.5z m5 28.8c0 0.6-0.6 1.2-1.2 1.2h-7.5c-0.7 0-1.3-0.6-1.3-1.2v-1.3h10v1.3z m2.5-9.7c-1.3 1.3-2.5 1.7-2.5 4.9v1h-2.5v-5l5-5v-2.5l-2.5-2.5-2.5 2.5-2.5-2.5-2.5 2.5-2.5-2.5-2.5 2.5v2.5l5 5v5h-2.5v-1c0-3.2-1.2-3.6-2.5-4.9-1.6-1.7-2.5-4.1-2.5-6.6 0-5.5 4.5-10 10-10s10 4.5 10 10c0 2.5-0.9 4.9-2.5 6.6z m-7.5 0.9l-5-5v-2.5l2.5 2.5 2.5-2.5 2.5 2.5 2.5-2.5v2.5l-5 5z' })
                )
            );
        }
    }]);

    return GoLightBulb;
}(React.Component);

exports.default = GoLightBulb;
module.exports = exports['default'];